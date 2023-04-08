import NameValuePair from '../types/NameValuePair';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSReviewOptionsResponse {
  someoptions: NameValuePair<string, number>[];
  alloptions: NameValuePair<string, number>[];
  warnings: IMoodleWSWarning[];
}
