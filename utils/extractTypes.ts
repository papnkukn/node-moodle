import { IMoodleWSDefinition } from '../interfaces/IMoodleWSDefinition';
import * as fs from 'fs';
import * as prettier from 'prettier';

const PRETTIER_CONFIG: prettier.Options = {
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  parser: 'typescript',
};
const format = (data: string) => prettier.format(data, PRETTIER_CONFIG);

interface IMoodleFacility {
  name: string;
  functions: string[];
}

interface IMoodleModule {
  name: string;
  facilities: IMoodleFacility[];
}
const json = fs.readFileSync('./api/functions.json', 'utf8');
const definition: IMoodleWSDefinition = JSON.parse(json);

const extractModules = () => {
  const modules: IMoodleModule[] = [];

  for (const item of definition.items) {
    const module = modules.find((module) => module.name === item.module);
    if (!module) {
      const newModule: IMoodleModule = {
        name: item.module,
        facilities: [
          {
            name: item.facility,
            functions: [item.preferName],
          },
        ],
      };

      modules.push(newModule);
      continue;
    } else {
      const facility = module.facilities.find(
        (facility) => facility.name === item.facility
      );
      if (!facility) {
        const newFacility: IMoodleFacility = {
          name: item.facility,
          functions: [item.preferName],
        };

        module.facilities.push(newFacility);
        continue;
      } else {
        const func = facility.functions.find(
          (func) => func === item.preferName
        );

        if (!func) {
          facility.functions.push(item.preferName);
        }
      }
    }
  }
  return modules;
};

const upperCaseFirst = (str: string) =>
  `${str.at(0)?.toUpperCase()}${str.slice(1)}`;

const getInterfaceName = (module: IMoodleModule) =>
  `IMoodleWS${upperCaseFirst(module.name)}`;

const getFunctionSignature = (funcName: string) =>
  `${funcName}: (data?: any) => Promise<any>;`;

const writeFacilityFunctions = (facility: IMoodleFacility) => {
  let functions = ``;
  for (const func of facility.functions) {
    functions = functions.concat(getFunctionSignature(func)).concat('\n');
  }
  return functions;
};

const writeFacilityObject = (facility: IMoodleFacility) => {
  return `${facility.name}: {
    ${writeFacilityFunctions(facility)}
    };`;
};

const writeModuleFacilties = (module: IMoodleModule) => {
  let facilities = ``;
  for (const facility of module.facilities) {
    facilities = facilities.concat(writeFacilityObject(facility)).concat('\n');
  }
  return facilities;
};

const writeModuleInterface = (module: IMoodleModule) => {
  return `export interface ${getInterfaceName(module)} {
    ${writeModuleFacilties(module)}
  }`;
};

const createModuleFile = (module: IMoodleModule) => {
  const interfaceName = getInterfaceName(module);
  fs.writeFileSync(
    `./interfaces/${interfaceName}.ts`,
    format(writeModuleInterface(module))
  );
};

const createModuleFiles = (modules: IMoodleModule[]) => {
  for (const module of modules) {
    createModuleFile(module);
  }
};

const writeImportModule = (module: IMoodleModule) => {
  const interfaceName = getInterfaceName(module);
  return `import {${interfaceName}} from './${interfaceName}'`;
};

const writeImportApiModules = (modules: IMoodleModule[]) => {
  let imports = ``;
  for (const module of modules) {
    imports = imports.concat(writeImportModule(module)).concat('\n');
  }
  return imports;
};

const writeModuleObject = (module: IMoodleModule) =>
  `${module.name}: ${getInterfaceName(module)};`;

const writeApiModules = (modules: IMoodleModule[]) => {
  let apiModules = ``;
  for (const module of modules) {
    apiModules = apiModules.concat(writeModuleObject(module)).concat('\n');
  }
  return apiModules;
};

const writeApiInterface = (modules: IMoodleModule[]) => {
  return `export interface IMoodleWSAPI {
        ${writeApiModules(modules)}
    }`;
};

const createApiFile = (modules: IMoodleModule[]) => {
  const apiFileData = `${writeImportApiModules(modules)}\n\n${writeApiInterface(
    modules
  )}`;
  fs.writeFileSync(`./interfaces/IMoodleWSAPI.ts`, format(apiFileData));
};

const extractApiTypes = (modules: IMoodleModule[]) => {
  createModuleFiles(modules);
  createApiFile(modules);
};

extractApiTypes(extractModules());
