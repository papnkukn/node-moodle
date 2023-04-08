import QuestionTypes from '../types/QuestionTypes';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSQTypesResponse {
  questiontypes: QuestionTypes[];
  warnings: IMoodleWSWarning[];
}
