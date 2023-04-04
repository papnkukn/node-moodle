export interface IMoodleWSCore {
  auth: {
    confirmUser: (data?: any) => Promise<any>;
    isAgeDigitalConsentVerificationEnabled: (data?: any) => Promise<any>;
    isMinor: (data?: any) => Promise<any>;
    requestPasswordReset: (data?: any) => Promise<any>;
    resendConfirmationEmail: (data?: any) => Promise<any>;
  };
  backup: {
    getAsyncBackupLinksBackup: (data?: any) => Promise<any>;
    getAsyncBackupLinksRestore: (data?: any) => Promise<any>;
    getAsyncBackupProgress: (data?: any) => Promise<any>;
  };
  badges: {
    getUserBadges: (data?: any) => Promise<any>;
  };
  block: {
    getCourseBlocks: (data?: any) => Promise<any>;
    getDashboardBlocks: (data?: any) => Promise<any>;
  };
  blog: {
    getEntries: (data?: any) => Promise<any>;
    viewEntries: (data?: any) => Promise<any>;
  };
  calendar: {
    createCalendarEvents: (data?: any) => Promise<any>;
    deleteCalendarEvents: (data?: any) => Promise<any>;
    getActionEventsByCourse: (data?: any) => Promise<any>;
    getActionEventsByCourses: (data?: any) => Promise<any>;
    getActionEventsByTimesort: (data?: any) => Promise<any>;
    getAllowedEventTypes: (data?: any) => Promise<any>;
    getCalendarAccessInformation: (data?: any) => Promise<any>;
    getCalendarDayView: (data?: any) => Promise<any>;
    getCalendarEventById: (data?: any) => Promise<any>;
    getCalendarEvents: (data?: any) => Promise<any>;
    getCalendarMonthlyView: (data?: any) => Promise<any>;
    getCalendarUpcomingView: (data?: any) => Promise<any>;
    getTimestamps: (data?: any) => Promise<any>;
    submitCreateUpdateForm: (data?: any) => Promise<any>;
    updateEventStartDay: (data?: any) => Promise<any>;
  };
  cohort: {
    addCohortMembers: (data?: any) => Promise<any>;
    createCohorts: (data?: any) => Promise<any>;
    deleteCohortMembers: (data?: any) => Promise<any>;
    deleteCohorts: (data?: any) => Promise<any>;
    getCohortMembers: (data?: any) => Promise<any>;
    getCohorts: (data?: any) => Promise<any>;
    searchCohorts: (data?: any) => Promise<any>;
    updateCohorts: (data?: any) => Promise<any>;
  };
  comment: {
    addComments: (data?: any) => Promise<any>;
    deleteComments: (data?: any) => Promise<any>;
    getComments: (data?: any) => Promise<any>;
  };
  competency: {
    addCompetencyToCourse: (data?: any) => Promise<any>;
    addCompetencyToPlan: (data?: any) => Promise<any>;
    addCompetencyToTemplate: (data?: any) => Promise<any>;
    addRelatedCompetency: (data?: any) => Promise<any>;
    approvePlan: (data?: any) => Promise<any>;
    competencyFrameworkViewed: (data?: any) => Promise<any>;
    competencyViewed: (data?: any) => Promise<any>;
    completePlan: (data?: any) => Promise<any>;
    countCompetencies: (data?: any) => Promise<any>;
    countCompetenciesInCourse: (data?: any) => Promise<any>;
    countCompetenciesInTemplate: (data?: any) => Promise<any>;
    countCompetencyFrameworks: (data?: any) => Promise<any>;
    countCourseModuleCompetencies: (data?: any) => Promise<any>;
    countCoursesUsingCompetency: (data?: any) => Promise<any>;
    countTemplates: (data?: any) => Promise<any>;
    countTemplatesUsingCompetency: (data?: any) => Promise<any>;
    createCompetency: (data?: any) => Promise<any>;
    createCompetencyFramework: (data?: any) => Promise<any>;
    createPlan: (data?: any) => Promise<any>;
    createTemplate: (data?: any) => Promise<any>;
    createUserEvidenceCompetency: (data?: any) => Promise<any>;
    deleteCompetency: (data?: any) => Promise<any>;
    deleteCompetencyFramework: (data?: any) => Promise<any>;
    deleteEvidence: (data?: any) => Promise<any>;
    deletePlan: (data?: any) => Promise<any>;
    deleteTemplate: (data?: any) => Promise<any>;
    deleteUserEvidence: (data?: any) => Promise<any>;
    deleteUserEvidenceCompetency: (data?: any) => Promise<any>;
    duplicateCompetencyFramework: (data?: any) => Promise<any>;
    duplicateTemplate: (data?: any) => Promise<any>;
    getScaleValues: (data?: any) => Promise<any>;
    gradeCompetency: (data?: any) => Promise<any>;
    gradeCompetencyInCourse: (data?: any) => Promise<any>;
    gradeCompetencyInPlan: (data?: any) => Promise<any>;
    listCompetencies: (data?: any) => Promise<any>;
    listCompetenciesInTemplate: (data?: any) => Promise<any>;
    listCompetencyFrameworks: (data?: any) => Promise<any>;
    listCourseCompetencies: (data?: any) => Promise<any>;
    listCourseModuleCompetencies: (data?: any) => Promise<any>;
    listPlanCompetencies: (data?: any) => Promise<any>;
    listTemplates: (data?: any) => Promise<any>;
    listTemplatesUsingCompetency: (data?: any) => Promise<any>;
    listUserPlans: (data?: any) => Promise<any>;
    moveDownCompetency: (data?: any) => Promise<any>;
    moveUpCompetency: (data?: any) => Promise<any>;
    planCancelReviewRequest: (data?: any) => Promise<any>;
    planRequestReview: (data?: any) => Promise<any>;
    planStartReview: (data?: any) => Promise<any>;
    planStopReview: (data?: any) => Promise<any>;
    readCompetency: (data?: any) => Promise<any>;
    readCompetencyFramework: (data?: any) => Promise<any>;
    readPlan: (data?: any) => Promise<any>;
    readTemplate: (data?: any) => Promise<any>;
    readUserEvidence: (data?: any) => Promise<any>;
    removeCompetencyFromCourse: (data?: any) => Promise<any>;
    removeCompetencyFromPlan: (data?: any) => Promise<any>;
    removeCompetencyFromTemplate: (data?: any) => Promise<any>;
    removeRelatedCompetency: (data?: any) => Promise<any>;
    reopenPlan: (data?: any) => Promise<any>;
    reorderCourseCompetency: (data?: any) => Promise<any>;
    reorderPlanCompetency: (data?: any) => Promise<any>;
    reorderTemplateCompetency: (data?: any) => Promise<any>;
    requestReviewOfUserEvidenceLinkedCompetencies: (data?: any) => Promise<any>;
    searchCompetencies: (data?: any) => Promise<any>;
    setCourseCompetencyRuleoutcome: (data?: any) => Promise<any>;
    setParentCompetency: (data?: any) => Promise<any>;
    templateHasRelatedData: (data?: any) => Promise<any>;
    templateViewed: (data?: any) => Promise<any>;
    unapprovePlan: (data?: any) => Promise<any>;
    unlinkPlanFromTemplate: (data?: any) => Promise<any>;
    updateCompetency: (data?: any) => Promise<any>;
    updateCompetencyFramework: (data?: any) => Promise<any>;
    updateCourseCompetencySettings: (data?: any) => Promise<any>;
    updatePlan: (data?: any) => Promise<any>;
    updateTemplate: (data?: any) => Promise<any>;
    userCompetencyCancelReviewRequest: (data?: any) => Promise<any>;
    userCompetencyPlanViewed: (data?: any) => Promise<any>;
    userCompetencyRequestReview: (data?: any) => Promise<any>;
    userCompetencyStartReview: (data?: any) => Promise<any>;
    userCompetencyStopReview: (data?: any) => Promise<any>;
    userCompetencyViewed: (data?: any) => Promise<any>;
    userCompetencyViewedInCourse: (data?: any) => Promise<any>;
    userCompetencyViewedInPlan: (data?: any) => Promise<any>;
  };
  completion: {
    getActivitiesCompletionStatus: (data?: any) => Promise<any>;
    getCourseCompletionStatus: (data?: any) => Promise<any>;
    markCourseSelfCompleted: (data?: any) => Promise<any>;
    overrideActivityCompletionStatus: (data?: any) => Promise<any>;
    updateActivityCompletionStatusManually: (data?: any) => Promise<any>;
  };
  course: {
    checkUpdates: (data?: any) => Promise<any>;
    createCategories: (data?: any) => Promise<any>;
    createCourses: (data?: any) => Promise<any>;
    deleteCategories: (data?: any) => Promise<any>;
    deleteCourses: (data?: any) => Promise<any>;
    deleteModules: (data?: any) => Promise<any>;
    duplicateCourse: (data?: any) => Promise<any>;
    editModule: (data?: any) => Promise<any>;
    editSection: (data?: any) => Promise<any>;
    getActivitiesOverview: (data?: any) => Promise<any>;
    getCategories: (data?: any) => Promise<any>;
    getContents: (data?: any) => Promise<any>;
    getCourseModule: (data?: any) => Promise<any>;
    getCourseModuleByInstance: (data?: any) => Promise<any>;
    getCourses: (data?: any) => Promise<any>;
    getCoursesByField: (data?: any) => Promise<any>;
    getEnrolledCoursesByTimelineClassification: (data?: any) => Promise<any>;
    getEnrolledUsersByCmid: (data?: any) => Promise<any>;
    getModule: (data?: any) => Promise<any>;
    getRecentCourses: (data?: any) => Promise<any>;
    getUpdatesSince: (data?: any) => Promise<any>;
    getUserAdministrationOptions: (data?: any) => Promise<any>;
    getUserNavigationOptions: (data?: any) => Promise<any>;
    importCourse: (data?: any) => Promise<any>;
    searchCourses: (data?: any) => Promise<any>;
    setFavouriteCourses: (data?: any) => Promise<any>;
    updateCategories: (data?: any) => Promise<any>;
    updateCourses: (data?: any) => Promise<any>;
    viewCourse: (data?: any) => Promise<any>;
  };
  customfield: {
    createCategory: (data?: any) => Promise<any>;
    deleteCategory: (data?: any) => Promise<any>;
    deleteField: (data?: any) => Promise<any>;
    moveCategory: (data?: any) => Promise<any>;
    moveField: (data?: any) => Promise<any>;
    reloadTemplate: (data?: any) => Promise<any>;
  };
  enrol: {
    editUserEnrolment: (data?: any) => Promise<any>;
    getCourseEnrolmentMethods: (data?: any) => Promise<any>;
    getEnrolledUsers: (data?: any) => Promise<any>;
    getEnrolledUsersWithCapability: (data?: any) => Promise<any>;
    getPotentialUsers: (data?: any) => Promise<any>;
    getUsersCourses: (data?: any) => Promise<any>;
    searchUsers: (data?: any) => Promise<any>;
    submitUserEnrolmentForm: (data?: any) => Promise<any>;
    unenrolUserEnrolment: (data?: any) => Promise<any>;
  };
  fetch: {
    notifications: (data?: any) => Promise<any>;
  };
  files: {
    getFiles: (data?: any) => Promise<any>;
    upload: (data?: any) => Promise<any>;
  };
  filters: {
    getAvailableInContext: (data?: any) => Promise<any>;
  };
  form: {
    getFiletypesBrowserData: (data?: any) => Promise<any>;
  };
  get: {
    componentStrings: (data?: any) => Promise<any>;
    fragment: (data?: any) => Promise<any>;
    string: (data?: any) => Promise<any>;
    strings: (data?: any) => Promise<any>;
    userDates: (data?: any) => Promise<any>;
  };
  grade: {
    updateGrades: (data?: any) => Promise<any>;
  };
  grades: {
    getGrades: (data?: any) => Promise<any>;
    graderGradingpanelPointFetch: (data?: any) => Promise<any>;
    graderGradingpanelPointStore: (data?: any) => Promise<any>;
    graderGradingpanelScaleFetch: (data?: any) => Promise<any>;
    graderGradingpanelScaleStore: (data?: any) => Promise<any>;
  };
  grading: {
    getDefinitions: (data?: any) => Promise<any>;
    getGradingformInstances: (data?: any) => Promise<any>;
    saveDefinitions: (data?: any) => Promise<any>;
  };
  group: {
    addGroupMembers: (data?: any) => Promise<any>;
    assignGrouping: (data?: any) => Promise<any>;
    createGroupings: (data?: any) => Promise<any>;
    createGroups: (data?: any) => Promise<any>;
    deleteGroupMembers: (data?: any) => Promise<any>;
    deleteGroupings: (data?: any) => Promise<any>;
    deleteGroups: (data?: any) => Promise<any>;
    getActivityAllowedGroups: (data?: any) => Promise<any>;
    getActivityGroupmode: (data?: any) => Promise<any>;
    getCourseGroupings: (data?: any) => Promise<any>;
    getCourseGroups: (data?: any) => Promise<any>;
    getCourseUserGroups: (data?: any) => Promise<any>;
    getGroupMembers: (data?: any) => Promise<any>;
    getGroupings: (data?: any) => Promise<any>;
    getGroups: (data?: any) => Promise<any>;
    unassignGrouping: (data?: any) => Promise<any>;
    updateGroupings: (data?: any) => Promise<any>;
    updateGroups: (data?: any) => Promise<any>;
  };
  h5p: {
    getTrustedH5pFile: (data?: any) => Promise<any>;
  };
  message: {
    blockContacts: (data?: any) => Promise<any>;
    blockUser: (data?: any) => Promise<any>;
    confirmContactRequest: (data?: any) => Promise<any>;
    createContactRequest: (data?: any) => Promise<any>;
    createContacts: (data?: any) => Promise<any>;
    dataForMessageareaContacts: (data?: any) => Promise<any>;
    dataForMessageareaConversations: (data?: any) => Promise<any>;
    dataForMessageareaGetMostRecentMessage: (data?: any) => Promise<any>;
    dataForMessageareaGetProfile: (data?: any) => Promise<any>;
    dataForMessageareaMessages: (data?: any) => Promise<any>;
    dataForMessageareaSearchMessages: (data?: any) => Promise<any>;
    dataForMessageareaSearchUsers: (data?: any) => Promise<any>;
    dataForMessageareaSearchUsersInCourse: (data?: any) => Promise<any>;
    declineContactRequest: (data?: any) => Promise<any>;
    deleteContacts: (data?: any) => Promise<any>;
    deleteConversation: (data?: any) => Promise<any>;
    deleteConversationsById: (data?: any) => Promise<any>;
    deleteMessage: (data?: any) => Promise<any>;
    deleteMessageForAllUsers: (data?: any) => Promise<any>;
    getBlockedUsers: (data?: any) => Promise<any>;
    getContactRequests: (data?: any) => Promise<any>;
    getContacts: (data?: any) => Promise<any>;
    getConversation: (data?: any) => Promise<any>;
    getConversationBetweenUsers: (data?: any) => Promise<any>;
    getConversationCounts: (data?: any) => Promise<any>;
    getConversationMembers: (data?: any) => Promise<any>;
    getConversationMessages: (data?: any) => Promise<any>;
    getConversations: (data?: any) => Promise<any>;
    getMemberInfo: (data?: any) => Promise<any>;
    getMessageProcessor: (data?: any) => Promise<any>;
    getMessages: (data?: any) => Promise<any>;
    getReceivedContactRequestsCount: (data?: any) => Promise<any>;
    getSelfConversation: (data?: any) => Promise<any>;
    getUnreadConversationsCount: (data?: any) => Promise<any>;
    getUserContacts: (data?: any) => Promise<any>;
    getUserMessagePreferences: (data?: any) => Promise<any>;
    getUserNotificationPreferences: (data?: any) => Promise<any>;
    markAllConversationMessagesAsRead: (data?: any) => Promise<any>;
    markAllMessagesAsRead: (data?: any) => Promise<any>;
    markAllNotificationsAsRead: (data?: any) => Promise<any>;
    markMessageRead: (data?: any) => Promise<any>;
    markNotificationRead: (data?: any) => Promise<any>;
    messageProcessorConfigForm: (data?: any) => Promise<any>;
    messageSearchUsers: (data?: any) => Promise<any>;
    muteConversations: (data?: any) => Promise<any>;
    searchContacts: (data?: any) => Promise<any>;
    sendInstantMessages: (data?: any) => Promise<any>;
    sendMessagesToConversation: (data?: any) => Promise<any>;
    setFavouriteConversations: (data?: any) => Promise<any>;
    unblockContacts: (data?: any) => Promise<any>;
    unblockUser: (data?: any) => Promise<any>;
    unmuteConversations: (data?: any) => Promise<any>;
    unsetFavouriteConversations: (data?: any) => Promise<any>;
  };
  notes: {
    createNotes: (data?: any) => Promise<any>;
    deleteNotes: (data?: any) => Promise<any>;
    getCourseNotes: (data?: any) => Promise<any>;
    getNotes: (data?: any) => Promise<any>;
    updateNotes: (data?: any) => Promise<any>;
    viewNotes: (data?: any) => Promise<any>;
  };
  output: {
    loadFontawesomeIconMap: (data?: any) => Promise<any>;
    loadTemplate: (data?: any) => Promise<any>;
  };
  question: {
    getRandomQuestionSummaries: (data?: any) => Promise<any>;
    submitTagsForm: (data?: any) => Promise<any>;
    updateFlag: (data?: any) => Promise<any>;
  };
  rating: {
    addRating: (data?: any) => Promise<any>;
    getItemRatings: (data?: any) => Promise<any>;
  };
  role: {
    assignRoles: (data?: any) => Promise<any>;
    unassignRoles: (data?: any) => Promise<any>;
  };
  search: {
    getRelevantUsers: (data?: any) => Promise<any>;
  };
  session: {
    timeRemaining: (data?: any) => Promise<any>;
    touch: (data?: any) => Promise<any>;
  };
  tag: {
    getTagAreas: (data?: any) => Promise<any>;
    getTagCloud: (data?: any) => Promise<any>;
    getTagCollections: (data?: any) => Promise<any>;
    getTagindex: (data?: any) => Promise<any>;
    getTagindexPerArea: (data?: any) => Promise<any>;
    getTags: (data?: any) => Promise<any>;
    updateTags: (data?: any) => Promise<any>;
  };
  update: {
    inplaceEditable: (data?: any) => Promise<any>;
  };
  user: {
    addUserDevice: (data?: any) => Promise<any>;
    addUserPrivateFiles: (data?: any) => Promise<any>;
    agreeSitePolicy: (data?: any) => Promise<any>;
    createUsers: (data?: any) => Promise<any>;
    deleteUsers: (data?: any) => Promise<any>;
    getCourseUserProfiles: (data?: any) => Promise<any>;
    getPrivateFilesInfo: (data?: any) => Promise<any>;
    getUserPreferences: (data?: any) => Promise<any>;
    getUsers: (data?: any) => Promise<any>;
    getUsersByField: (data?: any) => Promise<any>;
    getUsersById: (data?: any) => Promise<any>;
    removeUserDevice: (data?: any) => Promise<any>;
    setUserPreferences: (data?: any) => Promise<any>;
    updatePicture: (data?: any) => Promise<any>;
    updateUserPreferences: (data?: any) => Promise<any>;
    updateUsers: (data?: any) => Promise<any>;
    viewUserList: (data?: any) => Promise<any>;
    viewUserProfile: (data?: any) => Promise<any>;
  };
  webservice: {
    getSiteInfo: (data?: any) => Promise<any>;
  };
}
