export interface IMoodleWSGradereport {
  overview: {
    getCourseGrades: (data?: any) => Promise<any>;
    viewGradeReport: (data?: any) => Promise<any>;
  };
  user: {
    getGradeItems: (data?: any) => Promise<any>;
    getGradesTable: (data?: any) => Promise<any>;
    viewGradeReport: (data?: any) => Promise<any>;
  };
}
