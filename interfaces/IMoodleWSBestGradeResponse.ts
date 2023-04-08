import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSBestGradeResponse {
  hasgrade: boolean;
  grade?: number;
  warnings: IMoodleWSWarning[];
}
