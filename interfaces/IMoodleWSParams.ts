export default interface IMoodleWSParams {
  [k: string]: any;
  quizid?: number;
  courseid?: number;
  attemptid?: number;
  categoryid?: number;
  discussionid?: number;
  cmid?: number;
  page?: number;
  field?: string;
  value?: string;
  data?: any;
  forumid?: number;
  'courseids[]'?: number;
}
