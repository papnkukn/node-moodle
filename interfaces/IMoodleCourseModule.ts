import ModuleNames from '../types/ModuleNames';

export default interface IMoodleCourseModule {
  id: number;
  course: number;
  module: number;
  name: string;
  modname: ModuleNames;
  instance: number;
  section: number;
  sectionnum: number;
  groupmode: number;
  groupingid: number;
  completion: number;
  downloadcontent: number;
}
