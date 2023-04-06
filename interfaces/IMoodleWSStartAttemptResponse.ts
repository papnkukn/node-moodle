import IMoodleAttempt from './IMoodleAttempt';

export default interface IMoodleWSStartAttemptResponse {
  attempt: IMoodleAttempt;
  warnings: unknown[];
}
