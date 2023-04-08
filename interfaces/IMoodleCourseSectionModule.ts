import ModuleNames, { ModulePlurals } from '../types/ModuleNames';
import NumericBoolean from '../types/NumericBoolean';
import IMoodleResourceContent from './IMoodleResourceContent';
import IMoodleResourceContentInfo from './IMoodleResourceContentInfo';

export default interface IMoodleCourseSectionModule {
  id: number;
  url: string;
  name: string;
  instance: number;
  contextid: number;
  visible: NumericBoolean;
  uservisible: boolean;
  visibleoncoursepage: NumericBoolean;
  modicon: string; //url
  modname: ModuleNames;
  modplural: ModulePlurals | string;
  indent: number;
  onclick: string;
  afterlink: string | null;
  customdata: string;
  noviewlink: boolean;
  completion: number;
  downloadcontent: number;
  dates: number[];
  contents?: IMoodleResourceContent[];
  contentsinfo?: IMoodleResourceContentInfo;
}
