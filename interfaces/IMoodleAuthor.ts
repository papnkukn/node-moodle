export default interface IMoodleAuthor {
  id: number;
  fullname: string;
  isdeleted: boolean;
  groups: unknown[];
  urls: { profile: string; profileimage: string };
}
