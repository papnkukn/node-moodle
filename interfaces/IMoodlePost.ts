import IMoodleAttachment from './IMoodleAttachment';
import IMoodleAuthor from './IMoodleAuthor';
import IMoodlePostCapabilities from './IMoodlePostCapabilities';

export default interface IMoodlePost {
  id: number;
  subject: string;
  replysubject: string;
  message: string;
  messageformat: number;
  author: IMoodleAuthor;
  discussionid: number;
  hasparent: boolean;
  parentid: number | null;
  timecreated: number;
  timemodified: number;
  unread: boolean;
  isdeleted: boolean;
  isprivatereply: boolean;
  haswordcount: boolean;
  wordcount: number | null;
  charcount: number | null;
  capabilities: IMoodlePostCapabilities;
  urls: {
    view: string | null;
    viewisolated: string | null;
    viewparent: string | null;
    edit: string | null;
    delete: string | null;
    split: string | null;
    reply: string | null;
    export: string | null;
    markasread: string | null;
    markasunread: string | null;
    discuss: string | null;
  };
  attachments: IMoodleAttachment[];
  messageinlinefiles: unknown[];
  tags: unknown[];
  html: {
    rating: string | null;
    taglist: string | null;
    authorsubheading: string;
  };
}
