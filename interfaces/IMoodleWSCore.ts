import IMoodleWSPayload from './IMoodleWSPayload';
import IMoodleCategory from './IMoodleCategory';
import IMoodleCourseSection from './IMoodleCourseSection';
import IMoodleWSCoursesResponse from './IMoodleWSCoursesResponse';
import IMoodleSiteInfo from './IMoodleSiteInfo';

export default interface IMoodleWSCore {
  auth: {
    confirmUser: (payload: IMoodleWSPayload) => Promise<any>;
    isAgeDigitalConsentVerificationEnabled: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    isMinor: (payload: IMoodleWSPayload) => Promise<any>;
    requestPasswordReset: (payload: IMoodleWSPayload) => Promise<any>;
    resendConfirmationEmail: (payload: IMoodleWSPayload) => Promise<any>;
  };
  backup: {
    getAsyncBackupLinksBackup: (payload: IMoodleWSPayload) => Promise<any>;
    getAsyncBackupLinksRestore: (payload: IMoodleWSPayload) => Promise<any>;
    getAsyncBackupProgress: (payload: IMoodleWSPayload) => Promise<any>;
  };
  badges: {
    getUserBadges: (payload: IMoodleWSPayload) => Promise<any>;
  };
  block: {
    getCourseBlocks: (payload: IMoodleWSPayload) => Promise<any>;
    getDashboardBlocks: (payload: IMoodleWSPayload) => Promise<any>;
  };
  blog: {
    getEntries: (payload: IMoodleWSPayload) => Promise<any>;
    viewEntries: (payload: IMoodleWSPayload) => Promise<any>;
  };
  calendar: {
    createCalendarEvents: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCalendarEvents: (payload: IMoodleWSPayload) => Promise<any>;
    getActionEventsByCourse: (payload: IMoodleWSPayload) => Promise<any>;
    getActionEventsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getActionEventsByTimesort: (payload: IMoodleWSPayload) => Promise<any>;
    getAllowedEventTypes: (payload: IMoodleWSPayload) => Promise<any>;
    getCalendarAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getCalendarDayView: (payload: IMoodleWSPayload) => Promise<any>;
    getCalendarEventById: (payload: IMoodleWSPayload) => Promise<any>;
    getCalendarEvents: (payload: IMoodleWSPayload) => Promise<any>;
    getCalendarMonthlyView: (payload: IMoodleWSPayload) => Promise<any>;
    getCalendarUpcomingView: (payload: IMoodleWSPayload) => Promise<any>;
    getTimestamps: (payload: IMoodleWSPayload) => Promise<any>;
    submitCreateUpdateForm: (payload: IMoodleWSPayload) => Promise<any>;
    updateEventStartDay: (payload: IMoodleWSPayload) => Promise<any>;
  };
  cohort: {
    addCohortMembers: (payload: IMoodleWSPayload) => Promise<any>;
    createCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCohortMembers: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    getCohortMembers: (payload: IMoodleWSPayload) => Promise<any>;
    getCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    searchCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    updateCohorts: (payload: IMoodleWSPayload) => Promise<any>;
  };
  comment: {
    addComments: (payload: IMoodleWSPayload) => Promise<any>;
    deleteComments: (payload: IMoodleWSPayload) => Promise<any>;
    getComments: (payload: IMoodleWSPayload) => Promise<any>;
  };
  competency: {
    addCompetencyToCourse: (payload: IMoodleWSPayload) => Promise<any>;
    addCompetencyToPlan: (payload: IMoodleWSPayload) => Promise<any>;
    addCompetencyToTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    addRelatedCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    approvePlan: (payload: IMoodleWSPayload) => Promise<any>;
    competencyFrameworkViewed: (payload: IMoodleWSPayload) => Promise<any>;
    competencyViewed: (payload: IMoodleWSPayload) => Promise<any>;
    completePlan: (payload: IMoodleWSPayload) => Promise<any>;
    countCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    countCompetenciesInCourse: (payload: IMoodleWSPayload) => Promise<any>;
    countCompetenciesInTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    countCompetencyFrameworks: (payload: IMoodleWSPayload) => Promise<any>;
    countCourseModuleCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    countCoursesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    countTemplates: (payload: IMoodleWSPayload) => Promise<any>;
    countTemplatesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    createCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    createCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    createPlan: (payload: IMoodleWSPayload) => Promise<any>;
    createTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    createUserEvidenceCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    deleteEvidence: (payload: IMoodleWSPayload) => Promise<any>;
    deletePlan: (payload: IMoodleWSPayload) => Promise<any>;
    deleteTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    deleteUserEvidence: (payload: IMoodleWSPayload) => Promise<any>;
    deleteUserEvidenceCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    duplicateCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    duplicateTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    getScaleValues: (payload: IMoodleWSPayload) => Promise<any>;
    gradeCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    gradeCompetencyInCourse: (payload: IMoodleWSPayload) => Promise<any>;
    gradeCompetencyInPlan: (payload: IMoodleWSPayload) => Promise<any>;
    listCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    listCompetenciesInTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    listCompetencyFrameworks: (payload: IMoodleWSPayload) => Promise<any>;
    listCourseCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    listCourseModuleCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    listPlanCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    listTemplates: (payload: IMoodleWSPayload) => Promise<any>;
    listTemplatesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    listUserPlans: (payload: IMoodleWSPayload) => Promise<any>;
    moveDownCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    moveUpCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    planCancelReviewRequest: (payload: IMoodleWSPayload) => Promise<any>;
    planRequestReview: (payload: IMoodleWSPayload) => Promise<any>;
    planStartReview: (payload: IMoodleWSPayload) => Promise<any>;
    planStopReview: (payload: IMoodleWSPayload) => Promise<any>;
    readCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    readCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    readPlan: (payload: IMoodleWSPayload) => Promise<any>;
    readTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    readUserEvidence: (payload: IMoodleWSPayload) => Promise<any>;
    removeCompetencyFromCourse: (payload: IMoodleWSPayload) => Promise<any>;
    removeCompetencyFromPlan: (payload: IMoodleWSPayload) => Promise<any>;
    removeCompetencyFromTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    removeRelatedCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    reopenPlan: (payload: IMoodleWSPayload) => Promise<any>;
    reorderCourseCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    reorderPlanCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    reorderTemplateCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    requestReviewOfUserEvidenceLinkedCompetencies: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    searchCompetencies: (payload: IMoodleWSPayload) => Promise<any>;
    setCourseCompetencyRuleoutcome: (payload: IMoodleWSPayload) => Promise<any>;
    setParentCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    templateHasRelatedData: (payload: IMoodleWSPayload) => Promise<any>;
    templateViewed: (payload: IMoodleWSPayload) => Promise<any>;
    unapprovePlan: (payload: IMoodleWSPayload) => Promise<any>;
    unlinkPlanFromTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    updateCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    updateCompetencyFramework: (payload: IMoodleWSPayload) => Promise<any>;
    updateCourseCompetencySettings: (payload: IMoodleWSPayload) => Promise<any>;
    updatePlan: (payload: IMoodleWSPayload) => Promise<any>;
    updateTemplate: (payload: IMoodleWSPayload) => Promise<any>;
    userCompetencyCancelReviewRequest: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    userCompetencyPlanViewed: (payload: IMoodleWSPayload) => Promise<any>;
    userCompetencyRequestReview: (payload: IMoodleWSPayload) => Promise<any>;
    userCompetencyStartReview: (payload: IMoodleWSPayload) => Promise<any>;
    userCompetencyStopReview: (payload: IMoodleWSPayload) => Promise<any>;
    userCompetencyViewed: (payload: IMoodleWSPayload) => Promise<any>;
    userCompetencyViewedInCourse: (payload: IMoodleWSPayload) => Promise<any>;
    userCompetencyViewedInPlan: (payload: IMoodleWSPayload) => Promise<any>;
  };
  completion: {
    getActivitiesCompletionStatus: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseCompletionStatus: (payload: IMoodleWSPayload) => Promise<any>;
    markCourseSelfCompleted: (payload: IMoodleWSPayload) => Promise<any>;
    overrideActivityCompletionStatus: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    updateActivityCompletionStatusManually: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
  };
  course: {
    checkUpdates: (payload: IMoodleWSPayload) => Promise<any>;
    createCategories: (payload: IMoodleWSPayload) => Promise<any>;
    createCourses: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCategories: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCourses: (payload: IMoodleWSPayload) => Promise<any>;
    deleteModules: (payload: IMoodleWSPayload) => Promise<any>;
    duplicateCourse: (payload: IMoodleWSPayload) => Promise<any>;
    editModule: (payload: IMoodleWSPayload) => Promise<any>;
    editSection: (payload: IMoodleWSPayload) => Promise<any>;
    getActivitiesOverview: (payload: IMoodleWSPayload) => Promise<any>;
    getCategories: () => Promise<IMoodleCategory[]>;
    getContents: (params: {
      courseid: number;
    }) => Promise<IMoodleCourseSection[]>;
    getCourseModule: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseModuleByInstance: (payload: IMoodleWSPayload) => Promise<any>;
    getCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getCoursesByField: (params: {
      field: 'category';
      value: number;
    }) => Promise<IMoodleWSCoursesResponse>;
    getEnrolledCoursesByTimelineClassification: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    getEnrolledUsersByCmid: (payload: IMoodleWSPayload) => Promise<any>;
    getModule: (payload: IMoodleWSPayload) => Promise<any>;
    getRecentCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getUpdatesSince: (payload: IMoodleWSPayload) => Promise<any>;
    getUserAdministrationOptions: (payload: IMoodleWSPayload) => Promise<any>;
    getUserNavigationOptions: (payload: IMoodleWSPayload) => Promise<any>;
    importCourse: (payload: IMoodleWSPayload) => Promise<any>;
    searchCourses: (payload: IMoodleWSPayload) => Promise<any>;
    setFavouriteCourses: (payload: IMoodleWSPayload) => Promise<any>;
    updateCategories: (payload: IMoodleWSPayload) => Promise<any>;
    updateCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewCourse: (payload: IMoodleWSPayload) => Promise<any>;
  };
  customfield: {
    createCategory: (payload: IMoodleWSPayload) => Promise<any>;
    deleteCategory: (payload: IMoodleWSPayload) => Promise<any>;
    deleteField: (payload: IMoodleWSPayload) => Promise<any>;
    moveCategory: (payload: IMoodleWSPayload) => Promise<any>;
    moveField: (payload: IMoodleWSPayload) => Promise<any>;
    reloadTemplate: (payload: IMoodleWSPayload) => Promise<any>;
  };
  enrol: {
    editUserEnrolment: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseEnrolmentMethods: (payload: IMoodleWSPayload) => Promise<any>;
    getEnrolledUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getEnrolledUsersWithCapability: (payload: IMoodleWSPayload) => Promise<any>;
    getPotentialUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getUsersCourses: (payload: IMoodleWSPayload) => Promise<any>;
    searchUsers: (payload: IMoodleWSPayload) => Promise<any>;
    submitUserEnrolmentForm: (payload: IMoodleWSPayload) => Promise<any>;
    unenrolUserEnrolment: (payload: IMoodleWSPayload) => Promise<any>;
  };
  fetch: {
    notifications: (payload: IMoodleWSPayload) => Promise<any>;
  };
  files: {
    getFiles: (payload: IMoodleWSPayload) => Promise<any>;
    upload: (payload: IMoodleWSPayload) => Promise<any>;
  };
  filters: {
    getAvailableInContext: (payload: IMoodleWSPayload) => Promise<any>;
  };
  form: {
    getFiletypesBrowserData: (payload: IMoodleWSPayload) => Promise<any>;
  };
  get: {
    componentStrings: (payload: IMoodleWSPayload) => Promise<any>;
    fragment: (payload: IMoodleWSPayload) => Promise<any>;
    string: (payload: IMoodleWSPayload) => Promise<any>;
    strings: (payload: IMoodleWSPayload) => Promise<any>;
    userDates: (payload: IMoodleWSPayload) => Promise<any>;
  };
  grade: {
    updateGrades: (payload: IMoodleWSPayload) => Promise<any>;
  };
  grades: {
    getGrades: (payload: IMoodleWSPayload) => Promise<any>;
    graderGradingpanelPointFetch: (payload: IMoodleWSPayload) => Promise<any>;
    graderGradingpanelPointStore: (payload: IMoodleWSPayload) => Promise<any>;
    graderGradingpanelScaleFetch: (payload: IMoodleWSPayload) => Promise<any>;
    graderGradingpanelScaleStore: (payload: IMoodleWSPayload) => Promise<any>;
  };
  grading: {
    getDefinitions: (payload: IMoodleWSPayload) => Promise<any>;
    getGradingformInstances: (payload: IMoodleWSPayload) => Promise<any>;
    saveDefinitions: (payload: IMoodleWSPayload) => Promise<any>;
  };
  group: {
    addGroupMembers: (payload: IMoodleWSPayload) => Promise<any>;
    assignGrouping: (payload: IMoodleWSPayload) => Promise<any>;
    createGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    createGroups: (payload: IMoodleWSPayload) => Promise<any>;
    deleteGroupMembers: (payload: IMoodleWSPayload) => Promise<any>;
    deleteGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    deleteGroups: (payload: IMoodleWSPayload) => Promise<any>;
    getActivityAllowedGroups: (payload: IMoodleWSPayload) => Promise<any>;
    getActivityGroupmode: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseGroups: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseUserGroups: (payload: IMoodleWSPayload) => Promise<any>;
    getGroupMembers: (payload: IMoodleWSPayload) => Promise<any>;
    getGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    getGroups: (payload: IMoodleWSPayload) => Promise<any>;
    unassignGrouping: (payload: IMoodleWSPayload) => Promise<any>;
    updateGroupings: (payload: IMoodleWSPayload) => Promise<any>;
    updateGroups: (payload: IMoodleWSPayload) => Promise<any>;
  };
  h5p: {
    getTrustedH5pFile: (payload: IMoodleWSPayload) => Promise<any>;
  };
  message: {
    blockContacts: (payload: IMoodleWSPayload) => Promise<any>;
    blockUser: (payload: IMoodleWSPayload) => Promise<any>;
    confirmContactRequest: (payload: IMoodleWSPayload) => Promise<any>;
    createContactRequest: (payload: IMoodleWSPayload) => Promise<any>;
    createContacts: (payload: IMoodleWSPayload) => Promise<any>;
    dataForMessageareaContacts: (payload: IMoodleWSPayload) => Promise<any>;
    dataForMessageareaConversations: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForMessageareaGetMostRecentMessage: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForMessageareaGetProfile: (payload: IMoodleWSPayload) => Promise<any>;
    dataForMessageareaMessages: (payload: IMoodleWSPayload) => Promise<any>;
    dataForMessageareaSearchMessages: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForMessageareaSearchUsers: (payload: IMoodleWSPayload) => Promise<any>;
    dataForMessageareaSearchUsersInCourse: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    declineContactRequest: (payload: IMoodleWSPayload) => Promise<any>;
    deleteContacts: (payload: IMoodleWSPayload) => Promise<any>;
    deleteConversation: (payload: IMoodleWSPayload) => Promise<any>;
    deleteConversationsById: (payload: IMoodleWSPayload) => Promise<any>;
    deleteMessage: (payload: IMoodleWSPayload) => Promise<any>;
    deleteMessageForAllUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getBlockedUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getContactRequests: (payload: IMoodleWSPayload) => Promise<any>;
    getContacts: (payload: IMoodleWSPayload) => Promise<any>;
    getConversation: (payload: IMoodleWSPayload) => Promise<any>;
    getConversationBetweenUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getConversationCounts: (payload: IMoodleWSPayload) => Promise<any>;
    getConversationMembers: (payload: IMoodleWSPayload) => Promise<any>;
    getConversationMessages: (payload: IMoodleWSPayload) => Promise<any>;
    getConversations: (payload: IMoodleWSPayload) => Promise<any>;
    getMemberInfo: (payload: IMoodleWSPayload) => Promise<any>;
    getMessageProcessor: (payload: IMoodleWSPayload) => Promise<any>;
    getMessages: (payload: IMoodleWSPayload) => Promise<any>;
    getReceivedContactRequestsCount: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    getSelfConversation: (payload: IMoodleWSPayload) => Promise<any>;
    getUnreadConversationsCount: (payload: IMoodleWSPayload) => Promise<any>;
    getUserContacts: (payload: IMoodleWSPayload) => Promise<any>;
    getUserMessagePreferences: (payload: IMoodleWSPayload) => Promise<any>;
    getUserNotificationPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    markAllConversationMessagesAsRead: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    markAllMessagesAsRead: (payload: IMoodleWSPayload) => Promise<any>;
    markAllNotificationsAsRead: (payload: IMoodleWSPayload) => Promise<any>;
    markMessageRead: (payload: IMoodleWSPayload) => Promise<any>;
    markNotificationRead: (payload: IMoodleWSPayload) => Promise<any>;
    messageProcessorConfigForm: (payload: IMoodleWSPayload) => Promise<any>;
    messageSearchUsers: (payload: IMoodleWSPayload) => Promise<any>;
    muteConversations: (payload: IMoodleWSPayload) => Promise<any>;
    searchContacts: (payload: IMoodleWSPayload) => Promise<any>;
    sendInstantMessages: (payload: IMoodleWSPayload) => Promise<any>;
    sendMessagesToConversation: (payload: IMoodleWSPayload) => Promise<any>;
    setFavouriteConversations: (payload: IMoodleWSPayload) => Promise<any>;
    unblockContacts: (payload: IMoodleWSPayload) => Promise<any>;
    unblockUser: (payload: IMoodleWSPayload) => Promise<any>;
    unmuteConversations: (payload: IMoodleWSPayload) => Promise<any>;
    unsetFavouriteConversations: (payload: IMoodleWSPayload) => Promise<any>;
  };
  notes: {
    createNotes: (payload: IMoodleWSPayload) => Promise<any>;
    deleteNotes: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseNotes: (payload: IMoodleWSPayload) => Promise<any>;
    getNotes: (payload: IMoodleWSPayload) => Promise<any>;
    updateNotes: (payload: IMoodleWSPayload) => Promise<any>;
    viewNotes: (payload: IMoodleWSPayload) => Promise<any>;
  };
  output: {
    loadFontawesomeIconMap: (payload: IMoodleWSPayload) => Promise<any>;
    loadTemplate: (payload: IMoodleWSPayload) => Promise<any>;
  };
  question: {
    getRandomQuestionSummaries: (payload: IMoodleWSPayload) => Promise<any>;
    submitTagsForm: (payload: IMoodleWSPayload) => Promise<any>;
    updateFlag: (payload: IMoodleWSPayload) => Promise<any>;
  };
  rating: {
    addRating: (payload: IMoodleWSPayload) => Promise<any>;
    getItemRatings: (payload: IMoodleWSPayload) => Promise<any>;
  };
  role: {
    assignRoles: (payload: IMoodleWSPayload) => Promise<any>;
    unassignRoles: (payload: IMoodleWSPayload) => Promise<any>;
  };
  search: {
    getRelevantUsers: (payload: IMoodleWSPayload) => Promise<any>;
  };
  session: {
    timeRemaining: (payload: IMoodleWSPayload) => Promise<any>;
    touch: (payload: IMoodleWSPayload) => Promise<any>;
  };
  tag: {
    getTagAreas: (payload: IMoodleWSPayload) => Promise<any>;
    getTagCloud: (payload: IMoodleWSPayload) => Promise<any>;
    getTagCollections: (payload: IMoodleWSPayload) => Promise<any>;
    getTagindex: (payload: IMoodleWSPayload) => Promise<any>;
    getTagindexPerArea: (payload: IMoodleWSPayload) => Promise<any>;
    getTags: (payload: IMoodleWSPayload) => Promise<any>;
    updateTags: (payload: IMoodleWSPayload) => Promise<any>;
  };
  update: {
    inplaceEditable: (payload: IMoodleWSPayload) => Promise<any>;
  };
  user: {
    addUserDevice: (payload: IMoodleWSPayload) => Promise<any>;
    addUserPrivateFiles: (payload: IMoodleWSPayload) => Promise<any>;
    agreeSitePolicy: (payload: IMoodleWSPayload) => Promise<any>;
    createUsers: (payload: IMoodleWSPayload) => Promise<any>;
    deleteUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getCourseUserProfiles: (payload: IMoodleWSPayload) => Promise<any>;
    getPrivateFilesInfo: (payload: IMoodleWSPayload) => Promise<any>;
    getUserPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    getUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getUsersByField: (payload: IMoodleWSPayload) => Promise<any>;
    getUsersById: (payload: IMoodleWSPayload) => Promise<any>;
    removeUserDevice: (payload: IMoodleWSPayload) => Promise<any>;
    setUserPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    updatePicture: (payload: IMoodleWSPayload) => Promise<any>;
    updateUserPreferences: (payload: IMoodleWSPayload) => Promise<any>;
    updateUsers: (payload: IMoodleWSPayload) => Promise<any>;
    viewUserList: (payload: IMoodleWSPayload) => Promise<any>;
    viewUserProfile: (payload: IMoodleWSPayload) => Promise<any>;
  };
  webservice: {
    getSiteInfo: () => Promise<IMoodleSiteInfo>;
  };
}
