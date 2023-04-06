import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSLocal {
  mobile: {
    /** Retrieve the plugin settings. */
    getPluginSettings: (params: IMoodleWSParams) => Promise<any>;
  };
}
