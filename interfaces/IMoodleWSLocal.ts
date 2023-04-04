export interface IMoodleWSLocal {
  mobile: {
    getPluginSettings: (data?: any) => Promise<any>;
  };
}
