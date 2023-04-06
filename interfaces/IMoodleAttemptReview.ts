import IMoodleAttempt from './IMoodleAttempt';
import IMoodleQuestion from './IMoodleQuestion';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleAttemptReview {
  grade: number;
  attempt: IMoodleAttempt;
  additionaldata: unknown[];
  questions: IMoodleQuestion[];
  warnings: IMoodleWSWarning[];
}
