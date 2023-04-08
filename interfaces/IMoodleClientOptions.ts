import IMoodleWSCredentials from './IMoodleWSCredentials';

export default interface IMoodleClientOptions {
  baseUrl: string;
  userAgent?: string;
  token?: string;
  credentials?: IMoodleWSCredentials;
}
