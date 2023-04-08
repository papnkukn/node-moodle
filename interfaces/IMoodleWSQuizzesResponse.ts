import IMoodleQuiz from './IMoodleQuiz';
import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleWSQuizzesResponse {
  quizzes: IMoodleQuiz[];
  warnings: IMoodleWSWarning[];
}
