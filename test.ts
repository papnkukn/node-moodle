import MoodleApi, { MoodleClient } from '.';
import MoodleAttemptUpdate from './classes/MoodleAttemptUpdate';
import IMoodleAttempt from './interfaces/IMoodleAttempt';
import AttemptStates from './types/AttemptStates';
import QuizAccessRules from './types/QuizAccessRules';

const moodle = MoodleApi({
  baseUrl: 'http://aunonline.aun.edu.eg/med-ns/',
  token: '3752087c24677b2960cc03b821bd27cd',
});
