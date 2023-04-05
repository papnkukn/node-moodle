export default interface IMoodleCategory {
  id: number;
  name: string;
  description: string;
  descriptionformat: number;
  parent: number;
  sortorder: number;
  coursecount: number;
  depth: number;
  path: string;
}
