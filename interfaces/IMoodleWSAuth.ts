import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSAuth {
  email: {
    /** Get the signup required settings and profile fields. */
    getSignupSettings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Adds a new user (pendingto be confirmed) in the site. */
    signupUser: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
