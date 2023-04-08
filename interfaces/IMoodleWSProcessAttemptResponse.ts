import AttemptStates from '../types/AttemptStates';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSProcessAttemptResponse {
  state: AttemptStates;
  warnings: IMoodleWSWarning[];
}
