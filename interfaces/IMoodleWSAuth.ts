export interface IMoodleWSAuth {
  email: {
    getSignupSettings: (data?: any) => Promise<any>;
    signupUser: (data?: any) => Promise<any>;
  };
}
