import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSAuth {
  email: {
    /** Get the signup required settings and profile fields. */
    getSignupSettings: (params: IMoodleWSParams) => Promise<any>;
    /** Adds a new user (pendingto be confirmed) in the site. */
    signupUser: (params: IMoodleWSParams) => Promise<any>;
  };
}
