export default interface IMoodleQuizAccessInfo {
  canattempt: boolean;
  canmanage: boolean;
  canpreview: boolean;
  canreviewmyattempts: boolean;
  canviewreports: boolean;
  accessrules: unknown[];
  activerulenames: string[];
  preventaccessreasons: string[];
  warnings: unknown[];
}
