import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSMessage {
  airnotifier: {
    areNotificationPreferencesConfigured: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    enableDevice: (payload: IMoodleWSPayload) => Promise<any>;
    getUserDevices: (payload: IMoodleWSPayload) => Promise<any>;
    isSystemConfigured: (payload: IMoodleWSPayload) => Promise<any>;
  };
  popup: {
    getPopupNotifications: (payload: IMoodleWSPayload) => Promise<any>;
    getUnreadPopupNotificationCount: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
  };
}
