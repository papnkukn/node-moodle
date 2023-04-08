import QuizAccessRules from '../types/QuizAccessRules';

export default interface IMoodleQuizAccessInfo {
  canattempt: boolean;
  canmanage: boolean;
  canpreview: boolean;
  canreviewmyattempts: boolean;
  canviewreports: boolean;
  accessrules: string[];
  activerulenames: QuizAccessRules[];
  preventaccessreasons: string[];
  warnings: unknown[];
}
