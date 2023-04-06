import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSReport {
  competency: {
    /** Load the data for the competency report in a course. */
    dataForReport: (params: IMoodleWSParams) => Promise<any>;
  };
  insights: {
    /** Stores an action executed over a group of predictions. */
    actionExecuted: (params: IMoodleWSParams) => Promise<any>;
    /** Flags a prediction as fixed. */
    setFixedPrediction: (params: IMoodleWSParams) => Promise<any>;
    /** Flags the prediction as not useful. */
    setNotusefulPrediction: (params: IMoodleWSParams) => Promise<any>;
  };
}
