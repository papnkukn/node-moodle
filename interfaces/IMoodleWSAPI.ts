import IMoodleWSCore from './IMoodleWSCore';
import IMoodleWSAuth from './IMoodleWSAuth';
import IMoodleWSBlock from './IMoodleWSBlock';
import IMoodleWSEnrol from './IMoodleWSEnrol';
import IMoodleWSGradereport from './IMoodleWSGradereport';
import IMoodleWSGradingform from './IMoodleWSGradingform';
import IMoodleWSLocal from './IMoodleWSLocal';
import IMoodleWSMessage from './IMoodleWSMessage';
import IMoodleWSMod from './IMoodleWSMod';
import IMoodleWSReport from './IMoodleWSReport';
import IMoodleWSTool from './IMoodleWSTool';

export default interface IMoodleWSAPI {
  core: IMoodleWSCore;
  auth: IMoodleWSAuth;
  block: IMoodleWSBlock;
  enrol: IMoodleWSEnrol;
  gradereport: IMoodleWSGradereport;
  gradingform: IMoodleWSGradingform;
  local: IMoodleWSLocal;
  message: IMoodleWSMessage;
  mod: IMoodleWSMod;
  report: IMoodleWSReport;
  tool: IMoodleWSTool;
}
