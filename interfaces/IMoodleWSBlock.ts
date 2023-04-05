import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSBlock {
  recentlyaccesseditems: {
    getRecentItems: (payload: IMoodleWSPayload) => Promise<any>;
  };
  starredcourses: {
    getStarredCourses: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
