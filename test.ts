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

moodle.core.course.getCategories().then((cats) => console.log(cats[0].name));

/* data: [
    {slots: 1, 'q3662334:2_:sequencecheck': 1, }

  ]*/
