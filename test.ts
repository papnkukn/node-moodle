import MoodleApi, { MoodleClient } from '.';

const moodle = MoodleApi({
  baseUrl: 'http://aunonline.aun.edu.eg/med-ns/',
  token: '3752087c24677b2960cc03b821bd27cd',
});

moodle.core.webservice.getSiteInfo().then(async () => {
  const { token } = await MoodleClient.authenticate({
    baseUrl: 'http://aunonline.aun.edu.eg/med-ns/',
    credentials: { username: 'med2020@8388', password: 'Gg@12345' },
  });
  moodle.config.token = token;
  moodle.core.webservice
    .getSiteInfo()
    .then((res) => console.log({ ...res, functions: undefined }));
});

// moodle.core.course.getCourseModule({ cmid: 5620 });
