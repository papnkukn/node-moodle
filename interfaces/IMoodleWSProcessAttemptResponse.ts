import AttemptState from '../types/AttemptState';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSProcessAttemptResponse {
  state: AttemptState;
  warnings: IMoodleWSWarning[];
}
