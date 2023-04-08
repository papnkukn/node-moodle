import IMoodleWSWarning from './IMoodleWSWarning';

export default interface IMoodleQuizFeedback {
  feedbacktext: string;
  feedbacktextformat: string;
  warnings: IMoodleWSWarning[];
}
