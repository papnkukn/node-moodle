import IMoodleDiscussion from './IMoodleDiscussion';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSDiscussionsResponse {
  discussions: IMoodleDiscussion[];
  warnings: IMoodleWSWarning[];
}
