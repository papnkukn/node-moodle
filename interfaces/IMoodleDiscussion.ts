import IMoodleAttachment from './IMoodleAttachment';

export default interface IMoodleDiscussion {
  id: number;
  name: string;
  groupid: number;
  timemodified: number;
  usermodified: number;
  timestart: number;
  timeend: number;
  discussion: number;
  parent: number;
  userid: number;
  created: number;
  modified: number;
  mailed: number;
  subject: string;
  message: string;
  messageformat: number;
  messagetrust: number;
  attachment: boolean;
  attachments?: IMoodleAttachment[];
  totalscore: number;
  mailnow: number;
  userfullname: string;
  usermodifiedfullname: string;
  userpictureurl: string;
  usermodifiedpictureurl: string;
  numreplies: number;
  numunread: number;
  pinned: boolean;
  locked: boolean;
  starred: boolean;
  canreply: boolean;
  canlock: boolean;
  canfavourite: boolean;
}
