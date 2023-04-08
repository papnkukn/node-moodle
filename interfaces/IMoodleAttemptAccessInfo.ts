import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleAttemptAccessInfo {
  endtime: number;
  isfinished: boolean;
  ispreflightcheckrequired: true;
  preventnewattemptreasons: string[];
  warnings: IMoodleWSWarning[];
}
