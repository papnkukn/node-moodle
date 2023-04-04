export interface IMoodleWSEnrol {
  guest: {
    getInstanceInfo: (data?: any) => Promise<any>;
  };
  manual: {
    enrolUsers: (data?: any) => Promise<any>;
    unenrolUsers: (data?: any) => Promise<any>;
  };
  self: {
    enrolUser: (data?: any) => Promise<any>;
    getInstanceInfo: (data?: any) => Promise<any>;
  };
}
