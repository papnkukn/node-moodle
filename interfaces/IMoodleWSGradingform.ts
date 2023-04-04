export interface IMoodleWSGradingform {
  guide: {
    graderGradingpanelFetch: (data?: any) => Promise<any>;
    graderGradingpanelStore: (data?: any) => Promise<any>;
  };
  rubric: {
    graderGradingpanelFetch: (data?: any) => Promise<any>;
    graderGradingpanelStore: (data?: any) => Promise<any>;
  };
}
