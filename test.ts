import MoodleApi, { MoodleClient } from '.';
import MoodleAttemptUpdate from './classes/MoodleAttemptUpdate';
import AttemptState from './types/AttemptState';

const moodle = MoodleApi({
  baseUrl: 'http://aunonline.aun.edu.eg/med-ns/',
  token: '3752087c24677b2960cc03b821bd27cd',
});

// moodle.core.course
//   .getCoursesByField({ params: { field: 'id', value: '493' } })
//   .then((response) => console.log(response));

// moodle.enrol.self
//   .enrolUser({ params: { courseid: 577 } })
//   .then((res) => console.log(res));

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

moodle.mod.quiz
  .getAttemptAccessInformation({ quizid: 1436 })
  .then((res) => console.log(res));

// moodle.core.course
//   .getCourseModule({ cmid: 5325 })
//   .then((res) => console.log(res));
