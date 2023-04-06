import IMoodleAttempt from './IMoodleAttempt';

export default interface IMoodleWSAttemptsResponse {
  attempts: IMoodleAttempt[];
  warnings: unknown[];
}
