import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSReport {
  competency: {
    /** Load the data for the competency report in a course. */
    dataForReport: (payload: IMoodleWSPayload) => Promise<any>;
  };
  insights: {
    /** Stores an action executed over a group of predictions. */
    actionExecuted: (payload: IMoodleWSPayload) => Promise<any>;
    /** Flags a prediction as fixed. */
    setFixedPrediction: (payload: IMoodleWSPayload) => Promise<any>;
    /** Flags the prediction as not useful. */
    setNotusefulPrediction: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
