import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSMessage {
  airnotifier: {
    /** Check if the users have notification preferences configured yet */
    areNotificationPreferencesConfigured: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Enables or disables a registered user device so it can receive Push notifications */
    enableDevice: (params: IMoodleWSParams) => Promise<any>;
    /** Return the list of mobile devices that are registered in Moodle for the given user */
    getUserDevices: (params: IMoodleWSParams) => Promise<any>;
    /** Check whether the airnotifier settings have been configured */
    isSystemConfigured: (params: IMoodleWSParams) => Promise<any>;
  };
  popup: {
    /** Retrieve a list of popup notifications for a user */
    getPopupNotifications: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the count of unread popup notifications for a given user */
    getUnreadPopupNotificationCount: (params: IMoodleWSParams) => Promise<any>;
  };
}
