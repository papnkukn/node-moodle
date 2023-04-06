import ModuleName, { ModulePlural } from '../types/ModuleName';
import NumericBoolean from '../types/NumericBoolean';
import IMoodleResourceContent from './IMoodleResourceContent';
import IMoodleResourceContentInfo from './IMoodleResourceContentInfo';

export default interface IMoodleCourseModule {
  id: number;
  url: string;
  name: string;
  instance: number;
  contextid: number;
  visible: NumericBoolean;
  uservisible: boolean;
  visibleoncoursepage: NumericBoolean;
  modicon: string; //url
  modname: ModuleName | string;
  modplural: ModulePlural | string;
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
