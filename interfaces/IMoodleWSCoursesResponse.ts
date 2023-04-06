import IMoodleCourse from './IMoodleCourse';

export default interface IMoodleWSCoursesResponse {
  courses: IMoodleCourse[];
  warnings: unknown[];
}
