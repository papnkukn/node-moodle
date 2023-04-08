import MoodleApi, { MoodleClient } from '.';

const moodle = MoodleApi({
  baseUrl: 'http://aunonline.aun.edu.eg/med-ns/',
  token: '3752087c24677b2960cc03b821bd27cd',
});

moodle.core.webservice.getSiteInfo();
moodle.core.course.getCourseModule({ cmid: 5620 });
