import IMoodleCourseModule from './IMoodleCourseModule';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSCourseModuleResponse {
  cm: IMoodleCourseModule;
  warnings: IMoodleWSWarning[];
}
