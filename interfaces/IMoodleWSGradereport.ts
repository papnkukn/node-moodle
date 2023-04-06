import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSGradereport {
  overview: {
    /** Get the given user courses final grades */
    getCourseGrades: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the report view event */
    viewGradeReport: (params: IMoodleWSParams) => Promise<any>;
  };
  user: {
    /** Returns the complete list of grade items for users in a course */
    getGradeItems: (params: IMoodleWSParams) => Promise<any>;
    /** Get the user/s report grades table for a course */
    getGradesTable: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the grade_report_viewed event when a user view his grade report (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). */
    viewGradeReport: (params: IMoodleWSParams) => Promise<any>;
  };
}
