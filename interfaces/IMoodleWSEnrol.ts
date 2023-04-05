import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSEnrol {
  guest: {
    getInstanceInfo: (payload: IMoodleWSPayload) => Promise<any>;
  };
  manual: {
    enrolUsers: (payload: IMoodleWSPayload) => Promise<any>;
    unenrolUsers: (payload: IMoodleWSPayload) => Promise<any>;
  };
  self: {
    enrolUser: (payload: IMoodleWSPayload) => Promise<any>;
    getInstanceInfo: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
