import IMoodleQuestion from './IMoodleQuestion';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSAttemptSummaryResponse {
  questions: IMoodleQuestion[];
  warnings: IMoodleWSWarning[];
}
