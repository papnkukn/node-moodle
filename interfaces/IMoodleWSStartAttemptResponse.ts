import IMoodleAttempt from './IMoodleAttempt';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSStartAttemptResponse {
  attempt: IMoodleAttempt;
  warnings: IMoodleWSWarning[];
}
