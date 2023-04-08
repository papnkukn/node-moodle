import * as fs from 'fs';
import path from 'path';

interface Interface {
  file: string;
  name: string;
}

const getInterfaceName = (fileName: string) => {
  return fileName.slice(0, -3);
};

const getFiles = (path: string) => {
  const interfaceFiles = fs.readdirSync(path);
  return interfaceFiles
    .filter((interfaceFile) => interfaceFile !== 'index.ts')
    .map((interfaceFile) => ({
      file: interfaceFile,
      name: getInterfaceName(interfaceFile),
    })) as Interface[];
};

const writeInterfaceImport = (inter: Interface) => {
  const data = `import type ${inter.name} from "./${inter.name}";\n`;
  return data;
};
const writeInterfacesImport = (interfaces: Interface[]) => {
  let data = '';
  for (const inter of interfaces) {
    data = data.concat(writeInterfaceImport(inter));
  }
  return data;
};

const writeInterfaceExport = (inter: Interface) => {
  const data = `${inter.name},\n`;
  return data;
};

const writeInterfacesExport = (interfaces: Interface[]) => {
  let data = 'export type {';
  for (const inter of interfaces) {
    data = data.concat(writeInterfaceExport(inter));
  }
  data = data.concat('};');
  return data;
};

const writeIndexFile = (interfaces: Interface[]) => {
  console.log('Writing imports...');
  let data = writeInterfacesImport(interfaces);
  console.log('Writing exports...');
  data = data.concat(writeInterfacesExport(interfaces));
  return data;
};

const createIndexFile = (folder: string) => {
  console.log('creating index file..');
  const folderPath = path.resolve(__dirname, `../${folder}`);
  fs.writeFileSync(
    path.resolve(folderPath, 'index.ts'),
    writeIndexFile(getFiles(folderPath))
  );
};

createIndexFile('types');
