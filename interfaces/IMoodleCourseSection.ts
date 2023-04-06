import NumericBoolean from '../types/NumericBoolean';
import IMoodleCourseModule from './IMoodleCourseModule';

export default interface IMoodleCourseSection {
  id: number;
  name: string;
  summary: string;
  summaryformat: number;
  visible: NumericBoolean;
  section: number;
  hiddenbynumsections: number;
  uservisible: boolean;
  modules: IMoodleCourseModule[];
}
