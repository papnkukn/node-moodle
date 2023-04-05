import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSGradereport {
  overview: {
    getCourseGrades: (payload: IMoodleWSPayload) => Promise<any>;
    viewGradeReport: (payload: IMoodleWSPayload) => Promise<any>;
  };
  user: {
    getGradeItems: (payload: IMoodleWSPayload) => Promise<any>;
    getGradesTable: (payload: IMoodleWSPayload) => Promise<any>;
    viewGradeReport: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
