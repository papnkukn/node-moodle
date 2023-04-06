import IMoodleAttempt from './IMoodleAttempt';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSAttemptsResponse {
  attempts: IMoodleAttempt[];
  warnings: IMoodleWSWarning[];
}
