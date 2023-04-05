export default interface IMoodleWSPayload {
  [k: string]: any;
  quizid?: number;
  courseid?: number;
  attemptid?: number;
  categoryid?: number;
  cmid?: number;
  page?: number;
  field?: string;
  value?: string;
  data?: any;
}
