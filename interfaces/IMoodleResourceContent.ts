import ResourceTypes from '../types/ResourceTypes';

export default interface IMoodleResourceContent {
  type: ResourceTypes;
  filename: string;
  filepath: string | null;
  filesize: number | null;
  fileurl: string | null;
  timecreated: number | null;
  timemodified: number | null;
  sortorder: number | null;
  mimetype?: string;
  isexternalfile?: boolean;
  userid: number | null;
  author: string | null;
  license: string | null;
}
