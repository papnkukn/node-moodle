import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSBlock {
  recentlyaccesseditems: {
    /** List of items a user has accessed most recently. */
    getRecentItems: (params: IMoodleWSParams) => Promise<any>;
  };
  starredcourses: {
    /** Get users starred courses. */
    getStarredCourses: (params: IMoodleWSParams) => Promise<any>;
  };
}
