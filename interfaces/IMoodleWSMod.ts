import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSMod {
  assign: {
    copyPreviousAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    getAssignments: (payload: IMoodleWSPayload) => Promise<any>;
    getGrades: (payload: IMoodleWSPayload) => Promise<any>;
    getParticipant: (payload: IMoodleWSPayload) => Promise<any>;
    getSubmissionStatus: (payload: IMoodleWSPayload) => Promise<any>;
    getSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    getUserFlags: (payload: IMoodleWSPayload) => Promise<any>;
    getUserMappings: (payload: IMoodleWSPayload) => Promise<any>;
    listParticipants: (payload: IMoodleWSPayload) => Promise<any>;
    lockSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    revealIdentities: (payload: IMoodleWSPayload) => Promise<any>;
    revertSubmissionsToDraft: (payload: IMoodleWSPayload) => Promise<any>;
    saveGrade: (payload: IMoodleWSPayload) => Promise<any>;
    saveGrades: (payload: IMoodleWSPayload) => Promise<any>;
    saveSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    saveUserExtensions: (payload: IMoodleWSPayload) => Promise<any>;
    setUserFlags: (payload: IMoodleWSPayload) => Promise<any>;
    submitForGrading: (payload: IMoodleWSPayload) => Promise<any>;
    submitGradingForm: (payload: IMoodleWSPayload) => Promise<any>;
    unlockSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    viewAssign: (payload: IMoodleWSPayload) => Promise<any>;
    viewGradingTable: (payload: IMoodleWSPayload) => Promise<any>;
    viewSubmissionStatus: (payload: IMoodleWSPayload) => Promise<any>;
  };
  book: {
    getBooksByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewBook: (payload: IMoodleWSPayload) => Promise<any>;
  };
  chat: {
    getChatLatestMessages: (payload: IMoodleWSPayload) => Promise<any>;
    getChatUsers: (payload: IMoodleWSPayload) => Promise<any>;
    getChatsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getSessionMessages: (payload: IMoodleWSPayload) => Promise<any>;
    getSessions: (payload: IMoodleWSPayload) => Promise<any>;
    loginUser: (payload: IMoodleWSPayload) => Promise<any>;
    sendChatMessage: (payload: IMoodleWSPayload) => Promise<any>;
    viewChat: (payload: IMoodleWSPayload) => Promise<any>;
  };
  choice: {
    deleteChoiceResponses: (payload: IMoodleWSPayload) => Promise<any>;
    getChoiceOptions: (payload: IMoodleWSPayload) => Promise<any>;
    getChoiceResults: (payload: IMoodleWSPayload) => Promise<any>;
    getChoicesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    submitChoiceResponse: (payload: IMoodleWSPayload) => Promise<any>;
    viewChoice: (payload: IMoodleWSPayload) => Promise<any>;
  };
  data: {
    addEntry: (payload: IMoodleWSPayload) => Promise<any>;
    approveEntry: (payload: IMoodleWSPayload) => Promise<any>;
    deleteEntry: (payload: IMoodleWSPayload) => Promise<any>;
    getDataAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getDatabasesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getEntries: (payload: IMoodleWSPayload) => Promise<any>;
    getEntry: (payload: IMoodleWSPayload) => Promise<any>;
    getFields: (payload: IMoodleWSPayload) => Promise<any>;
    searchEntries: (payload: IMoodleWSPayload) => Promise<any>;
    updateEntry: (payload: IMoodleWSPayload) => Promise<any>;
    viewDatabase: (payload: IMoodleWSPayload) => Promise<any>;
  };
  feedback: {
    getAnalysis: (payload: IMoodleWSPayload) => Promise<any>;
    getCurrentCompletedTmp: (payload: IMoodleWSPayload) => Promise<any>;
    getFeedbackAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getFeedbacksByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getFinishedResponses: (payload: IMoodleWSPayload) => Promise<any>;
    getItems: (payload: IMoodleWSPayload) => Promise<any>;
    getLastCompleted: (payload: IMoodleWSPayload) => Promise<any>;
    getNonRespondents: (payload: IMoodleWSPayload) => Promise<any>;
    getPageItems: (payload: IMoodleWSPayload) => Promise<any>;
    getResponsesAnalysis: (payload: IMoodleWSPayload) => Promise<any>;
    getUnfinishedResponses: (payload: IMoodleWSPayload) => Promise<any>;
    launchFeedback: (payload: IMoodleWSPayload) => Promise<any>;
    processPage: (payload: IMoodleWSPayload) => Promise<any>;
    viewFeedback: (payload: IMoodleWSPayload) => Promise<any>;
  };
  folder: {
    getFoldersByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewFolder: (payload: IMoodleWSPayload) => Promise<any>;
  };
  forum: {
    addDiscussion: (payload: IMoodleWSPayload) => Promise<any>;
    addDiscussionPost: (payload: IMoodleWSPayload) => Promise<any>;
    canAddDiscussion: (payload: IMoodleWSPayload) => Promise<any>;
    deletePost: (payload: IMoodleWSPayload) => Promise<any>;
    getDiscussionPost: (payload: IMoodleWSPayload) => Promise<any>;
    getDiscussionPosts: (payload: IMoodleWSPayload) => Promise<any>;
    getDiscussionPostsByUserid: (payload: IMoodleWSPayload) => Promise<any>;
    getForumAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getForumDiscussionPosts: (payload: IMoodleWSPayload) => Promise<any>;
    getForumDiscussions: (payload: IMoodleWSPayload) => Promise<any>;
    getForumDiscussionsPaginated: (payload: IMoodleWSPayload) => Promise<any>;
    getForumsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    prepareDraftAreaForPost: (payload: IMoodleWSPayload) => Promise<any>;
    setLockState: (payload: IMoodleWSPayload) => Promise<any>;
    setPinState: (payload: IMoodleWSPayload) => Promise<any>;
    setSubscriptionState: (payload: IMoodleWSPayload) => Promise<any>;
    toggleFavouriteState: (payload: IMoodleWSPayload) => Promise<any>;
    updateDiscussionPost: (payload: IMoodleWSPayload) => Promise<any>;
    viewForum: (payload: IMoodleWSPayload) => Promise<any>;
    viewForumDiscussion: (payload: IMoodleWSPayload) => Promise<any>;
  };
  glossary: {
    addEntry: (payload: IMoodleWSPayload) => Promise<any>;
    getAuthors: (payload: IMoodleWSPayload) => Promise<any>;
    getCategories: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesByAuthor: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesByAuthorId: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesByCategory: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesByDate: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesByLetter: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesBySearch: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesByTerm: (payload: IMoodleWSPayload) => Promise<any>;
    getEntriesToApprove: (payload: IMoodleWSPayload) => Promise<any>;
    getEntryById: (payload: IMoodleWSPayload) => Promise<any>;
    getGlossariesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewEntry: (payload: IMoodleWSPayload) => Promise<any>;
    viewGlossary: (payload: IMoodleWSPayload) => Promise<any>;
  };
  imscp: {
    getImscpsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewImscp: (payload: IMoodleWSPayload) => Promise<any>;
  };
  label: {
    getLabelsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
  };
  lesson: {
    finishAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    getAttemptsOverview: (payload: IMoodleWSPayload) => Promise<any>;
    getContentPagesViewed: (payload: IMoodleWSPayload) => Promise<any>;
    getLesson: (payload: IMoodleWSPayload) => Promise<any>;
    getLessonAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getLessonsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getPageData: (payload: IMoodleWSPayload) => Promise<any>;
    getPages: (payload: IMoodleWSPayload) => Promise<any>;
    getPagesPossibleJumps: (payload: IMoodleWSPayload) => Promise<any>;
    getQuestionsAttempts: (payload: IMoodleWSPayload) => Promise<any>;
    getUserAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    getUserAttemptGrade: (payload: IMoodleWSPayload) => Promise<any>;
    getUserGrade: (payload: IMoodleWSPayload) => Promise<any>;
    getUserTimers: (payload: IMoodleWSPayload) => Promise<any>;
    launchAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    processPage: (payload: IMoodleWSPayload) => Promise<any>;
    viewLesson: (payload: IMoodleWSPayload) => Promise<any>;
  };
  lti: {
    createToolProxy: (payload: IMoodleWSPayload) => Promise<any>;
    createToolType: (payload: IMoodleWSPayload) => Promise<any>;
    deleteToolProxy: (payload: IMoodleWSPayload) => Promise<any>;
    deleteToolType: (payload: IMoodleWSPayload) => Promise<any>;
    getLtisByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getToolLaunchData: (payload: IMoodleWSPayload) => Promise<any>;
    getToolProxies: (payload: IMoodleWSPayload) => Promise<any>;
    getToolProxyRegistrationRequest: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    getToolTypes: (payload: IMoodleWSPayload) => Promise<any>;
    isCartridge: (payload: IMoodleWSPayload) => Promise<any>;
    updateToolType: (payload: IMoodleWSPayload) => Promise<any>;
    viewLti: (payload: IMoodleWSPayload) => Promise<any>;
  };
  page: {
    getPagesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewPage: (payload: IMoodleWSPayload) => Promise<any>;
  };
  quiz: {
    getAttemptAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getAttemptData: (payload: IMoodleWSPayload) => Promise<any>;
    getAttemptReview: (payload: IMoodleWSPayload) => Promise<any>;
    getAttemptSummary: (payload: IMoodleWSPayload) => Promise<any>;
    getCombinedReviewOptions: (payload: IMoodleWSPayload) => Promise<any>;
    getQuizAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getQuizFeedbackForGrade: (payload: IMoodleWSPayload) => Promise<any>;
    getQuizRequiredQtypes: (payload: IMoodleWSPayload) => Promise<any>;
    getQuizzesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    getUserAttempts: (payload: IMoodleWSPayload) => Promise<any>;
    getUserBestGrade: (payload: IMoodleWSPayload) => Promise<any>;
    processAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    saveAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    startAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    viewAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    viewAttemptReview: (payload: IMoodleWSPayload) => Promise<any>;
    viewAttemptSummary: (payload: IMoodleWSPayload) => Promise<any>;
    viewQuiz: (payload: IMoodleWSPayload) => Promise<any>;
  };
  resource: {
    getResourcesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewResource: (payload: IMoodleWSPayload) => Promise<any>;
  };
  scorm: {
    getScormAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getScormAttemptCount: (payload: IMoodleWSPayload) => Promise<any>;
    getScormScoTracks: (payload: IMoodleWSPayload) => Promise<any>;
    getScormScoes: (payload: IMoodleWSPayload) => Promise<any>;
    getScormUserData: (payload: IMoodleWSPayload) => Promise<any>;
    getScormsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    insertScormTracks: (payload: IMoodleWSPayload) => Promise<any>;
    launchSco: (payload: IMoodleWSPayload) => Promise<any>;
    viewScorm: (payload: IMoodleWSPayload) => Promise<any>;
  };
  survey: {
    getQuestions: (payload: IMoodleWSPayload) => Promise<any>;
    getSurveysByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    submitAnswers: (payload: IMoodleWSPayload) => Promise<any>;
    viewSurvey: (payload: IMoodleWSPayload) => Promise<any>;
  };
  url: {
    getUrlsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    viewUrl: (payload: IMoodleWSPayload) => Promise<any>;
  };
  wiki: {
    editPage: (payload: IMoodleWSPayload) => Promise<any>;
    getPageContents: (payload: IMoodleWSPayload) => Promise<any>;
    getPageForEditing: (payload: IMoodleWSPayload) => Promise<any>;
    getSubwikiFiles: (payload: IMoodleWSPayload) => Promise<any>;
    getSubwikiPages: (payload: IMoodleWSPayload) => Promise<any>;
    getSubwikis: (payload: IMoodleWSPayload) => Promise<any>;
    getWikisByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    newPage: (payload: IMoodleWSPayload) => Promise<any>;
    viewPage: (payload: IMoodleWSPayload) => Promise<any>;
    viewWiki: (payload: IMoodleWSPayload) => Promise<any>;
  };
  workshop: {
    addSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    deleteSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    evaluateAssessment: (payload: IMoodleWSPayload) => Promise<any>;
    evaluateSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    getAssessment: (payload: IMoodleWSPayload) => Promise<any>;
    getAssessmentFormDefinition: (payload: IMoodleWSPayload) => Promise<any>;
    getGrades: (payload: IMoodleWSPayload) => Promise<any>;
    getGradesReport: (payload: IMoodleWSPayload) => Promise<any>;
    getReviewerAssessments: (payload: IMoodleWSPayload) => Promise<any>;
    getSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    getSubmissionAssessments: (payload: IMoodleWSPayload) => Promise<any>;
    getSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    getUserPlan: (payload: IMoodleWSPayload) => Promise<any>;
    getWorkshopAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    getWorkshopsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    updateAssessment: (payload: IMoodleWSPayload) => Promise<any>;
    updateSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    viewSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    viewWorkshop: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
