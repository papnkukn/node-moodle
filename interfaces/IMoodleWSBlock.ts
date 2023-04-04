export interface IMoodleWSBlock {
  recentlyaccesseditems: {
    getRecentItems: (data?: any) => Promise<any>;
  };
  starredcourses: {
    getStarredCourses: (data?: any) => Promise<any>;
  };
}
