import IMoodleWSPayload from './IMoodleWSPayload';
import IMoodleCategory from './IMoodleCategory';
import IMoodleCourseSection from './IMoodleCourseSection';
import IMoodleWSCoursesResponse from './IMoodleWSCoursesResponse';
import IMoodleSiteInfo from './IMoodleSiteInfo';

export default interface IMoodleWSCore {
  user: {
    /** Return list of users identities matching the given criteria in their name or other identity fields. */
    searchIdentity: (payload: IMoodleWSPayload) => Promise<any>;
    /** Store mobile user devices information for PUSH Notifications. */
    addUserDevice: (payload: IMoodleWSPayload) => Promise<any>;
    /** Copy files from a draft area to users private files area. */
    addUserPrivateFiles: (payload: IMoodleWSPayload) => Promise<any>;
    /** Agree the site policy for the current user. */
    agreeSitePolicy: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create users - admin function */
    createUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete users - admin function */
    deleteUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get course user profiles by id */
    getCourseUserProfiles: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns general information about files in the user private files area. */
    getPrivateFilesInfo: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return user preferences. */
    getUserPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    /** Search users. - If you want to get multiple users for one specific field, use core_user_get_users_by_field(), it's designed for this purpose and it should be faster. */
    getUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve users information for a specified unique field - If you want to do a user search, use core_user_get_users() */
    getUsersByField: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get users by id */
    getUsersById: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove a user device from the Moodle database. */
    removeUserDevice: (payload: IMoodleWSPayload) => Promise<any>;
    /** Set user preferences. */
    setUserPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update or delete the user picture in the site */
    updatePicture: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update a user\'s preferences */
    updateUserPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update users */
    updateUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Simulates the web-interface view of user/index.php (triggering events). */
    viewUserList: (payload: IMoodleWSPayload) => Promise<any>;
    /** Simulates the web-interface view of user/view.php and user/profile.php (triggering events). */
    viewUserProfile: (payload: IMoodleWSPayload) => Promise<any>;
  };
  auth: {
    /** Confirm a user account. */
    confirmUser: (payload: IMoodleWSPayload) => Promise<any>;
    /** Checks if age digital consent verification is enabled. */
    isAgeDigitalConsentVerificationEnabled: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Requests a check if a user is a digital minor. */
    isMinor: (payload: IMoodleWSPayload) => Promise<any>;
    /** Requests a password reset. */
    requestPasswordReset: (payload: IMoodleWSPayload) => Promise<any>;
    /** Resend confirmation email. */
    resendConfirmationEmail: (payload: IMoodleWSPayload) => Promise<any>;
  };
  backup: {
    /** Gets the data to use when updating the status table row in the UI for when an async backup completes. */
    getAsyncBackupLinksBackup: (payload: IMoodleWSPayload) => Promise<any>;
    /** Gets the data to use when updating the status table row in the UI for when an async restore completes. */
    getAsyncBackupLinksRestore: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the progress of an Asyncronhous backup. */
    getAsyncBackupProgress: (payload: IMoodleWSPayload) => Promise<any>;
    /** Gets the progress of course copy operations. */
    getCopyProgress: (payload: IMoodleWSPayload) => Promise<any>;
    /** Handles ajax submission of course copy form. */
    submitCopyForm: (payload: IMoodleWSPayload) => Promise<any>;
  };
  badges: {
    /** Returns the list of badges awarded to a user. */
    getUserBadges: (payload: IMoodleWSPayload) => Promise<any>;
  };
  block: {
    /** Returns blocks information for a course. */
    getCourseBlocks: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns blocks information for the given user dashboard. */
    getDashboardBlocks: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns all addable blocks in a given page. */
    fetchAddableBlocks: (payload: IMoodleWSPayload) => Promise<any>;
  };
  blog: {
    /** Returns blog entries. */
    getEntries: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the blog_entries_viewed event. */
    viewEntries: (payload: IMoodleWSPayload) => Promise<any>;
  };
  calendar: {
    /** Create calendar events */
    createCalendarEvents: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete calendar events */
    deleteCalendarEvents: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get calendar action events by course */
    getActionEventsByCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get calendar action events by courses */
    getActionEventsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get calendar action events by tiemsort */
    getActionEventsByTimesort: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the type of events a user can create in the given course. */
    getAllowedEventTypes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Convenience function to retrieve some permissions/access information for the given course calendar. */
    getCalendarAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch the day view data for a calendar */
    getCalendarDayView: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get calendar event by id */
    getCalendarEventById: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get calendar events */
    getCalendarEvents: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch the monthly view data for a calendar */
    getCalendarMonthlyView: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch the upcoming view data for a calendar */
    getCalendarUpcomingView: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch unix timestamps for given date times. */
    getTimestamps: (payload: IMoodleWSPayload) => Promise<any>;
    /** Submit form data for event form */
    submitCreateUpdateForm: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the start day (but not time) for an event. */
    updateEventStartDay: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the auth token required for exporting a calendar. */
    getCalendarExportToken: (payload: IMoodleWSPayload) => Promise<any>;
  };
  cohort: {
    /** Add members to cohort */
    addCohortMembers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create cohorts */
    createCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete members from cohort */
    deleteCohortMembers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete cohorts */
    deleteCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get cohort members */
    getCohortMembers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get cohorts */
    getCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Search for cohorts. */
    searchCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update cohorts */
    updateCohorts: (payload: IMoodleWSPayload) => Promise<any>;
  };
  comment: {
    /** Adds a comment or comments. */
    addComments: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes a comment or comments. */
    deleteComments: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return all the comments for an specific component, context. */
    getComments: (payload: IMoodleWSPayload) => Promise<any>;
  };
  competency: {
    /** Add competency to a course */
    addCompetencyToCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Add a competency to a learning plan */
    addCompetencyToPlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Add competency to a template */
    addCompetencyToTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create a relationship between competencies */
    addRelatedCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Approve a learning plan */
    approvePlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Notify a competency framework as being viewed */
    competencyFrameworkViewed: (payload: IMoodleWSPayload) => Promise<any>;
    /** Report a competency as being viewed */
    competencyViewed: (payload: IMoodleWSPayload) => Promise<any>;
    /** Complete a learning plan */
    completePlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count the competencies */
    countCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count competencies in a course */
    countCompetenciesInCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count the competencies in a template */
    countCompetenciesInTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count the competency frameworks */
    countCompetencyFrameworks: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count the competencies in a course module */
    countCourseModuleCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count courses using a competency */
    countCoursesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count templates */
    countTemplates: (payload: IMoodleWSPayload) => Promise<any>;
    /** Count templates using a competency */
    countTemplatesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create a competency */
    createCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create a competency framework */
    createCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create a learning plan */
    createPlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create a template */
    createTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Link an evidence of prior learning with a user's competency */
    createUserEvidenceCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete a competency */
    deleteCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete a competency framework */
    deleteCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete an evidence */
    deleteEvidence: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete a learning plan */
    deletePlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete a template */
    deleteTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete an evidence of prior learning */
    deleteUserEvidence: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove a link between an evidence of prior learning and a user's competency */
    deleteUserEvidenceCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Duplicate a competency framework */
    duplicateCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    /** Duplicate a template */
    duplicateTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the values for a scale */
    getScaleValues: (payload: IMoodleWSPayload) => Promise<any>;
    /** Rate a user's competency */
    gradeCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Rate a user's competency in a course */
    gradeCompetencyInCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Rate a user's competency in a learning plan */
    gradeCompetencyInPlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** List competencies */
    listCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    /** List the competencies of a template */
    listCompetenciesInTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** List the competency frameworks */
    listCompetencyFrameworks: (payload: IMoodleWSPayload) => Promise<any>;
    /** List the competencies in a course */
    listCourseCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    /** List the competencies in a course module */
    listCourseModuleCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    /** List a learning plan's competencies */
    listPlanCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    /** List templates */
    listTemplates: (payload: IMoodleWSPayload) => Promise<any>;
    /** List templates using a competency */
    listTemplatesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** List a user's learning plans */
    listUserPlans: (payload: IMoodleWSPayload) => Promise<any>;
    /** Move a competency down in its branch */
    moveDownCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Move a competency up in its branch */
    moveUpCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Cancel the review request of a learning plan */
    planCancelReviewRequest: (payload: IMoodleWSPayload) => Promise<any>;
    /** Request the review of a learning plan */
    planRequestReview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Start the review of a learning plan */
    planStartReview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Stop the review of a learning plan */
    planStopReview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch a competency */
    readCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch a competency framework */
    readCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch a learning plan */
    readPlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch a template */
    readTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch an evidence of prior learning */
    readUserEvidence: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove competency from a course */
    removeCompetencyFromCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove a competency from a learning plan */
    removeCompetencyFromPlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove competency from template */
    removeCompetencyFromTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove a relationship between competencies */
    removeRelatedCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Reopen a learning plan */
    reopenPlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Reorder competencies in a course */
    reorderCourseCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Reopen a competency in a learning plan */
    reorderPlanCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Reorder competencies in a template */
    reorderTemplateCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Request the review of the user's competencies linked to an evidence of prior learning */
    requestReviewOfUserEvidenceLinkedCompetencies: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Search for competencies */
    searchCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    /** Set the rule of course competencies */
    setCourseCompetencyRuleoutcome: (payload: IMoodleWSPayload) => Promise<any>;
    /** Relocate a competency to another parent */
    setParentCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Check whether a template has related data */
    templateHasRelatedData: (payload: IMoodleWSPayload) => Promise<any>;
    /** Report a template as being viewed */
    templateViewed: (payload: IMoodleWSPayload) => Promise<any>;
    /** Unapprove a learning plan */
    unapprovePlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Unlink a learning plan from a template */
    unlinkPlanFromTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update a competency */
    updateCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update a competency framework */
    updateCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the course competency settings */
    updateCourseCompetencySettings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update a learning plan */
    updatePlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update a template */
    updateTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Cancel the review request of a user's competency */
    userCompetencyCancelReviewRequest: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Report the archive of user's competency as being viewed */
    userCompetencyPlanViewed: (payload: IMoodleWSPayload) => Promise<any>;
    /** Request the review of a user's competency */
    userCompetencyRequestReview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Start the review of a user's competency */
    userCompetencyStartReview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Stop the review of a user's competency */
    userCompetencyStopReview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Report a user's competency as being viewed */
    userCompetencyViewed: (payload: IMoodleWSPayload) => Promise<any>;
    /** Report a user's competency as being viewed from a course */
    userCompetencyViewedInCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Report a user's competency as being viewed from a learning plan */
    userCompetencyViewedInPlan: (payload: IMoodleWSPayload) => Promise<any>;
  };
  completion: {
    /** Return the activities completion status for a user in a course. */
    getActivitiesCompletionStatus: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns course completion status. */
    getCourseCompletionStatus: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the course completion status for the current user (if course self-completion is enabled). */
    markCourseSelfCompleted: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update completion status for a user in an activity by overriding it. */
    overrideActivityCompletionStatus: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Update completion status for the current user in an activity, only for activities with manual tracking. */
    updateActivityCompletionStatusManually: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
  };
  contentbank: {
    /** Delete a content from the content bank. */
    deleteContent: (payload: IMoodleWSPayload) => Promise<any>;
    /** Rename a content in the content bank. */
    renameContent: (payload: IMoodleWSPayload) => Promise<any>;
    /** Set the visibility of a content in the content bank. */
    setContentVisibility: (payload: IMoodleWSPayload) => Promise<any>;
  };
  course: {
    /** Adds a content item (activity, resource or their subtypes) to the favourites for the user. */
    addContentItemToUserFavourites: (payload: IMoodleWSPayload) => Promise<any>;
    /** Check if there is updates affecting the user for the given course and contexts. */
    checkUpdates: (payload: IMoodleWSPayload) => Promise<any>;
    /** create categories */
    createCategories: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create new courses */
    createCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** delete categories */
    deleteCategories: (payload: IMoodleWSPayload) => Promise<any>;
    /** delete courses */
    deleteCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes all specified module instances */
    deleteModules: (payload: IMoodleWSPayload) => Promise<any>;
    /** duplicate a course */
    duplicateCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Performs an action on course module (change visibility, duplicate, delete, etc.) */
    editModule: (payload: IMoodleWSPayload) => Promise<any>;
    /** Performs an action on course section (change visibility, set marker, delete) */
    editSection: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return activities overview for the given courses. */
    getActivitiesOverview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch the data for the activity chooser footer. */
    getActivityChooserFooter: (payload: IMoodleWSPayload) => Promise<any>;
    /** get categories */
    getCategories: () => Promise<IMoodleCategory[]>;
    /** get course content (modules + web service file urls) */
    getContents: (params: {
      courseid: number;
    }) => Promise<IMoodleCourseSection[]>;
    /** Fetch all the content items (activities, resources and their subtypes) for the activity picker */
    getCourseContentItems: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return information about a course module. */
    getCourseModule: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return information about a given module name and instance id. */
    getCourseModuleByInstance: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return course details */
    getCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get courses matching a specific field (id/s, shortname, idnumber, category) */
    getCoursesByField: (params: {
      field: 'category';
      value: number;
    }) => Promise<IMoodleWSCoursesResponse>;
    /** List of enrolled courses for the given timeline classification (past, inprogress, or future). */
    getEnrolledCoursesByTimelineClassification: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** List users by course module id & filter by group id. */
    getEnrolledUsersByCmid: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns html with one activity module on course page */
    getModule: (payload: IMoodleWSPayload) => Promise<any>;
    /** List of courses a user has accessed most recently. */
    getRecentCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Check if there are updates affecting the user for the given course since the given time stamp. */
    getUpdatesSince: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return a list of administration options in a set of courses that are avaialable or not for the current user. */
    getUserAdministrationOptions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return a list of navigation options in a set of courses that are avaialable or not for the current user. */
    getUserNavigationOptions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Import course data from a course into another course. Does not include any user data. */
    importCourse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Removes a content item (activity, resource or their subtypes) from the favourites for the user. */
    removeContentItemFromUserFavourites: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Search courses by (name, module, block, tag). */
    searchCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Add a list of courses to the list of favourite courses. */
    setFavouriteCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Adds or removes an activity as a recommendation in the activity chooser. */
    toggleActivityRecommendation: (payload: IMoodleWSPayload) => Promise<any>;
    /** update categories */
    updateCategories: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update courses. */
    updateCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Log that the course was viewed */
    viewCourse: (payload: IMoodleWSPayload) => Promise<any>;
  };
  customfield: {
    /** Creates a new category */
    createCategory: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes a category */
    deleteCategory: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes an entry */
    deleteField: (payload: IMoodleWSPayload) => Promise<any>;
    /** Drag and drop categories */
    moveCategory: (payload: IMoodleWSPayload) => Promise<any>;
    /** Drag and drop */
    moveField: (payload: IMoodleWSPayload) => Promise<any>;
    /** Reloads template */
    reloadTemplate: (payload: IMoodleWSPayload) => Promise<any>;
  };
  enrol: {
    /** External function that updates a given user enrolment */
    editUserEnrolment: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the list of course enrolment methods */
    getCourseEnrolmentMethods: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get enrolled users by course id */
    getEnrolledUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** For each course and capability specified, return a list of the users that are enrolled in the course and have that capability */
    getEnrolledUsersWithCapability: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the list of potential users to enrol */
    getPotentialUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** get list of course ids that a user is enrolled in (if you are allowed to see that) */
    getUsersCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Search within the list of course participants */
    searchUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Submit form data for enrolment form */
    submitUserEnrolmentForm: (payload: IMoodleWSPayload) => Promise<any>;
    /** External function that unenrols a given user enrolment */
    unenrolUserEnrolment: (payload: IMoodleWSPayload) => Promise<any>;
  };
  fetch: {
    /** Return a list of notifications for the current session */
    notifications: (payload: IMoodleWSPayload) => Promise<any>;
  };
  files: {
    /** browse moodle files */
    getFiles: (payload: IMoodleWSPayload) => Promise<any>;
    /** upload a file to moodle */
    upload: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete the indicated files (or directories) from a user draft file area. */
    deleteDraftFiles: (payload: IMoodleWSPayload) => Promise<any>;
    /** Generate a new draft itemid for the current user. */
    getUnusedDraftItemid: (payload: IMoodleWSPayload) => Promise<any>;
  };
  filters: {
    /** Returns the filters available in the given contexts. */
    getAvailableInContext: (payload: IMoodleWSPayload) => Promise<any>;
  };
  form: {
    /** Provides data for the filetypes element browser. */
    getFiletypesBrowserData: (payload: IMoodleWSPayload) => Promise<any>;
    /** Process submission of a dynamic (modal) form */
    dynamicForm: (payload: IMoodleWSPayload) => Promise<any>;
  };
  get: {
    /** Return all raw strings (with {$a->xxx}) for a specific component - similar to core get_component_strings() call */
    componentStrings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return a fragment for inclusion, such as a JavaScript page. */
    fragment: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return a translated string - similar to core get_string() call */
    string: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return some translated strings - like several core get_string() calls */
    strings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return formatted timestamps */
    userDates: (payload: IMoodleWSPayload) => Promise<any>;
  };
  grade: {
    /** Update a grade item and associated student grades. */
    updateGrades: (payload: IMoodleWSPayload) => Promise<any>;
  };
  grades: {
    /** Create a grade category inside a course gradebook. */
    createGradecategory: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns student course total grade and grades for activities. This function does not return category or manual items. This function is suitable for managers or teachers not students. */
    getGrades: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch the data required to display the grader grading panel for simple grading, creating the grade item if required */
    graderGradingpanelPointFetch: (payload: IMoodleWSPayload) => Promise<any>;
    /** Store the data required to display the grader grading panel for simple grading */
    graderGradingpanelPointStore: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch the data required to display the grader grading panel for scale-based grading, creating the grade item if required */
    graderGradingpanelScaleFetch: (payload: IMoodleWSPayload) => Promise<any>;
    /** Store the data required to display the grader grading panel for scale-based grading */
    graderGradingpanelScaleStore: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create grade categories inside a course gradebook. */
    createGradecategories: (payload: IMoodleWSPayload) => Promise<any>;
  };
  grading: {
    /** Returns grading definitions for the course module ids and areaname provided as parameters. An optionall activeonly parameter can be provided so that only the active grading method is returned. */
    getDefinitions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the instances and fillings for the requested definition id. An optional since parameter allows the number of records returned to be reduced so that only those with a timemodified value >= since are returned */
    getGradingformInstances: (payload: IMoodleWSPayload) => Promise<any>;
    /** Accepts an array of areas as a parameter. The areas contain grading definitions with criteria for inserting and updating */
    saveDefinitions: (payload: IMoodleWSPayload) => Promise<any>;
  };
  group: {
    /** Adds group members */
    addGroupMembers: (payload: IMoodleWSPayload) => Promise<any>;
    /** assign groups from groupings */
    assignGrouping: (payload: IMoodleWSPayload) => Promise<any>;
    /** create groupings */
    createGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Creates new groups */
    createGroups: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes group members */
    deleteGroupMembers: (payload: IMoodleWSPayload) => Promise<any>;
    /** delete groupings */
    deleteGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes all specified groups */
    deleteGroups: (payload: IMoodleWSPayload) => Promise<any>;
    /** Gets a list of groups that the user is allowed to access within the specified activity. */
    getActivityAllowedGroups: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns effective groupmode used in a given activity. */
    getActivityGroupmode: (payload: IMoodleWSPayload) => Promise<any>;
    /** get all groupings in specified course */
    getCourseGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns all groups in specified course */
    getCourseGroups: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns all groups in specified course for the specified user. */
    getCourseUserGroups: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns group members */
    getGroupMembers: (payload: IMoodleWSPayload) => Promise<any>;
    /** get groupings */
    getGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns group details. */
    getGroups: (payload: IMoodleWSPayload) => Promise<any>;
    /** unassign groups from groupings */
    unassignGrouping: (payload: IMoodleWSPayload) => Promise<any>;
    /** update groupings */
    updateGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    /** Updates existing groups. */
    updateGroups: (payload: IMoodleWSPayload) => Promise<any>;
  };
  h5p: {
    /** Get the H5P file cleaned for Mobile App. */
    getTrustedH5pFile: (payload: IMoodleWSPayload) => Promise<any>;
  };
  message: {
    /** Block contacts */
    blockContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Blocks a user */
    blockUser: (payload: IMoodleWSPayload) => Promise<any>;
    /** Confirms a contact request */
    confirmContactRequest: (payload: IMoodleWSPayload) => Promise<any>;
    /** Creates a contact request */
    createContactRequest: (payload: IMoodleWSPayload) => Promise<any>;
    /** Add contacts to the contact list */
    createContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the template data for the contact list */
    dataForMessageareaContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the template data for the conversation list */
    dataForMessageareaConversations: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Retrieve the template data for the most recent message */
    dataForMessageareaGetMostRecentMessage: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Retrieve the template data for the users\'s profile */
    dataForMessageareaGetProfile: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the template data for the messages */
    dataForMessageareaMessages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the template data for searching for messages */
    dataForMessageareaSearchMessages: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Retrieve the template data for searching for people */
    dataForMessageareaSearchUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the template data for searching for people in a course */
    dataForMessageareaSearchUsersInCourse: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Declines a contact request */
    declineContactRequest: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove contacts from the contact list */
    deleteContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes a conversation. */
    deleteConversation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes a list of conversations. */
    deleteConversationsById: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes a message. */
    deleteMessage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes a message for all users. */
    deleteMessageForAllUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a list of users blocked */
    getBlockedUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns contact requests for a user */
    getContactRequests: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the contact list */
    getContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a conversation for a user */
    getConversation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a conversation for a user between another user */
    getConversationBetweenUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a list of conversation counts, indexed by type. */
    getConversationCounts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a list of members in a conversation */
    getConversationMembers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the conversation messages and relevant member information */
    getConversationMessages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a list of conversations for a user */
    getConversations: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a user message profiles */
    getMemberInfo: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a message processor */
    getMessageProcessor: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve a list of messages sent and received by a user (conversations, notifications or both) */
    getMessages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Gets the number of received contact requests */
    getReceivedContactRequestsCount: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Retrieve a self-conversation for a user */
    getSelfConversation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the count of unread conversations for a given user */
    getUnreadConversationsCount: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the contact list */
    getUserContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the message preferences for a given user. */
    getUserMessagePreferences: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the notification preferences for a given user. */
    getUserNotificationPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    /** Mark all conversation messages as read for a given user */
    markAllConversationMessagesAsRead: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Mark all messages as read for a given user */
    markAllMessagesAsRead: (payload: IMoodleWSPayload) => Promise<any>;
    /** Mark all notifications as read for a given user */
    markAllNotificationsAsRead: (payload: IMoodleWSPayload) => Promise<any>;
    /** Mark a single message as read, trigger message_viewed event. */
    markMessageRead: (payload: IMoodleWSPayload) => Promise<any>;
    /** Mark a single notification as read, trigger notification_viewed event. */
    markNotificationRead: (payload: IMoodleWSPayload) => Promise<any>;
    /** Process the message processor config form */
    messageProcessorConfigForm: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve the data for searching for people */
    messageSearchUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Mutes a list of conversations */
    muteConversations: (payload: IMoodleWSPayload) => Promise<any>;
    /** Search for contacts */
    searchContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Send instant messages */
    sendInstantMessages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Send messages to an existing conversation between users */
    sendMessagesToConversation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Mark a conversation or group of conversations as favourites/starred conversations. */
    setFavouriteConversations: (payload: IMoodleWSPayload) => Promise<any>;
    /** Unblock contacts */
    unblockContacts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Unblocks a user */
    unblockUser: (payload: IMoodleWSPayload) => Promise<any>;
    /** Unmutes a list of conversations */
    unmuteConversations: (payload: IMoodleWSPayload) => Promise<any>;
    /** Unset a conversation or group of conversations as favourites/starred conversations. */
    unsetFavouriteConversations: (payload: IMoodleWSPayload) => Promise<any>;
  };
  notes: {
    /** Create notes */
    createNotes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete Notes */
    deleteNotes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns all notes in specified course (or site) for the specified user. */
    getCourseNotes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve Notes */
    getNotes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update Notes */
    updateNotes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Simulates the web interface view of notes/index.php: trigger events. */
    viewNotes: (payload: IMoodleWSPayload) => Promise<any>;
  };
  output: {
    /** Load the mapping of names to icons */
    loadFontawesomeIconMap: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load a template for a renderable */
    loadTemplate: (payload: IMoodleWSPayload) => Promise<any>;
  };
  payment: {
    /** Get the list of payment gateways that support the given component/area */
    getAvailableGateways: (payload: IMoodleWSPayload) => Promise<any>;
  };
  question: {
    /** Get the random question set for a criteria */
    getRandomQuestionSummaries: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the question tags. */
    submitTagsForm: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the flag state of a question attempt. */
    updateFlag: (payload: IMoodleWSPayload) => Promise<any>;
  };
  rating: {
    /** Rates an item. */
    addRating: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve all the ratings for an item. */
    getItemRatings: (payload: IMoodleWSPayload) => Promise<any>;
  };
  role: {
    /** Manual role assignments */
    assignRoles: (payload: IMoodleWSPayload) => Promise<any>;
    /** Manual role unassignments */
    unassignRoles: (payload: IMoodleWSPayload) => Promise<any>;
  };
  search: {
    /** Gets relevant users for a search request. */
    getRelevantUsers: (payload: IMoodleWSPayload) => Promise<any>;
  };
  session: {
    /** Count the seconds remaining in this session */
    timeRemaining: (payload: IMoodleWSPayload) => Promise<any>;
    /** Keep the users session alive */
    touch: (payload: IMoodleWSPayload) => Promise<any>;
  };
  tag: {
    /** Retrieves existing tag areas. */
    getTagAreas: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves a tag cloud for the given collection and/or query search. */
    getTagCloud: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves existing tag collections. */
    getTagCollections: (payload: IMoodleWSPayload) => Promise<any>;
    /** Gets tag index page for one tag and one tag area */
    getTagindex: (payload: IMoodleWSPayload) => Promise<any>;
    /** Gets tag index page per different areas. */
    getTagindexPerArea: (payload: IMoodleWSPayload) => Promise<any>;
    /** Gets tags by their ids */
    getTags: (payload: IMoodleWSPayload) => Promise<any>;
    /** Updates tags */
    updateTags: (payload: IMoodleWSPayload) => Promise<any>;
  };
  update: {
    /** Generic service to update title */
    inplaceEditable: (payload: IMoodleWSPayload) => Promise<any>;
  };
  webservice: {
    /** Return some site info / user info / list web service functions */
    getSiteInfo: () => Promise<IMoodleSiteInfo>;
  };
}
