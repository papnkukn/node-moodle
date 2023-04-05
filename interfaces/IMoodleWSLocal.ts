import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSLocal {
  mobile: {
    getPluginSettings: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
