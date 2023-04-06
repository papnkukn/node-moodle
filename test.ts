import MoodleApi, { MoodleClient } from '.';

const moodle = MoodleApi({
  baseUrl: 'http://aunonline.aun.edu.eg/med-ns/',
  token: '3752087c24677b2960cc03b821bd27cd',
});

// moodle.core.webservice.getSiteInfo().then((response: any) => {
//   console.log(response);
// });

// moodle.core.course
//   .getCoursesByField({ params: { field: 'id', value: '493' } })
//   .then((response) => console.log(response));

// moodle.core.course
//   .getContents({ params: { courseid: '494' } })
//   .then((res) => console.log(res));

// moodle.mod.quiz
//   .getAttemptData({ params: { attemptid: 3658573, page: 0 } })
//   .then((res) => console.log(res));

// moodle.enrol.self
//   .enrolUser({ params: { courseid: 577 } })
//   .then((res) => console.log(res));

// moodle.mod.quiz.startAttempt({ params: { quizid: 1361 } }).then((res) => {
//   console.log(res);
// });

// moodle.mod.quiz
//   .saveAttempt({
//     attemptid: 3659233,
//     data: {
//       data: [
//         {
//           name: 'slots',
//           value: '2',
//         },
//         {
//           name: 'q3662334:2_:sequencecheck',
//           value: '1',
//         },
//         {
//           name: 'q3662334:2_answer',
//           value: '1',
//         },
//         {
//           name: 'slots',
//           value: '3',
//         },
//         {
//           name: 'q3662334:3_:sequencecheck',
//           value: '1',
//         },
//         {
//           name: 'q3662334:3_answer',
//           value: '2',
//         },
//       ],
//     },
//   })
//   .then((result) => console.log(result));

// moodle.core.course.getCategories().then((cats) => console.log(cats[0].name));
// moodle.mod.forum
//   .getDiscussionPosts({ discussionid: 70 })
//   .then((res) => console.log(res));

// moodle.mod.forum.getForumDiscussions({ forumid: 28 }).then((res) => {
//   console.log(res);
// });

// moodle.mod.quiz
//   .getUserAttempts({ quizid: 1360, status: 'all' })
//   .then((res) => console.log(res.attempts.at(-1)!.state));

moodle.mod.quiz.getAttemptData({ attemptid: 3660439, page: 0 }).then((res) => {
  console.log(res);
});

// moodle.core.course.getCourseModule({ cmid: 5325 }).then((res) => {
//   moodle.mod.quiz
//     .getUserAttempts({ quizid: res.cm.instance, status: 'all' })
//     .then((res) => {
//       moodle.mod.quiz
//         .getAttemptAccessInformation({
//           quizid: res.attempts[0].quiz,
//           attemptid: res.attempts[0].id,
//         })
//         .then((res) => console.log(res));
//     });
// });

// moodle.core.course
//   .getCourseModule({ cmid: 5325 })
//   .then((res) => console.log(res));

/* data: [
    {slots: 1, 'q3662334:2_:sequencecheck': 1, }

  ]*/
