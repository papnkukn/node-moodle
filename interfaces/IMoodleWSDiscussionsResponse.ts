import IMoodleDiscussion from './IMoodleDiscussion';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleDiscussionsResponse {
  discussions: IMoodleDiscussion[];
  warnings: IMoodleWSWarning[];
}
