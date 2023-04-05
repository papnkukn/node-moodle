import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSReport {
  competency: {
    dataForReport: (payload: IMoodleWSPayload) => Promise<any>;
  };
  insights: {
    actionExecuted: (payload: IMoodleWSPayload) => Promise<any>;
    setFixedPrediction: (payload: IMoodleWSPayload) => Promise<any>;
    setNotusefulPrediction: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
