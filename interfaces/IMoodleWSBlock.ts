import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSBlock {
  recentlyaccesseditems: {
    /** List of items a user has accessed most recently. */
    getRecentItems: (payload: IMoodleWSPayload) => Promise<any>;
  };
  starredcourses: {
    /** Get users starred courses. */
    getStarredCourses: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
