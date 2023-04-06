import IMoodleWSPayload from './IMoodleWSPayload';
import IMoodleWSDiscussionPostsResponse from './IMoodleWSDiscussionPostsResponse';
import IMoodleWSDiscussionsResponse from './IMoodleWSDiscussionsResponse';
import IMoodleForum from './IMoodleForum';
import IMoodleAttemptData from './IMoodleAttemptData';
import IMoodleQuizAccessInfo from './IMoodleQuizAccessInfo';
import IMoodleWSAttemptsResponse from './IMoodleWSAttemptsResponse';
import IMoodleWSStatusResponse from './IMoodleWSStatusResponse';
import IMoodleWSStartAttemptResponse from './IMoodleWSStartAttemptResponse';
import MoodleAttemptUpdate from '../classes/MoodleAttemptUpdate';
import NumericBoolean from '../types/NumericBoolean';
import IMoodleWSProcessAttemptResponse from './IMoodleWSProcessAttemptResponse';
import IMoodleAttemptReview from './IMoodleAttemptReview';

export default interface IMoodleWSMod {
  assign: {
    /** Copy a students previous attempt to a new attempt. */
    copyPreviousAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the courses and assignments for the users capability */
    getAssignments: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns grades from the assignment */
    getGrades: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a participant for an assignment, with some summary info about their submissions. */
    getParticipant: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns information about an assignment submission status for a given user. */
    getSubmissionStatus: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the submissions for assignments */
    getSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the user_flags for assignments */
    getUserFlags: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the user_mappings for assignments */
    getUserMappings: (payload: IMoodleWSPayload) => Promise<any>;
    /** List the participants for a single assignment, with some summary info about their submissions. */
    listParticipants: (payload: IMoodleWSPayload) => Promise<any>;
    /** Prevent students from making changes to a list of submissions */
    lockSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Reveal the identities for a blind marking assignment */
    revealIdentities: (payload: IMoodleWSPayload) => Promise<any>;
    /** Reverts the list of submissions to draft status */
    revertSubmissionsToDraft: (payload: IMoodleWSPayload) => Promise<any>;
    /** Save a grade update for a single student. */
    saveGrade: (payload: IMoodleWSPayload) => Promise<any>;
    /** Save grade updates for one or more students. */
    saveGrades: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the current students submission */
    saveSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    /** Save a list of assignment extensions */
    saveUserExtensions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Sets the specified user_flags for an assignment */
    setUserFlags: (payload: IMoodleWSPayload) => Promise<any>;
    /** Submit the current students assignment for grading */
    submitForGrading: (payload: IMoodleWSPayload) => Promise<any>;
    /** Submit the grading form data via ajax */
    submitGradingForm: (payload: IMoodleWSPayload) => Promise<any>;
    /** Allow students to make changes to a list of submissions */
    unlockSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the module completion status. */
    viewAssign: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the grading_table_viewed event. */
    viewGradingTable: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the submission status viewed event. */
    viewSubmissionStatus: (payload: IMoodleWSPayload) => Promise<any>;
  };
  book: {
    /** Returns a list of book instances in a provided set of courses. */
    getBooksByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewBook: (payload: IMoodleWSPayload) => Promise<any>;
  };
  chat: {
    /** Get the latest messages from the given chat sessio. */
    getChatLatestMessages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the list of users in the given chat session. */
    getChatUsers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of chat instances in a provided set of courses. */
    getChatsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves messages of the given chat session. */
    getSessionMessages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves chat sessions for a given chat. */
    getSessions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Log a user into a chat room in the given chat. */
    loginUser: (payload: IMoodleWSPayload) => Promise<any>;
    /** Send a message on the given chat session. */
    sendChatMessage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewChat: (payload: IMoodleWSPayload) => Promise<any>;
  };
  choice: {
    /** Delete the given submitted responses in a choice. */
    deleteChoiceResponses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve options for a specific choice. */
    getChoiceOptions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieve users results for a given choice. */
    getChoiceResults: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of choice instances in a provided set of courses. */
    getChoicesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Submit responses to a specific choice item. */
    submitChoiceResponse: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status.. */
    viewChoice: (payload: IMoodleWSPayload) => Promise<any>;
  };
  data: {
    /** Adds a new entry. */
    addEntry: (payload: IMoodleWSPayload) => Promise<any>;
    /** Approves or unapproves an entry. */
    approveEntry: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes an entry. */
    deleteEntry: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return access information for a given database. */
    getDataAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of database instances in a provided set of courses, if no courses are provided then all the database instances the user has access to will be returned. */
    getDatabasesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the complete list of entries of the given database. */
    getEntries: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return one entry record from the database, including contents optionally. */
    getEntry: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the list of configured fields for the given database. */
    getFields: (payload: IMoodleWSPayload) => Promise<any>;
    /** Search for entries in the given database. */
    searchEntries: (payload: IMoodleWSPayload) => Promise<any>;
    /** Updates an existing entry. */
    updateEntry: (payload: IMoodleWSPayload) => Promise<any>;
    /** Simulate the view.php web interface data: trigger events, completion, etc... */
    viewDatabase: (payload: IMoodleWSPayload) => Promise<any>;
  };
  feedback: {
    /** Retrieves the feedback analysis. */
    getAnalysis: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the temporary completion record for the current user. */
    getCurrentCompletedTmp: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return access information for a given feedback. */
    getFeedbackAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of feedbacks in a provided list of courses, if no list is provided all feedbacks that the user can view will be returned. */
    getFeedbacksByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves responses from the last finished attempt. */
    getFinishedResponses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the items (questions) in the given feedback. */
    getItems: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves the last completion record for the current user. */
    getLastCompleted: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves a list of students who didn\'t submit the feedback. */
    getNonRespondents: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a single feedback page items. */
    getPageItems: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the feedback user responses analysis. */
    getResponsesAnalysis: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves responses from the current unfinished attempt. */
    getUnfinishedResponses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Starts or continues a feedback submission. */
    launchFeedback: (payload: IMoodleWSPayload) => Promise<any>;
    /** Process a jump between pages. */
    processPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewFeedback: (payload: IMoodleWSPayload) => Promise<any>;
  };
  folder: {
    /** Returns a list of folders in a provided list of courses, if no list is provided all folders that the user can view will be returned. Please note that this WS is not returning the folder contents. */
    getFoldersByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewFolder: (payload: IMoodleWSPayload) => Promise<any>;
  };
  forum: {
    /** Add a new discussion into an existing forum. */
    addDiscussion: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create new posts into an existing discussion. */
    addDiscussionPost: (payload: IMoodleWSPayload) => Promise<any>;
    /** Check if the current user can add discussions in the given forum (and optionally for the given group). */
    canAddDiscussion: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes a post or a discussion completely when the post is the discussion topic. */
    deletePost: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a particular discussion post. */
    getDiscussionPost: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of forum posts for a discussion. */
    getDiscussionPosts: (params: {
      discussionid: number;
    }) => Promise<IMoodleWSDiscussionPostsResponse>;
    /** Returns a list of forum posts for a discussion for a user. */
    getDiscussionPostsByUserid: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return capabilities information for a given forum. */
    getForumAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of forum posts for a discussion. */
    getForumDiscussionPosts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of forum discussions optionally sorted and paginated. */
    getForumDiscussions: (params: {
      forumid: number;
    }) => Promise<IMoodleWSDiscussionsResponse>;
    /** Returns a list of forum discussions optionally sorted and paginated. */
    getForumDiscussionsPaginated: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of forum instances in a provided set of courses, if no courses are provided then all the forum instances the user has access to will be returned. */
    getForumsByCourses: (params?: {
      [k: string]: number | undefined;
      'courseids[]'?: number;
    }) => Promise<IMoodleForum[]>;
    /** Prepares a draft area for editing a post. */
    prepareDraftAreaForPost: (payload: IMoodleWSPayload) => Promise<any>;
    /** Set the lock state for the discussion */
    setLockState: (payload: IMoodleWSPayload) => Promise<any>;
    /** Set the pin state */
    setPinState: (payload: IMoodleWSPayload) => Promise<any>;
    /** Set the subscription state */
    setSubscriptionState: (payload: IMoodleWSPayload) => Promise<any>;
    /** Toggle the favourite state */
    toggleFavouriteState: (payload: IMoodleWSPayload) => Promise<any>;
    /** Updates a post or a discussion topic post. */
    updateDiscussionPost: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course_module_viewed event when a user view a forum (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). */
    viewForum: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the discussion_viewed event when a user view a forum discussion (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). */
    viewForumDiscussion: (payload: IMoodleWSPayload) => Promise<any>;
  };
  glossary: {
    /** Add a new entry to a given glossary */
    addEntry: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the authors in a glossary */
    getAuthors: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a glossary's categories */
    getCategories: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries using author filtering */
    getEntriesByAuthor: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries using author ID filtering */
    getEntriesByAuthorId: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries using category filtering */
    getEntriesByCategory: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries using date filtering */
    getEntriesByDate: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries using letter filtering */
    getEntriesByLetter: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries matching a search query */
    getEntriesBySearch: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries using term filtering */
    getEntriesByTerm: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get entries to be approved */
    getEntriesToApprove: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get an entry by ID */
    getEntryById: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get the glossaries in courses */
    getGlossariesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Notify that a glossary entry was viewed */
    viewEntry: (payload: IMoodleWSPayload) => Promise<any>;
    /** Notify that a glossary was viewed */
    viewGlossary: (payload: IMoodleWSPayload) => Promise<any>;
  };
  imscp: {
    /** Returns a list of imscp instances in a provided set of courses. */
    getImscpsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewImscp: (payload: IMoodleWSPayload) => Promise<any>;
  };
  label: {
    /** Returns a list of labels in a provided list of courses, if no list is provided all labels that the user can view will be returned. */
    getLabelsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
  };
  lesson: {
    /** Finishes the current attempt. */
    finishAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a list of all the attempts made by users in a lesson. */
    getAttemptsOverview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the list of content pages viewed by a user during a lesson attempt. */
    getContentPagesViewed: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return information of a given lesson. */
    getLesson: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return access information for a given lesson. */
    getLessonAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of lessons in a provided list of courses, if no list is provided all lessons that the user can view will be returned. */
    getLessonsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return information of a given page, including its contents. */
    getPageData: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the list of pages in a lesson (based on the user permissions). */
    getPages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return all the possible jumps for the pages in a given lesson. */
    getPagesPossibleJumps: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the list of questions attempts in a given lesson. */
    getQuestionsAttempts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return information about the given user attempt (including answers). */
    getUserAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return grade information in the attempt for a given user. */
    getUserAttemptGrade: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the final grade in the lesson for the given user. */
    getUserGrade: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the timers in the current lesson for the given user. */
    getUserTimers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Starts a new attempt or continues an existing one. */
    launchAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    /** Processes page responses. */
    processPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewLesson: (payload: IMoodleWSPayload) => Promise<any>;
  };
  lti: {
    /** Create a tool proxy */
    createToolProxy: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create a tool type */
    createToolType: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete a tool proxy */
    deleteToolProxy: (payload: IMoodleWSPayload) => Promise<any>;
    /** Delete a tool type */
    deleteToolType: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of lti instances in a provided set of courses. */
    getLtisByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the launch data for a given external tool. */
    getToolLaunchData: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a list of the tool proxies */
    getToolProxies: (payload: IMoodleWSPayload) => Promise<any>;
    /** Get a registration request for a tool proxy */
    getToolProxyRegistrationRequest: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Get a list of the tool types */
    getToolTypes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Determine if the given url is for a cartridge */
    isCartridge: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update a tool type */
    updateToolType: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewLti: (payload: IMoodleWSPayload) => Promise<any>;
  };
  page: {
    /** Returns a list of pages in a provided list of courses, if no list is provided all pages that the user can view will be returned. */
    getPagesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewPage: (payload: IMoodleWSPayload) => Promise<any>;
  };
  quiz: {
    /** Return access information for a given attempt in a quiz. */
    getAttemptAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns information for the given attempt page for a quiz attempt in progress. */
    getAttemptData: (params: {
      attemptid: number;
      page: number;
    }) => Promise<IMoodleAttemptData>;
    /** Returns review information for the given finished attempt, can be used by users or teachers. */
    getAttemptReview: (params: {
      attemptid: number;
    }) => Promise<IMoodleAttemptReview>;
    /** Returns a summary of a quiz attempt before it is submitted. */
    getAttemptSummary: (payload: IMoodleWSPayload) => Promise<any>;
    /** Combines the review options from a number of different quiz attempts. */
    getCombinedReviewOptions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return access information for a given quiz. */
    getQuizAccessInformation: (params: {
      quizid: number;
    }) => Promise<IMoodleQuizAccessInfo>;
    /** Get the feedback text that should be show to a student who got the given grade in the given quiz. */
    getQuizFeedbackForGrade: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the potential question types that would be required for a given quiz. */
    getQuizRequiredQtypes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of quizzes in a provided list of courses, if no list is provided all quizzes that the user can view will be returned. */
    getQuizzesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return a list of attempts for the given quiz and user. */
    getUserAttempts: (params: {
      quizid: number;
      userid?: number;
      status: 'finished' | 'unfinished' | 'all';
      includepreveiews?: boolean;
    }) => Promise<IMoodleWSAttemptsResponse>;
    /** Get the best current grade for the given user on a quiz. */
    getUserBestGrade: (payload: IMoodleWSPayload) => Promise<any>;
    /** Process responses during an attempt at a quiz and also deals with attempts finishing. */
    processAttempt: (params: {
      attemptid: number | string;
      finishattempt: NumericBoolean;
      timeup?: NumericBoolean;
      data?: MoodleAttemptUpdate;
    }) => Promise<IMoodleWSProcessAttemptResponse>;
    /** Processes save requests during the quiz. This function is intended for the quiz auto-save feature. */
    saveAttempt: (params: {
      attemptid: number;
      data: MoodleAttemptUpdate;
    }) => Promise<IMoodleWSStatusResponse>;
    /** Starts a new attempt at a quiz. */
    startAttempt: (params: {
      quizid: number;
    }) => Promise<IMoodleWSStartAttemptResponse>;
    /** Trigger the attempt viewed event. */
    viewAttempt: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the attempt reviewed event. */
    viewAttemptReview: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the attempt summary viewed event. */
    viewAttemptSummary: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewQuiz: (payload: IMoodleWSPayload) => Promise<any>;
  };
  resource: {
    /** Returns a list of files in a provided list of courses, if no list is provided all files that the user can view will be returned. */
    getResourcesByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewResource: (payload: IMoodleWSPayload) => Promise<any>;
  };
  scorm: {
    /** Return capabilities information for a given scorm. */
    getScormAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the number of attempts done by a user in the given SCORM. */
    getScormAttemptCount: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves SCO tracking data for the given user id and attempt number. */
    getScormScoTracks: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list containing all the scoes data related to the given scorm id. */
    getScormScoes: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves user tracking and SCO data and default SCORM values. */
    getScormUserData: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of scorm instances in a provided set of courses. */
    getScormsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Saves a scorm tracking record. */
    insertScormTracks: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the SCO launched event. */
    launchSco: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status.. */
    viewScorm: (payload: IMoodleWSPayload) => Promise<any>;
  };
  survey: {
    /** Get the complete list of questions for the survey, including subquestions. */
    getQuestions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of survey instances in a provided set of courses, if no courses are provided then all the survey instances the user has access to will be returned. */
    getSurveysByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Submit the answers for a given survey. */
    submitAnswers: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewSurvey: (payload: IMoodleWSPayload) => Promise<any>;
  };
  url: {
    /** Returns a list of urls in a provided list of courses, if no list is provided all urls that the user can view will be returned. */
    getUrlsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewUrl: (payload: IMoodleWSPayload) => Promise<any>;
  };
  wiki: {
    /** Save the contents of a page. */
    editPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the contents of a page. */
    getPageContents: (payload: IMoodleWSPayload) => Promise<any>;
    /** Locks and retrieves info of page-section to be edited. */
    getPageForEditing: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the list of files for a specific subwiki. */
    getSubwikiFiles: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the list of pages for a specific subwiki. */
    getSubwikiPages: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the list of subwikis the user can see in a specific wiki. */
    getSubwikis: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of wiki instances in a provided set of courses, if no courses are provided then all the wiki instances the user has access to will be returned. */
    getWikisByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Create a new page in a subwiki. */
    newPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the page viewed event and update the module completion status. */
    viewPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewWiki: (payload: IMoodleWSPayload) => Promise<any>;
  };
  workshop: {
    /** Add a new submission to a given workshop. */
    addSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    /** Deletes the given submission. */
    deleteSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    /** Evaluates an assessment (used by teachers for provide feedback to the reviewer). */
    evaluateAssessment: (payload: IMoodleWSPayload) => Promise<any>;
    /** Evaluates a submission (used by teachers for provide feedback or override the submission grade). */
    evaluateSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves the given assessment. */
    getAssessment: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves the assessment form definition. */
    getAssessmentFormDefinition: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns the assessment and submission grade for the given user. */
    getGrades: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves the assessment grades report. */
    getGradesReport: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves all the assessments reviewed by the given user. */
    getReviewerAssessments: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves the given submission. */
    getSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves all the assessments of the given submission. */
    getSubmissionAssessments: (payload: IMoodleWSPayload) => Promise<any>;
    /** Retrieves all the workshop submissions or the one done by the given user (except example submissions). */
    getSubmissions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return the planner information for the given user. */
    getUserPlan: (payload: IMoodleWSPayload) => Promise<any>;
    /** Return access information for a given workshop. */
    getWorkshopAccessInformation: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of workshops in a provided list of courses, if no list is provided all workshops that the user can view will be returned. */
    getWorkshopsByCourses: (payload: IMoodleWSPayload) => Promise<any>;
    /** Add information to an allocated assessment. */
    updateAssessment: (payload: IMoodleWSPayload) => Promise<any>;
    /** Update the given submission. */
    updateSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the submission viewed event. */
    viewSubmission: (payload: IMoodleWSPayload) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewWorkshop: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
