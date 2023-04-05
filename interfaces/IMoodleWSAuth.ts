import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSAuth {
  email: {
    getSignupSettings: (payload: IMoodleWSPayload) => Promise<any>;
    signupUser: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
