import EnrolmentMethods from '../types/EnrolmentMethods';
import NameValuePair from '../types/NameValuePair';
import NumericBoolean from '../types/NumericBoolean';
import IMoodleCourseFilter from './IMoodleCourseFilter';

export default interface IMoodleCourse {
  id: number;
  fullname: string;
  displayname: string;
  shortname: string;
  categoryid: number;
  categoryname: string;
  sortorder: number;
  summary: string;
  summaryformat: number;
  summaryfiles: unknown[];
  overviewfiles: unknown[];
  showactivitydates: boolean;
  showcompletionconditions: boolean;
  contacts: unknown[];
  enrollmentmethods: EnrolmentMethods[];
  format?: string;
  showgrades?: NumericBoolean;
  newsitems?: number;
  startdate?: number; //Number of seconds since 1970 UTC.
  enddate?: number;
  maxbytes?: number;
  showreports?: NumericBoolean;
  visible?: NumericBoolean;
  groupmode?: number;
  groupmodeforce?: number;
  defaultgroupingid?: number;
  enablecompletion?: NumericBoolean;
  completionnotify?: NumericBoolean;
  lang?: string;
  theme?: string;
  marker?: number;
  filters?: IMoodleCourseFilter[];
  courseformatoptions?: NameValuePair<string, number>[];
}
