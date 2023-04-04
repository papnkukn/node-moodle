export interface IMoodleWSMessage {
  airnotifier: {
    areNotificationPreferencesConfigured: (data?: any) => Promise<any>;
    enableDevice: (data?: any) => Promise<any>;
    getUserDevices: (data?: any) => Promise<any>;
    isSystemConfigured: (data?: any) => Promise<any>;
  };
  popup: {
    getPopupNotifications: (data?: any) => Promise<any>;
    getUnreadPopupNotificationCount: (data?: any) => Promise<any>;
  };
}
