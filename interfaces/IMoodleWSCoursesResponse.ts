import IMoodleCourse from './IMoodleCourse';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSCoursesResponse {
  courses: IMoodleCourse[];
  warnings: IMoodleWSWarning[];
}
