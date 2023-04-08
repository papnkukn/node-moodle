import AttemptStates from '../types/AttemptStates';

export default interface IMoodleAttempt {
  id: number;
  quiz: number;
  userid: number;
  attempt: number;
  uniqueid: number;
  layout: string;
  currentpage: number;
  preview: number;
  state: AttemptStates;
  timestart: number;
  timefinish: number;
  timemodified: number;
  timemodifiedoffline: number;
  timecheckstate: number | null;
  sumgrades: number | null;
  gradednotificationsenttime: number | null;
}
