import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSLocal {
  mobile: {
    /** Retrieve the plugin settings. */
    getPluginSettings: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
