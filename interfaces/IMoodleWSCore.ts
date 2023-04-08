import IMoodleWSParams from './IMoodleWSParams';
import IMoodleCategory from './IMoodleCategory';
import IMoodleCourseSection from './IMoodleCourseSection';
import IMoodleWSCoursesResponse from './IMoodleWSCoursesResponse';
import IMoodleSiteInfo from './IMoodleSiteInfo';
import IMoodleWSCourseModuleResponse from './IMoodleWSCourseModuleResponse';

export default interface IMoodleWSCore {
  user: {
    /** Return list of users identities matching the given criteria in their name or other identity fields. */
    searchIdentity: (params: IMoodleWSParams) => Promise<any>;
    /** Store mobile user devices information for PUSH Notifications. */
    addUserDevice: (params: IMoodleWSParams) => Promise<any>;
    /** Copy files from a draft area to users private files area. */
    addUserPrivateFiles: (params: IMoodleWSParams) => Promise<any>;
    /** Agree the site policy for the current user. */
    agreeSitePolicy: (params: IMoodleWSParams) => Promise<any>;
    /** Create users - admin function */
    createUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Delete users - admin function */
    deleteUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Get course user profiles by id */
    getCourseUserProfiles: (params: IMoodleWSParams) => Promise<any>;
    /** Returns general information about files in the user private files area. */
    getPrivateFilesInfo: (params: IMoodleWSParams) => Promise<any>;
    /** Return user preferences. */
    getUserPreferences: (params: IMoodleWSParams) => Promise<any>;
    /** Search users. - If you want to get multiple users for one specific field, use core_user_get_users_by_field(), it's designed for this purpose and it should be faster. */
    getUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve users information for a specified unique field - If you want to do a user search, use core_user_get_users() */
    getUsersByField: (params: IMoodleWSParams) => Promise<any>;
    /** Get users by id */
    getUsersById: (params: IMoodleWSParams) => Promise<any>;
    /** Remove a user device from the Moodle database. */
    removeUserDevice: (params: IMoodleWSParams) => Promise<any>;
    /** Set user preferences. */
    setUserPreferences: (params: IMoodleWSParams) => Promise<any>;
    /** Update or delete the user picture in the site */
    updatePicture: (params: IMoodleWSParams) => Promise<any>;
    /** Update a user\'s preferences */
    updateUserPreferences: (params: IMoodleWSParams) => Promise<any>;
    /** Update users */
    updateUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Simulates the web-interface view of user/index.php (triggering events). */
    viewUserList: (params: IMoodleWSParams) => Promise<any>;
    /** Simulates the web-interface view of user/view.php and user/profile.php (triggering events). */
    viewUserProfile: (params: IMoodleWSParams) => Promise<any>;
  };
  auth: {
    /** Confirm a user account. */
    confirmUser: (params: IMoodleWSParams) => Promise<any>;
    /** Checks if age digital consent verification is enabled. */
    isAgeDigitalConsentVerificationEnabled: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Requests a check if a user is a digital minor. */
    isMinor: (params: IMoodleWSParams) => Promise<any>;
    /** Requests a password reset. */
    requestPasswordReset: (params: IMoodleWSParams) => Promise<any>;
    /** Resend confirmation email. */
    resendConfirmationEmail: (params: IMoodleWSParams) => Promise<any>;
  };
  backup: {
    /** Gets the data to use when updating the status table row in the UI for when an async backup completes. */
    getAsyncBackupLinksBackup: (params: IMoodleWSParams) => Promise<any>;
    /** Gets the data to use when updating the status table row in the UI for when an async restore completes. */
    getAsyncBackupLinksRestore: (params: IMoodleWSParams) => Promise<any>;
    /** Get the progress of an Asyncronhous backup. */
    getAsyncBackupProgress: (params: IMoodleWSParams) => Promise<any>;
    /** Gets the progress of course copy operations. */
    getCopyProgress: (params: IMoodleWSParams) => Promise<any>;
    /** Handles ajax submission of course copy form. */
    submitCopyForm: (params: IMoodleWSParams) => Promise<any>;
  };
  badges: {
    /** Returns the list of badges awarded to a user. */
    getUserBadges: (params: IMoodleWSParams) => Promise<any>;
  };
  block: {
    /** Returns blocks information for a course. */
    getCourseBlocks: (params: IMoodleWSParams) => Promise<any>;
    /** Returns blocks information for the given user dashboard. */
    getDashboardBlocks: (params: IMoodleWSParams) => Promise<any>;
    /** Returns all addable blocks in a given page. */
    fetchAddableBlocks: (params: IMoodleWSParams) => Promise<any>;
  };
  blog: {
    /** Returns blog entries. */
    getEntries: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the blog_entries_viewed event. */
    viewEntries: (params: IMoodleWSParams) => Promise<any>;
  };
  calendar: {
    /** Create calendar events */
    createCalendarEvents: (params: IMoodleWSParams) => Promise<any>;
    /** Delete calendar events */
    deleteCalendarEvents: (params: IMoodleWSParams) => Promise<any>;
    /** Get calendar action events by course */
    getActionEventsByCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Get calendar action events by courses */
    getActionEventsByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Get calendar action events by tiemsort */
    getActionEventsByTimesort: (params: IMoodleWSParams) => Promise<any>;
    /** Get the type of events a user can create in the given course. */
    getAllowedEventTypes: (params: IMoodleWSParams) => Promise<any>;
    /** Convenience function to retrieve some permissions/access information for the given course calendar. */
    getCalendarAccessInformation: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch the day view data for a calendar */
    getCalendarDayView: (params: IMoodleWSParams) => Promise<any>;
    /** Get calendar event by id */
    getCalendarEventById: (params: IMoodleWSParams) => Promise<any>;
    /** Get calendar events */
    getCalendarEvents: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch the monthly view data for a calendar */
    getCalendarMonthlyView: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch the upcoming view data for a calendar */
    getCalendarUpcomingView: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch unix timestamps for given date times. */
    getTimestamps: (params: IMoodleWSParams) => Promise<any>;
    /** Submit form data for event form */
    submitCreateUpdateForm: (params: IMoodleWSParams) => Promise<any>;
    /** Update the start day (but not time) for an event. */
    updateEventStartDay: (params: IMoodleWSParams) => Promise<any>;
    /** Return the auth token required for exporting a calendar. */
    getCalendarExportToken: (params: IMoodleWSParams) => Promise<any>;
  };
  cohort: {
    /** Add members to cohort */
    addCohortMembers: (params: IMoodleWSParams) => Promise<any>;
    /** Create cohorts */
    createCohorts: (params: IMoodleWSParams) => Promise<any>;
    /** Delete members from cohort */
    deleteCohortMembers: (params: IMoodleWSParams) => Promise<any>;
    /** Delete cohorts */
    deleteCohorts: (params: IMoodleWSParams) => Promise<any>;
    /** Get cohort members */
    getCohortMembers: (params: IMoodleWSParams) => Promise<any>;
    /** Get cohorts */
    getCohorts: (params: IMoodleWSParams) => Promise<any>;
    /** Search for cohorts. */
    searchCohorts: (params: IMoodleWSParams) => Promise<any>;
    /** Update cohorts */
    updateCohorts: (params: IMoodleWSParams) => Promise<any>;
  };
  comment: {
    /** Adds a comment or comments. */
    addComments: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes a comment or comments. */
    deleteComments: (params: IMoodleWSParams) => Promise<any>;
    /** Return all the comments for an specific component, context. */
    getComments: (params: IMoodleWSParams) => Promise<any>;
  };
  competency: {
    /** Add competency to a course */
    addCompetencyToCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Add a competency to a learning plan */
    addCompetencyToPlan: (params: IMoodleWSParams) => Promise<any>;
    /** Add competency to a template */
    addCompetencyToTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Create a relationship between competencies */
    addRelatedCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Approve a learning plan */
    approvePlan: (params: IMoodleWSParams) => Promise<any>;
    /** Notify a competency framework as being viewed */
    competencyFrameworkViewed: (params: IMoodleWSParams) => Promise<any>;
    /** Report a competency as being viewed */
    competencyViewed: (params: IMoodleWSParams) => Promise<any>;
    /** Complete a learning plan */
    completePlan: (params: IMoodleWSParams) => Promise<any>;
    /** Count the competencies */
    countCompetencies: (params: IMoodleWSParams) => Promise<any>;
    /** Count competencies in a course */
    countCompetenciesInCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Count the competencies in a template */
    countCompetenciesInTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Count the competency frameworks */
    countCompetencyFrameworks: (params: IMoodleWSParams) => Promise<any>;
    /** Count the competencies in a course module */
    countCourseModuleCompetencies: (params: IMoodleWSParams) => Promise<any>;
    /** Count courses using a competency */
    countCoursesUsingCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Count templates */
    countTemplates: (params: IMoodleWSParams) => Promise<any>;
    /** Count templates using a competency */
    countTemplatesUsingCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Create a competency */
    createCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Create a competency framework */
    createCompetencyFramework: (params: IMoodleWSParams) => Promise<any>;
    /** Create a learning plan */
    createPlan: (params: IMoodleWSParams) => Promise<any>;
    /** Create a template */
    createTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Link an evidence of prior learning with a user's competency */
    createUserEvidenceCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Delete a competency */
    deleteCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Delete a competency framework */
    deleteCompetencyFramework: (params: IMoodleWSParams) => Promise<any>;
    /** Delete an evidence */
    deleteEvidence: (params: IMoodleWSParams) => Promise<any>;
    /** Delete a learning plan */
    deletePlan: (params: IMoodleWSParams) => Promise<any>;
    /** Delete a template */
    deleteTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Delete an evidence of prior learning */
    deleteUserEvidence: (params: IMoodleWSParams) => Promise<any>;
    /** Remove a link between an evidence of prior learning and a user's competency */
    deleteUserEvidenceCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Duplicate a competency framework */
    duplicateCompetencyFramework: (params: IMoodleWSParams) => Promise<any>;
    /** Duplicate a template */
    duplicateTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Get the values for a scale */
    getScaleValues: (params: IMoodleWSParams) => Promise<any>;
    /** Rate a user's competency */
    gradeCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Rate a user's competency in a course */
    gradeCompetencyInCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Rate a user's competency in a learning plan */
    gradeCompetencyInPlan: (params: IMoodleWSParams) => Promise<any>;
    /** List competencies */
    listCompetencies: (params: IMoodleWSParams) => Promise<any>;
    /** List the competencies of a template */
    listCompetenciesInTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** List the competency frameworks */
    listCompetencyFrameworks: (params: IMoodleWSParams) => Promise<any>;
    /** List the competencies in a course */
    listCourseCompetencies: (params: IMoodleWSParams) => Promise<any>;
    /** List the competencies in a course module */
    listCourseModuleCompetencies: (params: IMoodleWSParams) => Promise<any>;
    /** List a learning plan's competencies */
    listPlanCompetencies: (params: IMoodleWSParams) => Promise<any>;
    /** List templates */
    listTemplates: (params: IMoodleWSParams) => Promise<any>;
    /** List templates using a competency */
    listTemplatesUsingCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** List a user's learning plans */
    listUserPlans: (params: IMoodleWSParams) => Promise<any>;
    /** Move a competency down in its branch */
    moveDownCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Move a competency up in its branch */
    moveUpCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Cancel the review request of a learning plan */
    planCancelReviewRequest: (params: IMoodleWSParams) => Promise<any>;
    /** Request the review of a learning plan */
    planRequestReview: (params: IMoodleWSParams) => Promise<any>;
    /** Start the review of a learning plan */
    planStartReview: (params: IMoodleWSParams) => Promise<any>;
    /** Stop the review of a learning plan */
    planStopReview: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch a competency */
    readCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch a competency framework */
    readCompetencyFramework: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch a learning plan */
    readPlan: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch a template */
    readTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch an evidence of prior learning */
    readUserEvidence: (params: IMoodleWSParams) => Promise<any>;
    /** Remove competency from a course */
    removeCompetencyFromCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Remove a competency from a learning plan */
    removeCompetencyFromPlan: (params: IMoodleWSParams) => Promise<any>;
    /** Remove competency from template */
    removeCompetencyFromTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Remove a relationship between competencies */
    removeRelatedCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Reopen a learning plan */
    reopenPlan: (params: IMoodleWSParams) => Promise<any>;
    /** Reorder competencies in a course */
    reorderCourseCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Reopen a competency in a learning plan */
    reorderPlanCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Reorder competencies in a template */
    reorderTemplateCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Request the review of the user's competencies linked to an evidence of prior learning */
    requestReviewOfUserEvidenceLinkedCompetencies: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Search for competencies */
    searchCompetencies: (params: IMoodleWSParams) => Promise<any>;
    /** Set the rule of course competencies */
    setCourseCompetencyRuleoutcome: (params: IMoodleWSParams) => Promise<any>;
    /** Relocate a competency to another parent */
    setParentCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Check whether a template has related data */
    templateHasRelatedData: (params: IMoodleWSParams) => Promise<any>;
    /** Report a template as being viewed */
    templateViewed: (params: IMoodleWSParams) => Promise<any>;
    /** Unapprove a learning plan */
    unapprovePlan: (params: IMoodleWSParams) => Promise<any>;
    /** Unlink a learning plan from a template */
    unlinkPlanFromTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Update a competency */
    updateCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Update a competency framework */
    updateCompetencyFramework: (params: IMoodleWSParams) => Promise<any>;
    /** Update the course competency settings */
    updateCourseCompetencySettings: (params: IMoodleWSParams) => Promise<any>;
    /** Update a learning plan */
    updatePlan: (params: IMoodleWSParams) => Promise<any>;
    /** Update a template */
    updateTemplate: (params: IMoodleWSParams) => Promise<any>;
    /** Cancel the review request of a user's competency */
    userCompetencyCancelReviewRequest: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Report the archive of user's competency as being viewed */
    userCompetencyPlanViewed: (params: IMoodleWSParams) => Promise<any>;
    /** Request the review of a user's competency */
    userCompetencyRequestReview: (params: IMoodleWSParams) => Promise<any>;
    /** Start the review of a user's competency */
    userCompetencyStartReview: (params: IMoodleWSParams) => Promise<any>;
    /** Stop the review of a user's competency */
    userCompetencyStopReview: (params: IMoodleWSParams) => Promise<any>;
    /** Report a user's competency as being viewed */
    userCompetencyViewed: (params: IMoodleWSParams) => Promise<any>;
    /** Report a user's competency as being viewed from a course */
    userCompetencyViewedInCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Report a user's competency as being viewed from a learning plan */
    userCompetencyViewedInPlan: (params: IMoodleWSParams) => Promise<any>;
  };
  completion: {
    /** Return the activities completion status for a user in a course. */
    getActivitiesCompletionStatus: (params: IMoodleWSParams) => Promise<any>;
    /** Returns course completion status. */
    getCourseCompletionStatus: (params: IMoodleWSParams) => Promise<any>;
    /** Update the course completion status for the current user (if course self-completion is enabled). */
    markCourseSelfCompleted: (params: IMoodleWSParams) => Promise<any>;
    /** Update completion status for a user in an activity by overriding it. */
    overrideActivityCompletionStatus: (params: IMoodleWSParams) => Promise<any>;
    /** Update completion status for the current user in an activity, only for activities with manual tracking. */
    updateActivityCompletionStatusManually: (
      params: IMoodleWSParams
    ) => Promise<any>;
  };
  contentbank: {
    /** Delete a content from the content bank. */
    deleteContent: (params: IMoodleWSParams) => Promise<any>;
    /** Rename a content in the content bank. */
    renameContent: (params: IMoodleWSParams) => Promise<any>;
    /** Set the visibility of a content in the content bank. */
    setContentVisibility: (params: IMoodleWSParams) => Promise<any>;
  };
  course: {
    /** Adds a content item (activity, resource or their subtypes) to the favourites for the user. */
    addContentItemToUserFavourites: (params: IMoodleWSParams) => Promise<any>;
    /** Check if there is updates affecting the user for the given course and contexts. */
    checkUpdates: (params: IMoodleWSParams) => Promise<any>;
    /** create categories */
    createCategories: (params: IMoodleWSParams) => Promise<any>;
    /** Create new courses */
    createCourses: (params: IMoodleWSParams) => Promise<any>;
    /** delete categories */
    deleteCategories: (params: IMoodleWSParams) => Promise<any>;
    /** delete courses */
    deleteCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes all specified module instances */
    deleteModules: (params: IMoodleWSParams) => Promise<any>;
    /** duplicate a course */
    duplicateCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Performs an action on course module (change visibility, duplicate, delete, etc.) */
    editModule: (params: IMoodleWSParams) => Promise<any>;
    /** Performs an action on course section (change visibility, set marker, delete) */
    editSection: (params: IMoodleWSParams) => Promise<any>;
    /** Return activities overview for the given courses. */
    getActivitiesOverview: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch the data for the activity chooser footer. */
    getActivityChooserFooter: (params: IMoodleWSParams) => Promise<any>;
    /** get categories */
    getCategories: () => Promise<IMoodleCategory[]>;
    /** get course content (modules + web service file urls) */
    getContents: (params: {
      courseid: number;
    }) => Promise<IMoodleCourseSection[]>;
    /** Fetch all the content items (activities, resources and their subtypes) for the activity picker */
    getCourseContentItems: (params: IMoodleWSParams) => Promise<any>;
    /** Return information about a course module. */
    getCourseModule: (params: {
      cmid: number;
    }) => Promise<IMoodleWSCourseModuleResponse>;
    /** Return information about a given module name and instance id. */
    getCourseModuleByInstance: (params: IMoodleWSParams) => Promise<any>;
    /** Return course details */
    getCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Get courses matching a specific field (id/s, shortname, idnumber, category) */
    getCoursesByField: (params: {
      field: 'category';
      value: number;
    }) => Promise<IMoodleWSCoursesResponse>;
    /** List of enrolled courses for the given timeline classification (past, inprogress, or future). */
    getEnrolledCoursesByTimelineClassification: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** List users by course module id & filter by group id. */
    getEnrolledUsersByCmid: (params: IMoodleWSParams) => Promise<any>;
    /** Returns html with one activity module on course page */
    getModule: (params: IMoodleWSParams) => Promise<any>;
    /** List of courses a user has accessed most recently. */
    getRecentCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Check if there are updates affecting the user for the given course since the given time stamp. */
    getUpdatesSince: (params: IMoodleWSParams) => Promise<any>;
    /** Return a list of administration options in a set of courses that are avaialable or not for the current user. */
    getUserAdministrationOptions: (params: IMoodleWSParams) => Promise<any>;
    /** Return a list of navigation options in a set of courses that are avaialable or not for the current user. */
    getUserNavigationOptions: (params: IMoodleWSParams) => Promise<any>;
    /** Import course data from a course into another course. Does not include any user data. */
    importCourse: (params: IMoodleWSParams) => Promise<any>;
    /** Removes a content item (activity, resource or their subtypes) from the favourites for the user. */
    removeContentItemFromUserFavourites: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Search courses by (name, module, block, tag). */
    searchCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Add a list of courses to the list of favourite courses. */
    setFavouriteCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Adds or removes an activity as a recommendation in the activity chooser. */
    toggleActivityRecommendation: (params: IMoodleWSParams) => Promise<any>;
    /** update categories */
    updateCategories: (params: IMoodleWSParams) => Promise<any>;
    /** Update courses. */
    updateCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Log that the course was viewed */
    viewCourse: (params: IMoodleWSParams) => Promise<any>;
  };
  customfield: {
    /** Creates a new category */
    createCategory: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes a category */
    deleteCategory: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes an entry */
    deleteField: (params: IMoodleWSParams) => Promise<any>;
    /** Drag and drop categories */
    moveCategory: (params: IMoodleWSParams) => Promise<any>;
    /** Drag and drop */
    moveField: (params: IMoodleWSParams) => Promise<any>;
    /** Reloads template */
    reloadTemplate: (params: IMoodleWSParams) => Promise<any>;
  };
  enrol: {
    /** External function that updates a given user enrolment */
    editUserEnrolment: (params: IMoodleWSParams) => Promise<any>;
    /** Get the list of course enrolment methods */
    getCourseEnrolmentMethods: (params: IMoodleWSParams) => Promise<any>;
    /** Get enrolled users by course id */
    getEnrolledUsers: (params: IMoodleWSParams) => Promise<any>;
    /** For each course and capability specified, return a list of the users that are enrolled in the course and have that capability */
    getEnrolledUsersWithCapability: (params: IMoodleWSParams) => Promise<any>;
    /** Get the list of potential users to enrol */
    getPotentialUsers: (params: IMoodleWSParams) => Promise<any>;
    /** get list of course ids that a user is enrolled in (if you are allowed to see that) */
    getUsersCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Search within the list of course participants */
    searchUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Submit form data for enrolment form */
    submitUserEnrolmentForm: (params: IMoodleWSParams) => Promise<any>;
    /** External function that unenrols a given user enrolment */
    unenrolUserEnrolment: (params: IMoodleWSParams) => Promise<any>;
  };
  fetch: {
    /** Return a list of notifications for the current session */
    notifications: (params: IMoodleWSParams) => Promise<any>;
  };
  files: {
    /** browse moodle files */
    getFiles: (params: IMoodleWSParams) => Promise<any>;
    /** upload a file to moodle */
    upload: (params: IMoodleWSParams) => Promise<any>;
    /** Delete the indicated files (or directories) from a user draft file area. */
    deleteDraftFiles: (params: IMoodleWSParams) => Promise<any>;
    /** Generate a new draft itemid for the current user. */
    getUnusedDraftItemid: (params: IMoodleWSParams) => Promise<any>;
  };
  filters: {
    /** Returns the filters available in the given contexts. */
    getAvailableInContext: (params: IMoodleWSParams) => Promise<any>;
  };
  form: {
    /** Provides data for the filetypes element browser. */
    getFiletypesBrowserData: (params: IMoodleWSParams) => Promise<any>;
    /** Process submission of a dynamic (modal) form */
    dynamicForm: (params: IMoodleWSParams) => Promise<any>;
  };
  get: {
    /** Return all raw strings (with {$a->xxx}) for a specific component - similar to core get_component_strings() call */
    componentStrings: (params: IMoodleWSParams) => Promise<any>;
    /** Return a fragment for inclusion, such as a JavaScript page. */
    fragment: (params: IMoodleWSParams) => Promise<any>;
    /** Return a translated string - similar to core get_string() call */
    string: (params: IMoodleWSParams) => Promise<any>;
    /** Return some translated strings - like several core get_string() calls */
    strings: (params: IMoodleWSParams) => Promise<any>;
    /** Return formatted timestamps */
    userDates: (params: IMoodleWSParams) => Promise<any>;
  };
  grade: {
    /** Update a grade item and associated student grades. */
    updateGrades: (params: IMoodleWSParams) => Promise<any>;
  };
  grades: {
    /** Create a grade category inside a course gradebook. */
    createGradecategory: (params: IMoodleWSParams) => Promise<any>;
    /** Returns student course total grade and grades for activities. This function does not return category or manual items. This function is suitable for managers or teachers not students. */
    getGrades: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch the data required to display the grader grading panel for simple grading, creating the grade item if required */
    graderGradingpanelPointFetch: (params: IMoodleWSParams) => Promise<any>;
    /** Store the data required to display the grader grading panel for simple grading */
    graderGradingpanelPointStore: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch the data required to display the grader grading panel for scale-based grading, creating the grade item if required */
    graderGradingpanelScaleFetch: (params: IMoodleWSParams) => Promise<any>;
    /** Store the data required to display the grader grading panel for scale-based grading */
    graderGradingpanelScaleStore: (params: IMoodleWSParams) => Promise<any>;
    /** Create grade categories inside a course gradebook. */
    createGradecategories: (params: IMoodleWSParams) => Promise<any>;
  };
  grading: {
    /** Returns grading definitions for the course module ids and areaname provided as parameters. An optionall activeonly parameter can be provided so that only the active grading method is returned. */
    getDefinitions: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the instances and fillings for the requested definition id. An optional since parameter allows the number of records returned to be reduced so that only those with a timemodified value >= since are returned */
    getGradingformInstances: (params: IMoodleWSParams) => Promise<any>;
    /** Accepts an array of areas as a parameter. The areas contain grading definitions with criteria for inserting and updating */
    saveDefinitions: (params: IMoodleWSParams) => Promise<any>;
  };
  group: {
    /** Adds group members */
    addGroupMembers: (params: IMoodleWSParams) => Promise<any>;
    /** assign groups from groupings */
    assignGrouping: (params: IMoodleWSParams) => Promise<any>;
    /** create groupings */
    createGroupings: (params: IMoodleWSParams) => Promise<any>;
    /** Creates new groups */
    createGroups: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes group members */
    deleteGroupMembers: (params: IMoodleWSParams) => Promise<any>;
    /** delete groupings */
    deleteGroupings: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes all specified groups */
    deleteGroups: (params: IMoodleWSParams) => Promise<any>;
    /** Gets a list of groups that the user is allowed to access within the specified activity. */
    getActivityAllowedGroups: (params: IMoodleWSParams) => Promise<any>;
    /** Returns effective groupmode used in a given activity. */
    getActivityGroupmode: (params: IMoodleWSParams) => Promise<any>;
    /** get all groupings in specified course */
    getCourseGroupings: (params: IMoodleWSParams) => Promise<any>;
    /** Returns all groups in specified course */
    getCourseGroups: (params: IMoodleWSParams) => Promise<any>;
    /** Returns all groups in specified course for the specified user. */
    getCourseUserGroups: (params: IMoodleWSParams) => Promise<any>;
    /** Returns group members */
    getGroupMembers: (params: IMoodleWSParams) => Promise<any>;
    /** get groupings */
    getGroupings: (params: IMoodleWSParams) => Promise<any>;
    /** Returns group details. */
    getGroups: (params: IMoodleWSParams) => Promise<any>;
    /** unassign groups from groupings */
    unassignGrouping: (params: IMoodleWSParams) => Promise<any>;
    /** update groupings */
    updateGroupings: (params: IMoodleWSParams) => Promise<any>;
    /** Updates existing groups. */
    updateGroups: (params: IMoodleWSParams) => Promise<any>;
  };
  h5p: {
    /** Get the H5P file cleaned for Mobile App. */
    getTrustedH5pFile: (params: IMoodleWSParams) => Promise<any>;
  };
  message: {
    /** Block contacts */
    blockContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Blocks a user */
    blockUser: (params: IMoodleWSParams) => Promise<any>;
    /** Confirms a contact request */
    confirmContactRequest: (params: IMoodleWSParams) => Promise<any>;
    /** Creates a contact request */
    createContactRequest: (params: IMoodleWSParams) => Promise<any>;
    /** Add contacts to the contact list */
    createContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the template data for the contact list */
    dataForMessageareaContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the template data for the conversation list */
    dataForMessageareaConversations: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the template data for the most recent message */
    dataForMessageareaGetMostRecentMessage: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Retrieve the template data for the users\'s profile */
    dataForMessageareaGetProfile: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the template data for the messages */
    dataForMessageareaMessages: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the template data for searching for messages */
    dataForMessageareaSearchMessages: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the template data for searching for people */
    dataForMessageareaSearchUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the template data for searching for people in a course */
    dataForMessageareaSearchUsersInCourse: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Declines a contact request */
    declineContactRequest: (params: IMoodleWSParams) => Promise<any>;
    /** Remove contacts from the contact list */
    deleteContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes a conversation. */
    deleteConversation: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes a list of conversations. */
    deleteConversationsById: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes a message. */
    deleteMessage: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes a message for all users. */
    deleteMessageForAllUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a list of users blocked */
    getBlockedUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Returns contact requests for a user */
    getContactRequests: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the contact list */
    getContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a conversation for a user */
    getConversation: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a conversation for a user between another user */
    getConversationBetweenUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a list of conversation counts, indexed by type. */
    getConversationCounts: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a list of members in a conversation */
    getConversationMembers: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the conversation messages and relevant member information */
    getConversationMessages: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a list of conversations for a user */
    getConversations: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a user message profiles */
    getMemberInfo: (params: IMoodleWSParams) => Promise<any>;
    /** Get a message processor */
    getMessageProcessor: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a list of messages sent and received by a user (conversations, notifications or both) */
    getMessages: (params: IMoodleWSParams) => Promise<any>;
    /** Gets the number of received contact requests */
    getReceivedContactRequestsCount: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve a self-conversation for a user */
    getSelfConversation: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the count of unread conversations for a given user */
    getUnreadConversationsCount: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the contact list */
    getUserContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Get the message preferences for a given user. */
    getUserMessagePreferences: (params: IMoodleWSParams) => Promise<any>;
    /** Get the notification preferences for a given user. */
    getUserNotificationPreferences: (params: IMoodleWSParams) => Promise<any>;
    /** Mark all conversation messages as read for a given user */
    markAllConversationMessagesAsRead: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Mark all messages as read for a given user */
    markAllMessagesAsRead: (params: IMoodleWSParams) => Promise<any>;
    /** Mark all notifications as read for a given user */
    markAllNotificationsAsRead: (params: IMoodleWSParams) => Promise<any>;
    /** Mark a single message as read, trigger message_viewed event. */
    markMessageRead: (params: IMoodleWSParams) => Promise<any>;
    /** Mark a single notification as read, trigger notification_viewed event. */
    markNotificationRead: (params: IMoodleWSParams) => Promise<any>;
    /** Process the message processor config form */
    messageProcessorConfigForm: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve the data for searching for people */
    messageSearchUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Mutes a list of conversations */
    muteConversations: (params: IMoodleWSParams) => Promise<any>;
    /** Search for contacts */
    searchContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Send instant messages */
    sendInstantMessages: (params: IMoodleWSParams) => Promise<any>;
    /** Send messages to an existing conversation between users */
    sendMessagesToConversation: (params: IMoodleWSParams) => Promise<any>;
    /** Mark a conversation or group of conversations as favourites/starred conversations. */
    setFavouriteConversations: (params: IMoodleWSParams) => Promise<any>;
    /** Unblock contacts */
    unblockContacts: (params: IMoodleWSParams) => Promise<any>;
    /** Unblocks a user */
    unblockUser: (params: IMoodleWSParams) => Promise<any>;
    /** Unmutes a list of conversations */
    unmuteConversations: (params: IMoodleWSParams) => Promise<any>;
    /** Unset a conversation or group of conversations as favourites/starred conversations. */
    unsetFavouriteConversations: (params: IMoodleWSParams) => Promise<any>;
  };
  notes: {
    /** Create notes */
    createNotes: (params: IMoodleWSParams) => Promise<any>;
    /** Delete Notes */
    deleteNotes: (params: IMoodleWSParams) => Promise<any>;
    /** Returns all notes in specified course (or site) for the specified user. */
    getCourseNotes: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve Notes */
    getNotes: (params: IMoodleWSParams) => Promise<any>;
    /** Update Notes */
    updateNotes: (params: IMoodleWSParams) => Promise<any>;
    /** Simulates the web interface view of notes/index.php: trigger events. */
    viewNotes: (params: IMoodleWSParams) => Promise<any>;
  };
  output: {
    /** Load the mapping of names to icons */
    loadFontawesomeIconMap: (params: IMoodleWSParams) => Promise<any>;
    /** Load a template for a renderable */
    loadTemplate: (params: IMoodleWSParams) => Promise<any>;
  };
  payment: {
    /** Get the list of payment gateways that support the given component/area */
    getAvailableGateways: (params: IMoodleWSParams) => Promise<any>;
  };
  question: {
    /** Get the random question set for a criteria */
    getRandomQuestionSummaries: (params: IMoodleWSParams) => Promise<any>;
    /** Update the question tags. */
    submitTagsForm: (params: IMoodleWSParams) => Promise<any>;
    /** Update the flag state of a question attempt. */
    updateFlag: (params: IMoodleWSParams) => Promise<any>;
  };
  rating: {
    /** Rates an item. */
    addRating: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve all the ratings for an item. */
    getItemRatings: (params: IMoodleWSParams) => Promise<any>;
  };
  role: {
    /** Manual role assignments */
    assignRoles: (params: IMoodleWSParams) => Promise<any>;
    /** Manual role unassignments */
    unassignRoles: (params: IMoodleWSParams) => Promise<any>;
  };
  search: {
    /** Gets relevant users for a search request. */
    getRelevantUsers: (params: IMoodleWSParams) => Promise<any>;
  };
  session: {
    /** Count the seconds remaining in this session */
    timeRemaining: (params: IMoodleWSParams) => Promise<any>;
    /** Keep the users session alive */
    touch: (params: IMoodleWSParams) => Promise<any>;
  };
  tag: {
    /** Retrieves existing tag areas. */
    getTagAreas: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves a tag cloud for the given collection and/or query search. */
    getTagCloud: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves existing tag collections. */
    getTagCollections: (params: IMoodleWSParams) => Promise<any>;
    /** Gets tag index page for one tag and one tag area */
    getTagindex: (params: IMoodleWSParams) => Promise<any>;
    /** Gets tag index page per different areas. */
    getTagindexPerArea: (params: IMoodleWSParams) => Promise<any>;
    /** Gets tags by their ids */
    getTags: (params: IMoodleWSParams) => Promise<any>;
    /** Updates tags */
    updateTags: (params: IMoodleWSParams) => Promise<any>;
  };
  update: {
    /** Generic service to update title */
    inplaceEditable: (params: IMoodleWSParams) => Promise<any>;
  };
  webservice: {
    /** Return some site info / user info / list web service functions */
    getSiteInfo: () => Promise<IMoodleSiteInfo>;
  };
}
