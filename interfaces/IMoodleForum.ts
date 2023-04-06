import NumericBoolean from '../types/NumericBoolean';

export default interface IMoodleForum {
  id: number;
  course: number;
  type: string;
  name: string;
  intro: string;
  introformat: number;
  introfiles: unknown[];
  lang: string;
  duedate: number;
  cutoffdate: string;
  assessed: number;
  assesstimestart: number;
  assesstimefinish: number;
  scale: number;
  grade_forum: number;
  grade_forum_notify: number;
  maxbytes: number;
  maxattachments: number;
  forcesubscribe: NumericBoolean | number;
  trackingtype: number;
  rsstype: number;
  rssarticle: number;
  timemodified: number;
  warnafter: number;
  blockafter: number;
  blockperiod: number;
  completiondiscussions: number;
  completionreplies: number;
  completionposts: number;
  cmid: number;
  numdiscussions: number;
  cancreatediscussions: boolean;
  lockdiscussionafter: number;
  istracked: boolean;
}
