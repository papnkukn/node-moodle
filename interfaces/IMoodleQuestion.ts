import QuestionStates from '../types/QuestionStates';
import QuestionStatuses from '../types/QuestionStatuses';
import QuestionTypes from '../types/QuestionTypes';

export default interface IMoodleQuestion {
  slot: number;
  type: QuestionTypes;
  page: number;
  html: string;
  responsefileareas: unknown[];
  sequencecheck: number;
  lastactiontime: number;
  hasautosavedstep: boolean;
  flagged: boolean;
  number: number;
  state?: QuestionStates;
  status: QuestionStatuses;
  blockedbyprevious: boolean;
  mark?: string;
  maxmark: number;
  settings: string;
}
