export interface IMoodleWSReport {
  competency: {
    dataForReport: (data?: any) => Promise<any>;
  };
  insights: {
    actionExecuted: (data?: any) => Promise<any>;
    setFixedPrediction: (data?: any) => Promise<any>;
    setNotusefulPrediction: (data?: any) => Promise<any>;
  };
}
