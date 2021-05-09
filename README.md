# Moodle API client for Node.js

A simple and developer friendly JavaScript module to perform Web Service (API) calls to the Moodle site.

## Getting started

Install the module
```bash
npm install node-moodle
```

Get site info (using Promised callbacks)
```js
const { MoodleClient } = require('node-moodle');

const moodle = new MoodleClient({
	baseUrl: "https://moodle.example.com", //<-- Put your Moodle URL here
	token: "exppsBdQwLvNwYRoAuaiBO5j0fWTzxU6" //<-- Put your token here
});

moodle.core.webservice.getSiteInfo()
	.then(res => console.log(res))
	.catch(err => console.error(err.message));
```

Create a new user (using async-await approach)
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

async function main() {
  try {
		//Request data
		var req = {
			users: [
				{
					firstname: "Foo",
					lastname: "Bar",
					username: "foo",
					password: "FooBar123!",
					email: "foo@example.com",
				}
			]
		};

		//Invoke a method
		var res = await moodle.core.user.createUsers(req);
		
		//Response data
		console.log(res);
		/*
		[
			{
				"id": 3,
				"username": "foo"
			}
		]
		*/
	}
	catch (err) {
	  console.log(err);
	}
}

main();
```

## Event handlers

`MoodleClient` extends `EventEmitter`
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

//Before request
moodle.on("request", function(data) {
	console.log(data);
});

//After request
moodle.on("resposne", function(data) {
	console.log(data);
});

//Catch error
moodle.on("error", function(err) {
	console.error(err);
});
```

## Convert JSON to form data

Moodle has a peculiar way of specifying request parameters.
Parameters can either be sent in URL query string or POST form body.

Thus a JSON object needs to be converted to form data
```json
{
	"users": [
		{
			"firstname": "Foo",
			"lastname": "Bar",
			"username": "foo",
			"password": "FooBar123!",
			"email": "foo@example.com"
		}
	]
}
```

As `Content-Type: application/x-www-form-urlencoded`
```
users[0][firstname]=Foo&users[0][lastname]=Bar&users[0][username]=foo&users[0][password]=FooBar123%21&users[0][email]=foo%40email.com
```

To perform the conversion in the code invoke the `flatten` function
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

const form = moodle.flatten({
	"users": [
		{
			"firstname": "Foo",
			"lastname": "Bar",
			"username": "foo",
			"password": "FooBar123!",
			"email": "foo@example.com"
		}
	]
});

console.log(form); //users[0][firstname]=Foo&users[0][lastname]=Bar...
```

## List of functions

Functions are used in the following manner
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

//core_webservice_get_site_info => core.webservice.getSiteInfo
moodle.core.webservice.getSiteInfo(); //Returns `Promise`
```

`Promise` can be handled with `.then().catch()` function chain
```js
moodle.core.webservice.getSiteInfo()
.then(function(res) {
  console.log(res);
})
.catch(function(err) {
  console.error(err);
});
```
or using `async-await` syntax for later versions of JavaScript
```js
async function sample() {
  try {
    var res = await moodle.core.webservice.getSiteInfo();
		console.log(res);
  }
  catch (err) {
	  console.error(err);
  }
}

sample();
```

