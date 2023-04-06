import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSGradingform {
  guide: {
    /** Fetch the data required to display the grader grading panel, creating the grade item if required */
    graderGradingpanelFetch: (params: IMoodleWSParams) => Promise<any>;
    /** Store the grading data for a user from the grader grading panel. */
    graderGradingpanelStore: (params: IMoodleWSParams) => Promise<any>;
  };
  rubric: {
    /** Fetch the data required to display the grader grading panel, creating the grade item if required */
    graderGradingpanelFetch: (params: IMoodleWSParams) => Promise<any>;
    /** Store the grading data for a user from the grader grading panel. */
    graderGradingpanelStore: (params: IMoodleWSParams) => Promise<any>;
  };
}
