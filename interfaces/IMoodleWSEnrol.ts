import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSEnrol {
  guest: {
    /** Return guest enrolment instance information. */
    getInstanceInfo: (params: IMoodleWSParams) => Promise<any>;
  };
  manual: {
    /** Manual enrol users */
    enrolUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Manual unenrol users */
    unenrolUsers: (params: IMoodleWSParams) => Promise<any>;
  };
  self: {
    /** Self enrol the current user in the given course. */
    enrolUser: (params: IMoodleWSParams) => Promise<any>;
    /** self enrolment instance information. */
    getInstanceInfo: (params: IMoodleWSParams) => Promise<any>;
  };
}
