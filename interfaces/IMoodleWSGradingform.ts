import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSGradingform {
  guide: {
    /** Fetch the data required to display the grader grading panel, creating the grade item if required */
    graderGradingpanelFetch: (payload: IMoodleWSPayload) => Promise<any>;
    /** Store the grading data for a user from the grader grading panel. */
    graderGradingpanelStore: (payload: IMoodleWSPayload) => Promise<any>;
  };
  rubric: {
    /** Fetch the data required to display the grader grading panel, creating the grade item if required */
    graderGradingpanelFetch: (payload: IMoodleWSPayload) => Promise<any>;
    /** Store the grading data for a user from the grader grading panel. */
    graderGradingpanelStore: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
