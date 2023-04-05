import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSGradingform {
  guide: {
    graderGradingpanelFetch: (payload: IMoodleWSPayload) => Promise<any>;
    graderGradingpanelStore: (payload: IMoodleWSPayload) => Promise<any>;
  };
  rubric: {
    graderGradingpanelFetch: (payload: IMoodleWSPayload) => Promise<any>;
    graderGradingpanelStore: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
