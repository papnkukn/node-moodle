import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSEnrol {
  guest: {
    /** Return guest enrolment instance information. */
    getInstanceInfo: (payload: IMoodleWSPayload) => Promise<any>;
  };
  manual: {
    /** Manual enrol users */
    enrolUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Manual unenrol users */
    unenrolUsers: (payload: IMoodleWSPayload) => Promise<any>;
  };
  self: {
    /** Self enrol the current user in the given course. */
    enrolUser: (payload: IMoodleWSPayload) => Promise<any>;
    /** self enrolment instance information. */
    getInstanceInfo: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
