import IMoodlePost from './IMoodlePost';

export default interface IMoodleWSDiscussionPostsResponse {
  posts: IMoodlePost[];
  forumid: number;
  courseid: number;
  ratinginfo: {
    contextid: number;
    component: string;
    ratingarea: string;
    canviewall: boolean;
    canviewany: boolean;
    scales: unknown[];
    ratings: unknown[];
  };
  warnings: unknown[];
}
