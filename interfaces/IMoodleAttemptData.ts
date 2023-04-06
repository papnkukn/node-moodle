import IMoodleAttempt from './IMoodleAttempt';
import IMoodleQuestion from './IMoodleQuestion';

export default interface IMoodleAttemptData {
  attempt: IMoodleAttempt;
  messages: unknown[];
  nextpage: number;
  questions: IMoodleQuestion[];
  warnings: unknown[];
}