Offical list of functions can be found at [Web service API functions](https://docs.moodle.org/dev/Web_service_API_functions)

| JS function | API function | Description |
|-------------|--------------|-------------|
| auth.email.getSignupSettings(data) | auth_email_get_signup_settings | Get the signup required settings and profile fields. |
| auth.email.signupUser(data) | auth_email_signup_user | Adds a new user (pendingto be confirmed) in the site. |
| block.recentlyaccesseditems.getRecentItems(data) | block_recentlyaccesseditems_get_recent_items | List of items a user has accessed most recently. |
| block.starredcourses.getStarredCourses(data) | block_starredcourses_get_starred_courses | Get users starred courses. |
| core.auth.confirmUser(data) | core_auth_confirm_user | Confirm a user account. |
| core.auth.isAgeDigitalConsentVerificationEnabled(data) | core_auth_is_age_digital_consent_verification_enabled | Checks if age digital consent verification is enabled. |
| core.auth.isMinor(data) | core_auth_is_minor | Requests a check if a user is a digital minor. |
| core.auth.requestPasswordReset(data) | core_auth_request_password_reset | Requests a password reset. |
| core.auth.resendConfirmationEmail(data) | core_auth_resend_confirmation_email | Resend confirmation email. |
| core.auth.requestPasswordReset(data) | core_auth_request_password_reset | Requests a password reset. |
| core.auth.resendConfirmationEmail(data) | core_auth_resend_confirmation_email | Resend confirmation email. |
| core.backup.getAsyncBackupLinksBackup(data) | core_backup_get_async_backup_links_backup | Gets the data to use when updating the status table row in the UI for when an async backup completes. |
| core.backup.getAsyncBackupLinksRestore(data) | core_backup_get_async_backup_links_restore | Gets the data to use when updating the status table row in the UI for when an async restore completes. |
| core.backup.getAsyncBackupProgress(data) | core_backup_get_async_backup_progress | Get the progress of an Asyncronhous backup. |
| core.badges.getUserBadges(data) | core_badges_get_user_badges | Returns the list of badges awarded to a user. |
| core.block.getCourseBlocks(data) | core_block_get_course_blocks | Returns blocks information for a course. |
| core.block.getDashboardBlocks(data) | core_block_get_dashboard_blocks | Returns blocks information for the given user dashboard. |
| core.blog.getEntries(data) | core_blog_get_entries | Returns blog entries. |
| core.blog.viewEntries(data) | core_blog_view_entries | Trigger the blog_entries_viewed event. |
| core.calendar.createCalendarEvents(data) | core_calendar_create_calendar_events | Create calendar events |
| core.calendar.deleteCalendarEvents(data) | core_calendar_delete_calendar_events | Delete calendar events |
| core.calendar.getActionEventsByCourse(data) | core_calendar_get_action_events_by_course | Get calendar action events by course |
| core.calendar.getActionEventsByCourses(data) | core_calendar_get_action_events_by_courses | Get calendar action events by courses |
| core.calendar.getActionEventsByTimesort(data) | core_calendar_get_action_events_by_timesort | Get calendar action events by tiemsort |
| core.calendar.getAllowedEventTypes(data) | core_calendar_get_allowed_event_types | Get the type of events a user can create in the given course. |
| core.calendar.getCalendarAccessInformation(data) | core_calendar_get_calendar_access_information | Convenience function to retrieve some permissions/access information for the given course calendar. |
| core.calendar.getCalendarDayView(data) | core_calendar_get_calendar_day_view | Fetch the day view data for a calendar |
| core.calendar.getCalendarEventById(data) | core_calendar_get_calendar_event_by_id | Get calendar event by id |
| core.calendar.getCalendarEvents(data) | core_calendar_get_calendar_events | Get calendar events |
| core.calendar.getCalendarMonthlyView(data) | core_calendar_get_calendar_monthly_view | Fetch the monthly view data for a calendar |
| core.calendar.getCalendarUpcomingView(data) | core_calendar_get_calendar_upcoming_view | Fetch the upcoming view data for a calendar |
| core.calendar.getTimestamps(data) | core_calendar_get_timestamps | Fetch unix timestamps for given date times. |
| core.calendar.submitCreateUpdateForm(data) | core_calendar_submit_create_update_form | Submit form data for event form |
| core.calendar.updateEventStartDay(data) | core_calendar_update_event_start_day | Update the start day (but not time) for an event. |
| core.cohort.addCohortMembers(data) | core_cohort_add_cohort_members | Add members to cohort |
| core.cohort.createCohorts(data) | core_cohort_create_cohorts | Create cohorts |
| core.cohort.deleteCohortMembers(data) | core_cohort_delete_cohort_members | Delete members from cohort |
| core.cohort.deleteCohorts(data) | core_cohort_delete_cohorts | Delete cohorts |
| core.cohort.getCohortMembers(data) | core_cohort_get_cohort_members | Get cohort members |
| core.cohort.getCohorts(data) | core_cohort_get_cohorts | Get cohorts |
| core.cohort.searchCohorts(data) | core_cohort_search_cohorts | Search for cohorts. |
| core.cohort.updateCohorts(data) | core_cohort_update_cohorts | Update cohorts |
| core.comment.addComments(data) | core_comment_add_comments | Adds a comment or comments. |
| core.comment.deleteComments(data) | core_comment_delete_comments | Deletes a comment or comments. |
| core.comment.getComments(data) | core_comment_get_comments | Return all the comments for an specific component, context. |
| core.competency.addCompetencyToCourse(data) | core_competency_add_competency_to_course | Add competency to a course |
| core.competency.addCompetencyToPlan(data) | core_competency_add_competency_to_plan | Add a competency to a learning plan |
| core.competency.addCompetencyToTemplate(data) | core_competency_add_competency_to_template | Add competency to a template |
| core.competency.addRelatedCompetency(data) | core_competency_add_related_competency | Create a relationship between competencies |
| core.competency.approvePlan(data) | core_competency_approve_plan | Approve a learning plan |
| core.competency.competencyFrameworkViewed(data) | core_competency_competency_framework_viewed | Notify a competency framework as being viewed |
| core.competency.competencyViewed(data) | core_competency_competency_viewed | Report a competency as being viewed |
| core.competency.completePlan(data) | core_competency_complete_plan | Complete a learning plan |
| core.competency.countCompetencies(data) | core_competency_count_competencies | Count the competencies |
| core.competency.countCompetenciesInCourse(data) | core_competency_count_competencies_in_course | Count competencies in a course |
| core.competency.countCompetenciesInTemplate(data) | core_competency_count_competencies_in_template | Count the competencies in a template |
| core.competency.countCompetencyFrameworks(data) | core_competency_count_competency_frameworks | Count the competency frameworks |
| core.competency.countCourseModuleCompetencies(data) | core_competency_count_course_module_competencies | Count the competencies in a course module |
| core.competency.countCoursesUsingCompetency(data) | core_competency_count_courses_using_competency | Count courses using a competency |
| core.competency.countTemplates(data) | core_competency_count_templates | Count templates |
| core.competency.countTemplatesUsingCompetency(data) | core_competency_count_templates_using_competency | Count templates using a competency |
| core.competency.createCompetency(data) | core_competency_create_competency | Create a competency |
| core.competency.createCompetencyFramework(data) | core_competency_create_competency_framework | Create a competency framework |
| core.competency.createPlan(data) | core_competency_create_plan | Create a learning plan |
| core.competency.createTemplate(data) | core_competency_create_template | Create a template |
| core.competency.createUserEvidenceCompetency(data) | core_competency_create_user_evidence_competency | Link an evidence of prior learning with a user's competency |
| core.competency.deleteCompetency(data) | core_competency_delete_competency | Delete a competency |
| core.competency.deleteCompetencyFramework(data) | core_competency_delete_competency_framework | Delete a competency framework |
| core.competency.deleteEvidence(data) | core_competency_delete_evidence | Delete an evidence |
| core.competency.deletePlan(data) | core_competency_delete_plan | Delete a learning plan |
| core.competency.deleteTemplate(data) | core_competency_delete_template | Delete a template |
| core.competency.deleteUserEvidence(data) | core_competency_delete_user_evidence | Delete an evidence of prior learning |
| core.competency.deleteUserEvidenceCompetency(data) | core_competency_delete_user_evidence_competency | Remove a link between an evidence of prior learning and a user's competency |
| core.competency.duplicateCompetencyFramework(data) | core_competency_duplicate_competency_framework | Duplicate a competency framework |
| core.competency.duplicateTemplate(data) | core_competency_duplicate_template | Duplicate a template |
| core.competency.getScaleValues(data) | core_competency_get_scale_values | Get the values for a scale |
| core.competency.gradeCompetency(data) | core_competency_grade_competency | Rate a user's competency |
| core.competency.gradeCompetencyInCourse(data) | core_competency_grade_competency_in_course | Rate a user's competency in a course |
| core.competency.gradeCompetencyInPlan(data) | core_competency_grade_competency_in_plan | Rate a user's competency in a learning plan |
| core.competency.listCompetencies(data) | core_competency_list_competencies | List competencies |
| core.competency.listCompetenciesInTemplate(data) | core_competency_list_competencies_in_template | List the competencies of a template |
| core.competency.listCompetencyFrameworks(data) | core_competency_list_competency_frameworks | List the competency frameworks |
| core.competency.listCourseCompetencies(data) | core_competency_list_course_competencies | List the competencies in a course |
| core.competency.listCourseModuleCompetencies(data) | core_competency_list_course_module_competencies | List the competencies in a course module |
| core.competency.listPlanCompetencies(data) | core_competency_list_plan_competencies | List a learning plan's competencies |
| core.competency.listTemplates(data) | core_competency_list_templates | List templates |
| core.competency.listTemplatesUsingCompetency(data) | core_competency_list_templates_using_competency | List templates using a competency |
| core.competency.listUserPlans(data) | core_competency_list_user_plans | List a user's learning plans |
| core.competency.moveDownCompetency(data) | core_competency_move_down_competency | Move a competency down in its branch |
| core.competency.moveUpCompetency(data) | core_competency_move_up_competency | Move a competency up in its branch |
| core.competency.planCancelReviewRequest(data) | core_competency_plan_cancel_review_request | Cancel the review request of a learning plan |
| core.competency.planRequestReview(data) | core_competency_plan_request_review | Request the review of a learning plan |
| core.competency.planStartReview(data) | core_competency_plan_start_review | Start the review of a learning plan |
| core.competency.planStopReview(data) | core_competency_plan_stop_review | Stop the review of a learning plan |
| core.competency.readCompetency(data) | core_competency_read_competency | Fetch a competency |
| core.competency.readCompetencyFramework(data) | core_competency_read_competency_framework | Fetch a competency framework |
| core.competency.readPlan(data) | core_competency_read_plan | Fetch a learning plan |
| core.competency.readTemplate(data) | core_competency_read_template | Fetch a template |
| core.competency.readUserEvidence(data) | core_competency_read_user_evidence | Fetch an evidence of prior learning |
| core.competency.removeCompetencyFromCourse(data) | core_competency_remove_competency_from_course | Remove competency from a course |
| core.competency.removeCompetencyFromPlan(data) | core_competency_remove_competency_from_plan | Remove a competency from a learning plan |
| core.competency.removeCompetencyFromTemplate(data) | core_competency_remove_competency_from_template | Remove competency from template |
| core.competency.removeRelatedCompetency(data) | core_competency_remove_related_competency | Remove a relationship between competencies |
| core.competency.reopenPlan(data) | core_competency_reopen_plan | Reopen a learning plan |
| core.competency.reorderCourseCompetency(data) | core_competency_reorder_course_competency | Reorder competencies in a course |
| core.competency.reorderPlanCompetency(data) | core_competency_reorder_plan_competency | Reopen a competency in a learning plan |
| core.competency.reorderTemplateCompetency(data) | core_competency_reorder_template_competency | Reorder competencies in a template |
| core.competency.requestReviewOfUserEvidenceLinkedCompetencies(data) | core_competency_request_review_of_user_evidence_linked_competencies | Request the review of the user's competencies linked to an evidence of prior learning |
| core.competency.searchCompetencies(data) | core_competency_search_competencies | Search for competencies |
| core.competency.setCourseCompetencyRuleoutcome(data) | core_competency_set_course_competency_ruleoutcome | Set the rule of course competencies |
| core.competency.setParentCompetency(data) | core_competency_set_parent_competency | Relocate a competency to another parent |
| core.competency.templateHasRelatedData(data) | core_competency_template_has_related_data | Check whether a template has related data |
| core.competency.templateViewed(data) | core_competency_template_viewed | Report a template as being viewed |
| core.competency.unapprovePlan(data) | core_competency_unapprove_plan | Unapprove a learning plan |
| core.competency.unlinkPlanFromTemplate(data) | core_competency_unlink_plan_from_template | Unlink a learning plan from a template |
| core.competency.updateCompetency(data) | core_competency_update_competency | Update a competency |
| core.competency.updateCompetencyFramework(data) | core_competency_update_competency_framework | Update a competency framework |
| core.competency.updateCourseCompetencySettings(data) | core_competency_update_course_competency_settings | Update the course competency settings |
| core.competency.updatePlan(data) | core_competency_update_plan | Update a learning plan |
| core.competency.updateTemplate(data) | core_competency_update_template | Update a template |
| core.competency.userCompetencyCancelReviewRequest(data) | core_competency_user_competency_cancel_review_request | Cancel the review request of a user's competency |
| core.competency.userCompetencyPlanViewed(data) | core_competency_user_competency_plan_viewed | Report the archive of user's competency as being viewed |
| core.competency.userCompetencyRequestReview(data) | core_competency_user_competency_request_review | Request the review of a user's competency |
| core.competency.userCompetencyStartReview(data) | core_competency_user_competency_start_review | Start the review of a user's competency |
| core.competency.userCompetencyStopReview(data) | core_competency_user_competency_stop_review | Stop the review of a user's competency |
| core.competency.userCompetencyViewed(data) | core_competency_user_competency_viewed | Report a user's competency as being viewed |
| core.competency.userCompetencyViewedInCourse(data) | core_competency_user_competency_viewed_in_course | Report a user's competency as being viewed from a course |
| core.competency.userCompetencyViewedInPlan(data) | core_competency_user_competency_viewed_in_plan | Report a user's competency as being viewed from a learning plan |
| core.completion.getActivitiesCompletionStatus(data) | core_completion_get_activities_completion_status | Return the activities completion status for a user in a course. |
| core.completion.getCourseCompletionStatus(data) | core_completion_get_course_completion_status | Returns course completion status. |
| core.completion.markCourseSelfCompleted(data) | core_completion_mark_course_self_completed | Update the course completion status for the current user (if course self-completion is enabled). |
| core.completion.overrideActivityCompletionStatus(data) | core_completion_override_activity_completion_status | Update completion status for a user in an activity by overriding it. |
| core.completion.updateActivityCompletionStatusManually(data) | core_completion_update_activity_completion_status_manually | Update completion status for the current user in an activity, only for activities with manual tracking. |
| core.course.checkUpdates(data) | core_course_check_updates | Check if there is updates affecting the user for the given course and contexts. |
| core.course.createCategories(data) | core_course_create_categories | create categories |
| core.course.createCourses(data) | core_course_create_courses | Create new courses |
| core.course.deleteCategories(data) | core_course_delete_categories | delete categories |
| core.course.deleteCourses(data) | core_course_delete_courses | delete courses |
| core.course.deleteModules(data) | core_course_delete_modules | Deletes all specified module instances |
| core.course.duplicateCourse(data) | core_course_duplicate_course | duplicate a course |
| core.course.editModule(data) | core_course_edit_module | Performs an action on course module (change visibility, duplicate, delete, etc.) |
| core.course.editSection(data) | core_course_edit_section | Performs an action on course section (change visibility, set marker, delete) |
| core.course.getActivitiesOverview(data) | core_course_get_activities_overview | Return activities overview for the given courses. |
| core.course.getCategories(data) | core_course_get_categories | get categories |
| core.course.getContents(data) | core_course_get_contents | get course content (modules + web service file urls) |
| core.course.getCourseModule(data) | core_course_get_course_module | Return information about a course module. |
| core.course.getCourseModuleByInstance(data) | core_course_get_course_module_by_instance | Return information about a given module name and instance id. |
| core.course.getCourses(data) | core_course_get_courses | Return course details |
| core.course.getCoursesByField(data) | core_course_get_courses_by_field | Get courses matching a specific field (id/s, shortname, idnumber, category) |
| core.course.getEnrolledCoursesByTimelineClassification(data) | core_course_get_enrolled_courses_by_timeline_classification | List of enrolled courses for the given timeline classification (past, inprogress, or future). |
| core.course.getEnrolledUsersByCmid(data) | core_course_get_enrolled_users_by_cmid | List users by course module id & filter by group id. |
| core.course.getModule(data) | core_course_get_module | Returns html with one activity module on course page |
| core.course.getRecentCourses(data) | core_course_get_recent_courses | List of courses a user has accessed most recently. |
| core.course.getUpdatesSince(data) | core_course_get_updates_since | Check if there are updates affecting the user for the given course since the given time stamp. |
| core.course.getUserAdministrationOptions(data) | core_course_get_user_administration_options | Return a list of administration options in a set of courses that are avaialable or not for the current user. |
| core.course.getUserNavigationOptions(data) | core_course_get_user_navigation_options | Return a list of navigation options in a set of courses that are avaialable or not for the current user. |
| core.course.importCourse(data) | core_course_import_course | Import course data from a course into another course. Does not include any user data. |
| core.course.searchCourses(data) | core_course_search_courses | Search courses by (name, module, block, tag). |
| core.course.setFavouriteCourses(data) | core_course_set_favourite_courses | Add a list of courses to the list of favourite courses. |
| core.course.updateCategories(data) | core_course_update_categories | update categories |
| core.course.updateCourses(data) | core_course_update_courses | Update courses. |
| core.course.viewCourse(data) | core_course_view_course | Log that the course was viewed |
| core.customfield.createCategory(data) | core_customfield_create_category | Creates a new category |
| core.customfield.deleteCategory(data) | core_customfield_delete_category | Deletes a category |
| core.customfield.deleteField(data) | core_customfield_delete_field | Deletes an entry |
| core.customfield.moveCategory(data) | core_customfield_move_category | Drag and drop categories |
| core.customfield.moveField(data) | core_customfield_move_field | Drag and drop |
| core.customfield.reloadTemplate(data) | core_customfield_reload_template | Reloads template |
| core.enrol.editUserEnrolment(data) | core_enrol_edit_user_enrolment | External function that updates a given user enrolment |
| core.enrol.getCourseEnrolmentMethods(data) | core_enrol_get_course_enrolment_methods | Get the list of course enrolment methods |
| core.enrol.getEnrolledUsers(data) | core_enrol_get_enrolled_users | Get enrolled users by course id |
| core.enrol.getEnrolledUsersWithCapability(data) | core_enrol_get_enrolled_users_with_capability | For each course and capability specified, return a list of the users that are enrolled in the course and have that capability |
| core.enrol.getPotentialUsers(data) | core_enrol_get_potential_users | Get the list of potential users to enrol |
| core.enrol.getUsersCourses(data) | core_enrol_get_users_courses | get list of course ids that a user is enrolled in (if you are allowed to see that) |
| core.enrol.searchUsers(data) | core_enrol_search_users | Search within the list of course participants |
| core.enrol.submitUserEnrolmentForm(data) | core_enrol_submit_user_enrolment_form | Submit form data for enrolment form |
| core.enrol.unenrolUserEnrolment(data) | core_enrol_unenrol_user_enrolment | External function that unenrols a given user enrolment |
| core.fetch.notifications(data) | core_fetch_notifications | Return a list of notifications for the current session |
| core.files.getFiles(data) | core_files_get_files | browse moodle files |
| core.files.upload(data) | core_files_upload | upload a file to moodle |
| core.filters.getAvailableInContext(data) | core_filters_get_available_in_context | Returns the filters available in the given contexts. |
| core.form.getFiletypesBrowserData(data) | core_form_get_filetypes_browser_data | Provides data for the filetypes element browser. |
| core.get.componentStrings(data) | core_get_component_strings | Return all raw strings (with {$a->xxx}) for a specific component - similar to core get_component_strings() call |
| core.get.fragment(data) | core_get_fragment | Return a fragment for inclusion, such as a JavaScript page. |
| core.get.string(data) | core_get_string | Return a translated string - similar to core get_string() call |
| core.get.strings(data) | core_get_strings | Return some translated strings - like several core get_string() calls |
| core.get.userDates(data) | core_get_user_dates | Return formatted timestamps |
| core.grade.updateGrades(data) | core_grade_update_grades | Update a grade item and associated student grades. |
| core.grades.getGrades(data) | core_grades_get_grades | Returns student course total grade and grades for activities. This function does not return category or manual items. This function is suitable for managers or teachers not students. |
| core.grades.graderGradingpanelPointFetch(data) | core_grades_grader_gradingpanel_point_fetch | Fetch the data required to display the grader grading panel for simple grading, creating the grade item if required |
| core.grades.graderGradingpanelPointStore(data) | core_grades_grader_gradingpanel_point_store | Store the data required to display the grader grading panel for simple grading |
| core.grades.graderGradingpanelScaleFetch(data) | core_grades_grader_gradingpanel_scale_fetch | Fetch the data required to display the grader grading panel for scale-based grading, creating the grade item if required |
| core.grades.graderGradingpanelScaleStore(data) | core_grades_grader_gradingpanel_scale_store | Store the data required to display the grader grading panel for scale-based grading |
| core.grading.getDefinitions(data) | core_grading_get_definitions | Returns grading definitions for the course module ids and areaname provided as parameters. An optionall activeonly parameter can be provided so that only the active grading method is returned. |
| core.grading.getGradingformInstances(data) | core_grading_get_gradingform_instances | Returns the instances and fillings for the requested definition id. An optional since parameter allows the number of records returned to be reduced so that only those with a timemodified value >= since are returned |
| core.grading.saveDefinitions(data) | core_grading_save_definitions | Accepts an array of areas as a parameter. The areas contain grading definitions with criteria for inserting and updating |
| core.group.addGroupMembers(data) | core_group_add_group_members | Adds group members |
| core.group.assignGrouping(data) | core_group_assign_grouping | assign groups from groupings |
| core.group.createGroupings(data) | core_group_create_groupings | create groupings |
| core.group.createGroups(data) | core_group_create_groups | Creates new groups |
| core.group.deleteGroupMembers(data) | core_group_delete_group_members | Deletes group members |
| core.group.deleteGroupings(data) | core_group_delete_groupings | delete groupings |
| core.group.deleteGroups(data) | core_group_delete_groups | Deletes all specified groups |
| core.group.getActivityAllowedGroups(data) | core_group_get_activity_allowed_groups | Gets a list of groups that the user is allowed to access within the specified activity. |
| core.group.getActivityGroupmode(data) | core_group_get_activity_groupmode | Returns effective groupmode used in a given activity. |
| core.group.getCourseGroupings(data) | core_group_get_course_groupings | get all groupings in specified course |
| core.group.getCourseGroups(data) | core_group_get_course_groups | Returns all groups in specified course |
| core.group.getCourseUserGroups(data) | core_group_get_course_user_groups | Returns all groups in specified course for the specified user. |
| core.group.getGroupMembers(data) | core_group_get_group_members | Returns group members |
| core.group.getGroupings(data) | core_group_get_groupings | get groupings |
| core.group.getGroups(data) | core_group_get_groups | Returns group details. |
| core.group.unassignGrouping(data) | core_group_unassign_grouping | unassign groups from groupings |
| core.group.updateGroupings(data) | core_group_update_groupings | update groupings |
| core.group.updateGroups(data) | core_group_update_groups | Updates existing groups. |
| core.h5p.getTrustedH5pFile(data) | core_h5p_get_trusted_h5p_file | Get the H5P file cleaned for Mobile App. |
| core.message.blockContacts(data) | core_message_block_contacts | Block contacts |
| core.message.blockUser(data) | core_message_block_user | Blocks a user |
| core.message.confirmContactRequest(data) | core_message_confirm_contact_request | Confirms a contact request |
| core.message.createContactRequest(data) | core_message_create_contact_request | Creates a contact request |
| core.message.createContacts(data) | core_message_create_contacts | Add contacts to the contact list |
| core.message.dataForMessageareaContacts(data) | core_message_data_for_messagearea_contacts | Retrieve the template data for the contact list |
| core.message.dataForMessageareaConversations(data) | core_message_data_for_messagearea_conversations | Retrieve the template data for the conversation list |
| core.message.dataForMessageareaGetMostRecentMessage(data) | core_message_data_for_messagearea_get_most_recent_message | Retrieve the template data for the most recent message |
| core.message.dataForMessageareaGetProfile(data) | core_message_data_for_messagearea_get_profile | Retrieve the template data for the users\'s profile |
| core.message.dataForMessageareaMessages(data) | core_message_data_for_messagearea_messages | Retrieve the template data for the messages |
| core.message.dataForMessageareaSearchMessages(data) | core_message_data_for_messagearea_search_messages | Retrieve the template data for searching for messages |
| core.message.dataForMessageareaSearchUsers(data) | core_message_data_for_messagearea_search_users | Retrieve the template data for searching for people |
| core.message.dataForMessageareaSearchUsersInCourse(data) | core_message_data_for_messagearea_search_users_in_course | Retrieve the template data for searching for people in a course |
| core.message.declineContactRequest(data) | core_message_decline_contact_request | Declines a contact request |
| core.message.deleteContacts(data) | core_message_delete_contacts | Remove contacts from the contact list |
| core.message.deleteConversation(data) | core_message_delete_conversation | Deletes a conversation. |
| core.message.deleteConversationsById(data) | core_message_delete_conversations_by_id | Deletes a list of conversations. |
| core.message.deleteMessage(data) | core_message_delete_message | Deletes a message. |
| core.message.deleteMessageForAllUsers(data) | core_message_delete_message_for_all_users | Deletes a message for all users. |
| core.message.getBlockedUsers(data) | core_message_get_blocked_users | Retrieve a list of users blocked |
| core.message.getContactRequests(data) | core_message_get_contact_requests | Returns contact requests for a user |
| core.message.getContacts(data) | core_message_get_contacts | Retrieve the contact list |
| core.message.getConversation(data) | core_message_get_conversation | Retrieve a conversation for a user |
| core.message.getConversationBetweenUsers(data) | core_message_get_conversation_between_users | Retrieve a conversation for a user between another user |
| core.message.getConversationCounts(data) | core_message_get_conversation_counts | Retrieve a list of conversation counts, indexed by type. |
| core.message.getConversationMembers(data) | core_message_get_conversation_members | Retrieve a list of members in a conversation |
| core.message.getConversationMessages(data) | core_message_get_conversation_messages | Retrieve the conversation messages and relevant member information |
| core.message.getConversations(data) | core_message_get_conversations | Retrieve a list of conversations for a user |
| core.message.getMemberInfo(data) | core_message_get_member_info | Retrieve a user message profiles |
| core.message.getMessageProcessor(data) | core_message_get_message_processor | Get a message processor |
| core.message.getMessages(data) | core_message_get_messages | Retrieve a list of messages sent and received by a user (conversations, notifications or both) |
| core.message.getReceivedContactRequestsCount(data) | core_message_get_received_contact_requests_count | Gets the number of received contact requests |
| core.message.getSelfConversation(data) | core_message_get_self_conversation | Retrieve a self-conversation for a user |
| core.message.getUnreadConversationsCount(data) | core_message_get_unread_conversations_count | Retrieve the count of unread conversations for a given user |
| core.message.getUserContacts(data) | core_message_get_user_contacts | Retrieve the contact list |
| core.message.getUserMessagePreferences(data) | core_message_get_user_message_preferences | Get the message preferences for a given user. |
| core.message.getUserNotificationPreferences(data) | core_message_get_user_notification_preferences | Get the notification preferences for a given user. |
| core.message.markAllConversationMessagesAsRead(data) | core_message_mark_all_conversation_messages_as_read | Mark all conversation messages as read for a given user |
| core.message.markAllMessagesAsRead(data) | core_message_mark_all_messages_as_read | Mark all messages as read for a given user |
| core.message.markAllNotificationsAsRead(data) | core_message_mark_all_notifications_as_read | Mark all notifications as read for a given user |
| core.message.markMessageRead(data) | core_message_mark_message_read | Mark a single message as read, trigger message_viewed event. |
| core.message.markNotificationRead(data) | core_message_mark_notification_read | Mark a single notification as read, trigger notification_viewed event. |
| core.message.messageProcessorConfigForm(data) | core_message_message_processor_config_form | Process the message processor config form |
| core.message.messageSearchUsers(data) | core_message_message_search_users | Retrieve the data for searching for people |
| core.message.muteConversations(data) | core_message_mute_conversations | Mutes a list of conversations |
| core.message.searchContacts(data) | core_message_search_contacts | Search for contacts |
| core.message.sendInstantMessages(data) | core_message_send_instant_messages | Send instant messages |
| core.message.sendMessagesToConversation(data) | core_message_send_messages_to_conversation | Send messages to an existing conversation between users |
| core.message.setFavouriteConversations(data) | core_message_set_favourite_conversations | Mark a conversation or group of conversations as favourites/starred conversations. |
| core.message.unblockContacts(data) | core_message_unblock_contacts | Unblock contacts |
| core.message.unblockUser(data) | core_message_unblock_user | Unblocks a user |
| core.message.unmuteConversations(data) | core_message_unmute_conversations | Unmutes a list of conversations |
| core.message.unsetFavouriteConversations(data) | core_message_unset_favourite_conversations | Unset a conversation or group of conversations as favourites/starred conversations. |
| core.notes.createNotes(data) | core_notes_create_notes | Create notes |
| core.notes.deleteNotes(data) | core_notes_delete_notes | Delete Notes |
| core.notes.getCourseNotes(data) | core_notes_get_course_notes | Returns all notes in specified course (or site) for the specified user. |
| core.notes.getNotes(data) | core_notes_get_notes | Retrieve Notes |
| core.notes.updateNotes(data) | core_notes_update_notes | Update Notes |
| core.notes.viewNotes(data) | core_notes_view_notes | Simulates the web interface view of notes/index.php: trigger events. |
| core.output.loadFontawesomeIconMap(data) | core_output_load_fontawesome_icon_map | Load the mapping of names to icons |
| core.output.loadTemplate(data) | core_output_load_template | Load a template for a renderable |
| core.question.getRandomQuestionSummaries(data) | core_question_get_random_question_summaries | Get the random question set for a criteria |
| core.question.submitTagsForm(data) | core_question_submit_tags_form | Update the question tags. |
| core.question.updateFlag(data) | core_question_update_flag | Update the flag state of a question attempt. |
| core.rating.addRating(data) | core_rating_add_rating | Rates an item. |
| core.rating.getItemRatings(data) | core_rating_get_item_ratings | Retrieve all the ratings for an item. |
| core.role.assignRoles(data) | core_role_assign_roles | Manual role assignments |
| core.role.unassignRoles(data) | core_role_unassign_roles | Manual role unassignments |
| core.search.getRelevantUsers(data) | core_search_get_relevant_users | Gets relevant users for a search request. |
| core.session.timeRemaining(data) | core_session_time_remaining | Count the seconds remaining in this session |
| core.session.touch(data) | core_session_touch | Keep the users session alive |
| core.tag.getTagAreas(data) | core_tag_get_tag_areas | Retrieves existing tag areas. |
| core.tag.getTagCloud(data) | core_tag_get_tag_cloud | Retrieves a tag cloud for the given collection and/or query search. |
| core.tag.getTagCollections(data) | core_tag_get_tag_collections | Retrieves existing tag collections. |
| core.tag.getTagindex(data) | core_tag_get_tagindex | Gets tag index page for one tag and one tag area |
| core.tag.getTagindexPerArea(data) | core_tag_get_tagindex_per_area | Gets tag index page per different areas. |
| core.tag.getTags(data) | core_tag_get_tags | Gets tags by their ids |
| core.tag.updateTags(data) | core_tag_update_tags | Updates tags |
| core.update.inplaceEditable(data) | core_update_inplace_editable | Generic service to update title |
| core.user.addUserDevice(data) | core_user_add_user_device | Store mobile user devices information for PUSH Notifications. |
| core.user.addUserPrivateFiles(data) | core_user_add_user_private_files | Copy files from a draft area to users private files area. |
| core.user.agreeSitePolicy(data) | core_user_agree_site_policy | Agree the site policy for the current user. |
| core.user.createUsers(data) | core_user_create_users | Create users - admin function |
| core.user.deleteUsers(data) | core_user_delete_users | Delete users - admin function |
| core.user.getCourseUserProfiles(data) | core_user_get_course_user_profiles | Get course user profiles by id |
| core.user.getPrivateFilesInfo(data) | core_user_get_private_files_info | Returns general information about files in the user private files area. |
| core.user.getUserPreferences(data) | core_user_get_user_preferences | Return user preferences. |
| core.user.getUsers(data) | core_user_get_users | Search users. - If you want to get multiple users for one specific field, use core_user_get_users_by_field(), it's designed for this purpose and it should be faster. |
| core.user.getUsersByField(data) | core_user_get_users_by_field | Retrieve users information for a specified unique field - If you want to do a user search, use core_user_get_users() |
| core.user.getUsersById(data) | core_user_get_users_by_id | Get users by id |
| core.user.removeUserDevice(data) | core_user_remove_user_device | Remove a user device from the Moodle database. |
| core.user.setUserPreferences(data) | core_user_set_user_preferences | Set user preferences. |
| core.user.updatePicture(data) | core_user_update_picture | Update or delete the user picture in the site |
| core.user.updateUserPreferences(data) | core_user_update_user_preferences | Update a user\'s preferences |
| core.user.updateUsers(data) | core_user_update_users | Update users |
| core.user.viewUserList(data) | core_user_view_user_list | Simulates the web-interface view of user/index.php (triggering events). |
| core.user.viewUserProfile(data) | core_user_view_user_profile | Simulates the web-interface view of user/view.php and user/profile.php (triggering events). |
| core.webservice.getSiteInfo(data) | core_webservice_get_site_info | Return some site info / user info / list web service functions |
| enrol.guest.getInstanceInfo(data) | enrol_guest_get_instance_info | Return guest enrolment instance information. |
| enrol.manual.enrolUsers(data) | enrol_manual_enrol_users | Manual enrol users |
| enrol.manual.unenrolUsers(data) | enrol_manual_unenrol_users | Manual unenrol users |
| enrol.self.enrolUser(data) | enrol_self_enrol_user | Self enrol the current user in the given course. |
| enrol.self.getInstanceInfo(data) | enrol_self_get_instance_info | self enrolment instance information. |
| gradereport.overview.getCourseGrades(data) | gradereport_overview_get_course_grades | Get the given user courses final grades |
| gradereport.overview.viewGradeReport(data) | gradereport_overview_view_grade_report | Trigger the report view event |
| gradereport.user.getGradeItems(data) | gradereport_user_get_grade_items | Returns the complete list of grade items for users in a course |
| gradereport.user.getGradesTable(data) | gradereport_user_get_grades_table | Get the user/s report grades table for a course |
| gradereport.user.viewGradeReport(data) | gradereport_user_view_grade_report | Trigger the grade_report_viewed event when a user view his grade report (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). |
| gradingform.guide.graderGradingpanelFetch(data) | gradingform_guide_grader_gradingpanel_fetch | Fetch the data required to display the grader grading panel, creating the grade item if required |
| gradingform.guide.graderGradingpanelStore(data) | gradingform_guide_grader_gradingpanel_store | Store the grading data for a user from the grader grading panel. |
| gradingform.rubric.graderGradingpanelFetch(data) | gradingform_rubric_grader_gradingpanel_fetch | Fetch the data required to display the grader grading panel, creating the grade item if required |
| gradingform.rubric.graderGradingpanelStore(data) | gradingform_rubric_grader_gradingpanel_store | Store the grading data for a user from the grader grading panel. |
| local.mobile.getPluginSettings(data) | local_mobile_get_plugin_settings | Retrieve the plugin settings. |
| message.airnotifier.areNotificationPreferencesConfigured(data) | message_airnotifier_are_notification_preferences_configured | Check if the users have notification preferences configured yet |
| message.airnotifier.enableDevice(data) | message_airnotifier_enable_device | Enables or disables a registered user device so it can receive Push notifications |
| message.airnotifier.getUserDevices(data) | message_airnotifier_get_user_devices | Return the list of mobile devices that are registered in Moodle for the given user |
| message.airnotifier.isSystemConfigured(data) | message_airnotifier_is_system_configured | Check whether the airnotifier settings have been configured |
| message.popup.getPopupNotifications(data) | message_popup_get_popup_notifications | Retrieve a list of popup notifications for a user |
| message.popup.getUnreadPopupNotificationCount(data) | message_popup_get_unread_popup_notification_count | Retrieve the count of unread popup notifications for a given user |
| mod.assign.copyPreviousAttempt(data) | mod_assign_copy_previous_attempt | Copy a students previous attempt to a new attempt. |
| mod.assign.getAssignments(data) | mod_assign_get_assignments | Returns the courses and assignments for the users capability |
| mod.assign.getGrades(data) | mod_assign_get_grades | Returns grades from the assignment |
| mod.assign.getParticipant(data) | mod_assign_get_participant | Get a participant for an assignment, with some summary info about their submissions. |
| mod.assign.getSubmissionStatus(data) | mod_assign_get_submission_status | Returns information about an assignment submission status for a given user. |
| mod.assign.getSubmissions(data) | mod_assign_get_submissions | Returns the submissions for assignments |
| mod.assign.getUserFlags(data) | mod_assign_get_user_flags | Returns the user_flags for assignments |
| mod.assign.getUserMappings(data) | mod_assign_get_user_mappings | Returns the user_mappings for assignments |
| mod.assign.listParticipants(data) | mod_assign_list_participants | List the participants for a single assignment, with some summary info about their submissions. |
| mod.assign.lockSubmissions(data) | mod_assign_lock_submissions | Prevent students from making changes to a list of submissions |
| mod.assign.revealIdentities(data) | mod_assign_reveal_identities | Reveal the identities for a blind marking assignment |
| mod.assign.revertSubmissionsToDraft(data) | mod_assign_revert_submissions_to_draft | Reverts the list of submissions to draft status |
| mod.assign.saveGrade(data) | mod_assign_save_grade | Save a grade update for a single student. |
| mod.assign.saveGrades(data) | mod_assign_save_grades | Save grade updates for one or more students. |
| mod.assign.saveSubmission(data) | mod_assign_save_submission | Update the current students submission |
| mod.assign.saveUserExtensions(data) | mod_assign_save_user_extensions | Save a list of assignment extensions |
| mod.assign.setUserFlags(data) | mod_assign_set_user_flags | Sets the specified user_flags for an assignment |
| mod.assign.submitForGrading(data) | mod_assign_submit_for_grading | Submit the current students assignment for grading |
| mod.assign.submitGradingForm(data) | mod_assign_submit_grading_form | Submit the grading form data via ajax |
| mod.assign.unlockSubmissions(data) | mod_assign_unlock_submissions | Allow students to make changes to a list of submissions |
| mod.assign.viewAssign(data) | mod_assign_view_assign | Update the module completion status. |
| mod.assign.viewGradingTable(data) | mod_assign_view_grading_table | Trigger the grading_table_viewed event. |
| mod.assign.viewSubmissionStatus(data) | mod_assign_view_submission_status | Trigger the submission status viewed event. |
| mod.book.getBooksByCourses(data) | mod_book_get_books_by_courses | Returns a list of book instances in a provided set of courses. |
| mod.book.viewBook(data) | mod_book_view_book | Trigger the course module viewed event and update the module completion status. |
| mod.chat.getChatLatestMessages(data) | mod_chat_get_chat_latest_messages | Get the latest messages from the given chat sessio. |
| mod.chat.getChatUsers(data) | mod_chat_get_chat_users | Get the list of users in the given chat session. |
| mod.chat.getChatsByCourses(data) | mod_chat_get_chats_by_courses | Returns a list of chat instances in a provided set of courses. |
| mod.chat.getSessionMessages(data) | mod_chat_get_session_messages | Retrieves messages of the given chat session. |
| mod.chat.getSessions(data) | mod_chat_get_sessions | Retrieves chat sessions for a given chat. |
| mod.chat.loginUser(data) | mod_chat_login_user | Log a user into a chat room in the given chat. |
| mod.chat.sendChatMessage(data) | mod_chat_send_chat_message | Send a message on the given chat session. |
| mod.chat.viewChat(data) | mod_chat_view_chat | Trigger the course module viewed event and update the module completion status. |
| mod.choice.deleteChoiceResponses(data) | mod_choice_delete_choice_responses | Delete the given submitted responses in a choice. |
| mod.choice.getChoiceOptions(data) | mod_choice_get_choice_options | Retrieve options for a specific choice. |
| mod.choice.getChoiceResults(data) | mod_choice_get_choice_results | Retrieve users results for a given choice. |
| mod.choice.getChoicesByCourses(data) | mod_choice_get_choices_by_courses | Returns a list of choice instances in a provided set of courses. |
| mod.choice.submitChoiceResponse(data) | mod_choice_submit_choice_response | Submit responses to a specific choice item. |
| mod.choice.viewChoice(data) | mod_choice_view_choice | Trigger the course module viewed event and update the module completion status.. |
| mod.data.addEntry(data) | mod_data_add_entry | Adds a new entry. |
| mod.data.approveEntry(data) | mod_data_approve_entry | Approves or unapproves an entry. |
| mod.data.deleteEntry(data) | mod_data_delete_entry | Deletes an entry. |
| mod.data.getDataAccessInformation(data) | mod_data_get_data_access_information | Return access information for a given database. |
| mod.data.getDatabasesByCourses(data) | mod_data_get_databases_by_courses | Returns a list of database instances in a provided set of courses, if no courses are provided then all the database instances the user has access to will be returned. |
| mod.data.getEntries(data) | mod_data_get_entries | Return the complete list of entries of the given database. |
| mod.data.getEntry(data) | mod_data_get_entry | Return one entry record from the database, including contents optionally. |
| mod.data.getFields(data) | mod_data_get_fields | Return the list of configured fields for the given database. |
| mod.data.searchEntries(data) | mod_data_search_entries | Search for entries in the given database. |
| mod.data.updateEntry(data) | mod_data_update_entry | Updates an existing entry. |
| mod.data.viewDatabase(data) | mod_data_view_database | Simulate the view.php web interface data: trigger events, completion, etc... |
| mod.feedback.getAnalysis(data) | mod_feedback_get_analysis | Retrieves the feedback analysis. |
| mod.feedback.getCurrentCompletedTmp(data) | mod_feedback_get_current_completed_tmp | Returns the temporary completion record for the current user. |
| mod.feedback.getFeedbackAccessInformation(data) | mod_feedback_get_feedback_access_information | Return access information for a given feedback. |
| mod.feedback.getFeedbacksByCourses(data) | mod_feedback_get_feedbacks_by_courses | Returns a list of feedbacks in a provided list of courses, if no list is provided all feedbacks that the user can view will be returned. |
| mod.feedback.getFinishedResponses(data) | mod_feedback_get_finished_responses | Retrieves responses from the last finished attempt. |
| mod.feedback.getItems(data) | mod_feedback_get_items | Returns the items (questions) in the given feedback. |
| mod.feedback.getLastCompleted(data) | mod_feedback_get_last_completed | Retrieves the last completion record for the current user. |
| mod.feedback.getNonRespondents(data) | mod_feedback_get_non_respondents | Retrieves a list of students who didn\'t submit the feedback. |
| mod.feedback.getPageItems(data) | mod_feedback_get_page_items | Get a single feedback page items. |
| mod.feedback.getResponsesAnalysis(data) | mod_feedback_get_responses_analysis | Return the feedback user responses analysis. |
| mod.feedback.getUnfinishedResponses(data) | mod_feedback_get_unfinished_responses | Retrieves responses from the current unfinished attempt. |
| mod.feedback.launchFeedback(data) | mod_feedback_launch_feedback | Starts or continues a feedback submission. |
| mod.feedback.processPage(data) | mod_feedback_process_page | Process a jump between pages. |
| mod.feedback.viewFeedback(data) | mod_feedback_view_feedback | Trigger the course module viewed event and update the module completion status. |
| mod.folder.getFoldersByCourses(data) | mod_folder_get_folders_by_courses | Returns a list of folders in a provided list of courses, if no list is provided all folders that the user can view will be returned. Please note that this WS is not returning the folder contents. |
| mod.folder.viewFolder(data) | mod_folder_view_folder | Trigger the course module viewed event and update the module completion status. |
| mod.forum.addDiscussion(data) | mod_forum_add_discussion | Add a new discussion into an existing forum. |
| mod.forum.addDiscussionPost(data) | mod_forum_add_discussion_post | Create new posts into an existing discussion. |
| mod.forum.canAddDiscussion(data) | mod_forum_can_add_discussion | Check if the current user can add discussions in the given forum (and optionally for the given group). |
| mod.forum.deletePost(data) | mod_forum_delete_post | Deletes a post or a discussion completely when the post is the discussion topic. |
| mod.forum.getDiscussionPost(data) | mod_forum_get_discussion_post | Get a particular discussion post. |
| mod.forum.getDiscussionPosts(data) | mod_forum_get_discussion_posts | Returns a list of forum posts for a discussion. |
| mod.forum.getDiscussionPostsByUserid(data) | mod_forum_get_discussion_posts_by_userid | Returns a list of forum posts for a discussion for a user. |
| mod.forum.getForumAccessInformation(data) | mod_forum_get_forum_access_information | Return capabilities information for a given forum. |
| mod.forum.getForumDiscussionPosts(data) | mod_forum_get_forum_discussion_posts | Returns a list of forum posts for a discussion. |
| mod.forum.getForumDiscussions(data) | mod_forum_get_forum_discussions | Returns a list of forum discussions optionally sorted and paginated. |
| mod.forum.getForumDiscussionsPaginated(data) | mod_forum_get_forum_discussions_paginated | Returns a list of forum discussions optionally sorted and paginated. |
| mod.forum.getForumsByCourses(data) | mod_forum_get_forums_by_courses | Returns a list of forum instances in a provided set of courses, if no courses are provided then all the forum instances the user has access to will be returned. |
| mod.forum.prepareDraftAreaForPost(data) | mod_forum_prepare_draft_area_for_post | Prepares a draft area for editing a post. |
| mod.forum.setLockState(data) | mod_forum_set_lock_state | Set the lock state for the discussion |
| mod.forum.setPinState(data) | mod_forum_set_pin_state | Set the pin state |
| mod.forum.setSubscriptionState(data) | mod_forum_set_subscription_state | Set the subscription state |
| mod.forum.toggleFavouriteState(data) | mod_forum_toggle_favourite_state | Toggle the favourite state |
| mod.forum.updateDiscussionPost(data) | mod_forum_update_discussion_post | Updates a post or a discussion topic post. |
| mod.forum.viewForum(data) | mod_forum_view_forum | Trigger the course_module_viewed event when a user view a forum (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). |
| mod.forum.viewForumDiscussion(data) | mod_forum_view_forum_discussion | Trigger the discussion_viewed event when a user view a forum discussion (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). |
| mod.glossary.addEntry(data) | mod_glossary_add_entry | Add a new entry to a given glossary |
| mod.glossary.getAuthors(data) | mod_glossary_get_authors | Get the authors in a glossary |
| mod.glossary.getCategories(data) | mod_glossary_get_categories | Get a glossary's categories |
| mod.glossary.getEntriesByAuthor(data) | mod_glossary_get_entries_by_author | Get entries using author filtering |
| mod.glossary.getEntriesByAuthorId(data) | mod_glossary_get_entries_by_author_id | Get entries using author ID filtering |
| mod.glossary.getEntriesByCategory(data) | mod_glossary_get_entries_by_category | Get entries using category filtering |
| mod.glossary.getEntriesByDate(data) | mod_glossary_get_entries_by_date | Get entries using date filtering |
| mod.glossary.getEntriesByLetter(data) | mod_glossary_get_entries_by_letter | Get entries using letter filtering |
| mod.glossary.getEntriesBySearch(data) | mod_glossary_get_entries_by_search | Get entries matching a search query |
| mod.glossary.getEntriesByTerm(data) | mod_glossary_get_entries_by_term | Get entries using term filtering |
| mod.glossary.getEntriesToApprove(data) | mod_glossary_get_entries_to_approve | Get entries to be approved |
| mod.glossary.getEntryById(data) | mod_glossary_get_entry_by_id | Get an entry by ID |
| mod.glossary.getGlossariesByCourses(data) | mod_glossary_get_glossaries_by_courses | Get the glossaries in courses |
| mod.glossary.viewEntry(data) | mod_glossary_view_entry | Notify that a glossary entry was viewed |
| mod.glossary.viewGlossary(data) | mod_glossary_view_glossary | Notify that a glossary was viewed |
| mod.imscp.getImscpsByCourses(data) | mod_imscp_get_imscps_by_courses | Returns a list of imscp instances in a provided set of courses. |
| mod.imscp.viewImscp(data) | mod_imscp_view_imscp | Trigger the course module viewed event and update the module completion status. |
| mod.label.getLabelsByCourses(data) | mod_label_get_labels_by_courses | Returns a list of labels in a provided list of courses, if no list is provided all labels that the user can view will be returned. |
| mod.lesson.finishAttempt(data) | mod_lesson_finish_attempt | Finishes the current attempt. |
| mod.lesson.getAttemptsOverview(data) | mod_lesson_get_attempts_overview | Get a list of all the attempts made by users in a lesson. |
| mod.lesson.getContentPagesViewed(data) | mod_lesson_get_content_pages_viewed | Return the list of content pages viewed by a user during a lesson attempt. |
| mod.lesson.getLesson(data) | mod_lesson_get_lesson | Return information of a given lesson. |
| mod.lesson.getLessonAccessInformation(data) | mod_lesson_get_lesson_access_information | Return access information for a given lesson. |
| mod.lesson.getLessonsByCourses(data) | mod_lesson_get_lessons_by_courses | Returns a list of lessons in a provided list of courses, if no list is provided all lessons that the user can view will be returned. |
| mod.lesson.getPageData(data) | mod_lesson_get_page_data | Return information of a given page, including its contents. |
| mod.lesson.getPages(data) | mod_lesson_get_pages | Return the list of pages in a lesson (based on the user permissions). |
| mod.lesson.getPagesPossibleJumps(data) | mod_lesson_get_pages_possible_jumps | Return all the possible jumps for the pages in a given lesson. |
| mod.lesson.getQuestionsAttempts(data) | mod_lesson_get_questions_attempts | Return the list of questions attempts in a given lesson. |
| mod.lesson.getUserAttempt(data) | mod_lesson_get_user_attempt | Return information about the given user attempt (including answers). |
| mod.lesson.getUserAttemptGrade(data) | mod_lesson_get_user_attempt_grade | Return grade information in the attempt for a given user. |
| mod.lesson.getUserGrade(data) | mod_lesson_get_user_grade | Return the final grade in the lesson for the given user. |
| mod.lesson.getUserTimers(data) | mod_lesson_get_user_timers | Return the timers in the current lesson for the given user. |
| mod.lesson.launchAttempt(data) | mod_lesson_launch_attempt | Starts a new attempt or continues an existing one. |
| mod.lesson.processPage(data) | mod_lesson_process_page | Processes page responses. |
| mod.lesson.viewLesson(data) | mod_lesson_view_lesson | Trigger the course module viewed event and update the module completion status. |
| mod.lti.createToolProxy(data) | mod_lti_create_tool_proxy | Create a tool proxy |
| mod.lti.createToolType(data) | mod_lti_create_tool_type | Create a tool type |
| mod.lti.deleteToolProxy(data) | mod_lti_delete_tool_proxy | Delete a tool proxy |
| mod.lti.deleteToolType(data) | mod_lti_delete_tool_type | Delete a tool type |
| mod.lti.getLtisByCourses(data) | mod_lti_get_ltis_by_courses | Returns a list of lti instances in a provided set of courses. |
| mod.lti.getToolLaunchData(data) | mod_lti_get_tool_launch_data | Return the launch data for a given external tool. |
| mod.lti.getToolProxies(data) | mod_lti_get_tool_proxies | Get a list of the tool proxies |
| mod.lti.getToolProxyRegistrationRequest(data) | mod_lti_get_tool_proxy_registration_request | Get a registration request for a tool proxy |
| mod.lti.getToolTypes(data) | mod_lti_get_tool_types | Get a list of the tool types |
| mod.lti.isCartridge(data) | mod_lti_is_cartridge | Determine if the given url is for a cartridge |
| mod.lti.updateToolType(data) | mod_lti_update_tool_type | Update a tool type |
| mod.lti.viewLti(data) | mod_lti_view_lti | Trigger the course module viewed event and update the module completion status. |
| mod.page.getPagesByCourses(data) | mod_page_get_pages_by_courses | Returns a list of pages in a provided list of courses, if no list is provided all pages that the user can view will be returned. |
| mod.page.viewPage(data) | mod_page_view_page | Trigger the course module viewed event and update the module completion status. |
| mod.quiz.getAttemptAccessInformation(data) | mod_quiz_get_attempt_access_information | Return access information for a given attempt in a quiz. |
| mod.quiz.getAttemptData(data) | mod_quiz_get_attempt_data | Returns information for the given attempt page for a quiz attempt in progress. |
| mod.quiz.getAttemptReview(data) | mod_quiz_get_attempt_review | Returns review information for the given finished attempt, can be used by users or teachers. |
| mod.quiz.getAttemptSummary(data) | mod_quiz_get_attempt_summary | Returns a summary of a quiz attempt before it is submitted. |
| mod.quiz.getCombinedReviewOptions(data) | mod_quiz_get_combined_review_options | Combines the review options from a number of different quiz attempts. |
| mod.quiz.getQuizAccessInformation(data) | mod_quiz_get_quiz_access_information | Return access information for a given quiz. |
| mod.quiz.getQuizFeedbackForGrade(data) | mod_quiz_get_quiz_feedback_for_grade | Get the feedback text that should be show to a student who got the given grade in the given quiz. |
| mod.quiz.getQuizRequiredQtypes(data) | mod_quiz_get_quiz_required_qtypes | Return the potential question types that would be required for a given quiz. |
| mod.quiz.getQuizzesByCourses(data) | mod_quiz_get_quizzes_by_courses | Returns a list of quizzes in a provided list of courses, if no list is provided all quizzes that the user can view will be returned. |
| mod.quiz.getUserAttempts(data) | mod_quiz_get_user_attempts | Return a list of attempts for the given quiz and user. |
| mod.quiz.getUserBestGrade(data) | mod_quiz_get_user_best_grade | Get the best current grade for the given user on a quiz. |
| mod.quiz.processAttempt(data) | mod_quiz_process_attempt | Process responses during an attempt at a quiz and also deals with attempts finishing. |
| mod.quiz.saveAttempt(data) | mod_quiz_save_attempt | Processes save requests during the quiz.This function is intended for the quiz auto-save feature. |
| mod.quiz.startAttempt(data) | mod_quiz_start_attempt | Starts a new attempt at a quiz. |
| mod.quiz.viewAttempt(data) | mod_quiz_view_attempt | Trigger the attempt viewed event. |
| mod.quiz.viewAttemptReview(data) | mod_quiz_view_attempt_review | Trigger the attempt reviewed event. |
| mod.quiz.viewAttemptSummary(data) | mod_quiz_view_attempt_summary | Trigger the attempt summary viewed event. |
| mod.quiz.viewQuiz(data) | mod_quiz_view_quiz | Trigger the course module viewed event and update the module completion status. |
| mod.resource.getResourcesByCourses(data) | mod_resource_get_resources_by_courses | Returns a list of files in a provided list of courses, if no list is provided all files that the user can view will be returned. |
| mod.resource.viewResource(data) | mod_resource_view_resource | Trigger the course module viewed event and update the module completion status. |
| mod.scorm.getScormAccessInformation(data) | mod_scorm_get_scorm_access_information | Return capabilities information for a given scorm. |
| mod.scorm.getScormAttemptCount(data) | mod_scorm_get_scorm_attempt_count | Return the number of attempts done by a user in the given SCORM. |
| mod.scorm.getScormScoTracks(data) | mod_scorm_get_scorm_sco_tracks | Retrieves SCO tracking data for the given user id and attempt number. |
| mod.scorm.getScormScoes(data) | mod_scorm_get_scorm_scoes | Returns a list containing all the scoes data related to the given scorm id. |
| mod.scorm.getScormUserData(data) | mod_scorm_get_scorm_user_data | Retrieves user tracking and SCO data and default SCORM values. |
| mod.scorm.getScormsByCourses(data) | mod_scorm_get_scorms_by_courses | Returns a list of scorm instances in a provided set of courses. |
| mod.scorm.insertScormTracks(data) | mod_scorm_insert_scorm_tracks | Saves a scorm tracking record. |
| mod.scorm.launchSco(data) | mod_scorm_launch_sco | Trigger the SCO launched event. |
| mod.scorm.viewScorm(data) | mod_scorm_view_scorm | Trigger the course module viewed event and update the module completion status.. |
| mod.survey.getQuestions(data) | mod_survey_get_questions | Get the complete list of questions for the survey, including subquestions. |
| mod.survey.getSurveysByCourses(data) | mod_survey_get_surveys_by_courses | Returns a list of survey instances in a provided set of courses, if no courses are provided then all the survey instances the user has access to will be returned. |
| mod.survey.submitAnswers(data) | mod_survey_submit_answers | Submit the answers for a given survey. |
| mod.survey.viewSurvey(data) | mod_survey_view_survey | Trigger the course module viewed event and update the module completion status. |
| mod.url.getUrlsByCourses(data) | mod_url_get_urls_by_courses | Returns a list of urls in a provided list of courses, if no list is provided all urls that the user can view will be returned. |
| mod.url.viewUrl(data) | mod_url_view_url | Trigger the course module viewed event and update the module completion status. |
| mod.wiki.editPage(data) | mod_wiki_edit_page | Save the contents of a page. |
| mod.wiki.getPageContents(data) | mod_wiki_get_page_contents | Returns the contents of a page. |
| mod.wiki.getPageForEditing(data) | mod_wiki_get_page_for_editing | Locks and retrieves info of page-section to be edited. |
| mod.wiki.getSubwikiFiles(data) | mod_wiki_get_subwiki_files | Returns the list of files for a specific subwiki. |
| mod.wiki.getSubwikiPages(data) | mod_wiki_get_subwiki_pages | Returns the list of pages for a specific subwiki. |
| mod.wiki.getSubwikis(data) | mod_wiki_get_subwikis | Returns the list of subwikis the user can see in a specific wiki. |
| mod.wiki.getWikisByCourses(data) | mod_wiki_get_wikis_by_courses | Returns a list of wiki instances in a provided set of courses, if no courses are provided then all the wiki instances the user has access to will be returned. |
| mod.wiki.newPage(data) | mod_wiki_new_page | Create a new page in a subwiki. |
| mod.wiki.viewPage(data) | mod_wiki_view_page | Trigger the page viewed event and update the module completion status. |
| mod.wiki.viewWiki(data) | mod_wiki_view_wiki | Trigger the course module viewed event and update the module completion status. |
| mod.workshop.addSubmission(data) | mod_workshop_add_submission | Add a new submission to a given workshop. |
| mod.workshop.deleteSubmission(data) | mod_workshop_delete_submission | Deletes the given submission. |
| mod.workshop.evaluateAssessment(data) | mod_workshop_evaluate_assessment | Evaluates an assessment (used by teachers for provide feedback to the reviewer). |
| mod.workshop.evaluateSubmission(data) | mod_workshop_evaluate_submission | Evaluates a submission (used by teachers for provide feedback or override the submission grade). |
| mod.workshop.getAssessment(data) | mod_workshop_get_assessment | Retrieves the given assessment. |
| mod.workshop.getAssessmentFormDefinition(data) | mod_workshop_get_assessment_form_definition | Retrieves the assessment form definition. |
| mod.workshop.getGrades(data) | mod_workshop_get_grades | Returns the assessment and submission grade for the given user. |
| mod.workshop.getGradesReport(data) | mod_workshop_get_grades_report | Retrieves the assessment grades report. |
| mod.workshop.getReviewerAssessments(data) | mod_workshop_get_reviewer_assessments | Retrieves all the assessments reviewed by the given user. |
| mod.workshop.getSubmission(data) | mod_workshop_get_submission | Retrieves the given submission. |
| mod.workshop.getSubmissionAssessments(data) | mod_workshop_get_submission_assessments | Retrieves all the assessments of the given submission. |
| mod.workshop.getSubmissions(data) | mod_workshop_get_submissions | Retrieves all the workshop submissions or the one done by the given user (except example submissions). |
| mod.workshop.getUserPlan(data) | mod_workshop_get_user_plan | Return the planner information for the given user. |
| mod.workshop.getWorkshopAccessInformation(data) | mod_workshop_get_workshop_access_information | Return access information for a given workshop. |
| mod.workshop.getWorkshopsByCourses(data) | mod_workshop_get_workshops_by_courses | Returns a list of workshops in a provided list of courses, if no list is provided all workshops that the user can view will be returned. |
| mod.workshop.updateAssessment(data) | mod_workshop_update_assessment | Add information to an allocated assessment. |
| mod.workshop.updateSubmission(data) | mod_workshop_update_submission | Update the given submission. |
| mod.workshop.viewSubmission(data) | mod_workshop_view_submission | Trigger the submission viewed event. |
| mod.workshop.viewWorkshop(data) | mod_workshop_view_workshop | Trigger the course module viewed event and update the module completion status. |
| report.competency.dataForReport(data) | report_competency_data_for_report | Load the data for the competency report in a course. |
| report.insights.actionExecuted(data) | report_insights_action_executed | Stores an action executed over a group of predictions. |
| report.insights.setFixedPrediction(data) | report_insights_set_fixed_prediction | Flags a prediction as fixed. |
| report.insights.setNotusefulPrediction(data) | report_insights_set_notuseful_prediction | Flags the prediction as not useful. |
| tool.analytics.potentialContexts(data) | tool_analytics_potential_contexts | Retrieve the list of potential contexts for a model. |
| tool.lp.dataForCompetenciesManagePage(data) | tool_lp_data_for_competencies_manage_page | Load the data for the competencies manage page template |
| tool.lp.dataForCompetencyFrameworksManagePage(data) | tool_lp_data_for_competency_frameworks_manage_page | Load the data for the competency frameworks manage page template |
| tool.lp.dataForCompetencySummary(data) | tool_lp_data_for_competency_summary | Load competency data for summary template. |
| tool.lp.dataForCourseCompetenciesPage(data) | tool_lp_data_for_course_competencies_page | Load the data for the course competencies page template. |
| tool.lp.dataForPlanPage(data) | tool_lp_data_for_plan_page | Load the data for the plan page template. |
| tool.lp.dataForPlansPage(data) | tool_lp_data_for_plans_page | Load the data for the plans page template |
| tool.lp.dataForRelatedCompetenciesSection(data) | tool_lp_data_for_related_competencies_section | Load the data for the related competencies template. |
| tool.lp.dataForTemplateCompetenciesPage(data) | tool_lp_data_for_template_competencies_page | Load the data for the template competencies page template. |
| tool.lp.dataForTemplatesManagePage(data) | tool_lp_data_for_templates_manage_page | Load the data for the learning plan templates manage page template |
| tool.lp.dataForUserCompetencySummary(data) | tool_lp_data_for_user_competency_summary | Load a summary of a user competency. |
| tool.lp.dataForUserCompetencySummaryInCourse(data) | tool_lp_data_for_user_competency_summary_in_course | Load a summary of a user competency. |
| tool.lp.dataForUserCompetencySummaryInPlan(data) | tool_lp_data_for_user_competency_summary_in_plan | Load a summary of a user competency. |
| tool.lp.dataForUserEvidenceListPage(data) | tool_lp_data_for_user_evidence_list_page | Load the data for the user evidence list page template |
| tool.lp.dataForUserEvidencePage(data) | tool_lp_data_for_user_evidence_page | Load the data for the user evidence page template |
| tool.lp.listCoursesUsingCompetency(data) | tool_lp_list_courses_using_competency | List the courses using a competency |
| tool.lp.searchCohorts(data) | tool_lp_search_cohorts | Search for cohorts. |
| tool.lp.searchUsers(data) | tool_lp_search_users | Search for users. |
| tool.mobile.callExternalFunctions(data) | tool_mobile_call_external_functions | Call multiple external functions and return all responses. |
| tool.mobile.getAutologinKey(data) | tool_mobile_get_autologin_key | Creates an auto-login key for the current user. Is created only in https sites and is restricted by time and ip address. |
| tool.mobile.getConfig(data) | tool_mobile_get_config | Returns a list of the site configurations, filtering by section. |
| tool.mobile.getContent(data) | tool_mobile_get_content | Returns a piece of content to be displayed in the Mobile app. |
| tool.mobile.getPluginsSupportingMobile(data) | tool_mobile_get_plugins_supporting_mobile | Returns a list of Moodle plugins supporting the mobile app. |
| tool.mobile.getPublicConfig(data) | tool_mobile_get_public_config | Returns a list of the site public settings, those not requiring authentication. |
| tool.templatelibrary.listTemplates(data) | tool_templatelibrary_list_templates | List/search templates by component. |
| tool.templatelibrary.loadCanonicalTemplate(data) | tool_templatelibrary_load_canonical_template | Load a canonical template by name (not the theme overidden one). |
| tool.usertours.completeTour(data) | tool_usertours_complete_tour | Mark the specified tour as completed for the current user |
| tool.usertours.fetchAndStartTour(data) | tool_usertours_fetch_and_start_tour | Fetch the specified tour |
| tool.usertours.resetTour(data) | tool_usertours_reset_tour | Remove the specified tour |
| tool.usertours.stepShown(data) | tool_usertours_step_shown | Mark the specified step as completed for the current user |
| tool.xmldb.invokeMoveAction(data) | tool_xmldb_invoke_move_action | moves element up/down |

Note that the `data` argument is not always required and can be omitted.

## Updating function list

Run the extract script to scrape function names from the official website
```bash
npm run extract
```

The script downloads the HTML from [Web service API functions](https://docs.moodle.org/dev/Web_service_API_functions) and parses rows from the *Core web service functions* table.

To update the table in this README.md file run
```bash
npm run table
```

## Running unit test

Run unit test
```bash
npm run test
```

The test will be performed on a built-in mockup server.