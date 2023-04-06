import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSMessage {
  airnotifier: {
    /** Check if the users have notification preferences configured yet */
    areNotificationPreferencesConfigured: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Enables or disables a registered user device so it can receive Push notifications */
    enableDevice: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the list of mobile devices that are registered in Moodle for the given user */
    getUserDevices: (payload: IMoodleWSPayload) => Promise<any>;
    /** Check whether the airnotifier settings have been configured */
    isSystemConfigured: (payload: IMoodleWSPayload) => Promise<any>;
  };
  popup: {
    /** Retrieve a list of popup notifications for a user */
    getPopupNotifications: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the count of unread popup notifications for a given user */
    getUnreadPopupNotificationCount: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
  };
}
