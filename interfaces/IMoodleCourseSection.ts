import NumericBoolean from '../types/NumericBoolean';
import IMoodleCourseSectionModule from './IMoodleCourseSectionModule';

export default interface IMoodleCourseSection {
  id: number;
  name: string;
  summary: string;
  summaryformat: number;
  visible: NumericBoolean;
  section: number;
  hiddenbynumsections: number;
  uservisible: boolean;
  modules: IMoodleCourseSectionModule[];
}
