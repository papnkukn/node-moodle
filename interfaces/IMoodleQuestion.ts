import QuestionStatus from '../types/QuestionStatus';
import QuestionType from '../types/QuestionType';

export default interface IMoodleQuestion {
  slot: number;
  type: QuestionType;
  page: number;
  html: string;
  responsefileareas: unknown[];
  sequencecheck: number;
  lastactiontime: number;
  hasautosavedstep: boolean;
  flagged: boolean;
  number: number;
  state?: QuestionState;
  status: QuestionStatus;
  blockedbyprevious: boolean;
  mark?: string;
  maxmark: number;
  settings: string;
}
