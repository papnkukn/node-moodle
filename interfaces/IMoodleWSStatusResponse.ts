import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSStatusResponse {
  status: boolean;
  warnings: IMoodleWSWarning[];
}
