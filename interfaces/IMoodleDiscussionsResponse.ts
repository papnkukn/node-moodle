import IMoodleDiscussion from './IMoodleDiscussion';

export default interface IMoodleDiscussionsResponse {
  discussions: IMoodleDiscussion[];
  warnings: unknown[];
}
