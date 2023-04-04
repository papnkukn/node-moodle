import { MoodleApi } from '.';

const moodle = MoodleApi({
  baseUrl: 'http://aunonline.aun.edu.eg/med-ns/',
  token: '3752087c24677b2960cc03b821bd27cd',
});

moodle.core.webservice.getSiteInfo().then((response: any) => {
  console.log(response);
});

moodle.core.course.getCategories().then((response) => console.log(response));
