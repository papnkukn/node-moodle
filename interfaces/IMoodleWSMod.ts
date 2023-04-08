import IMoodleWSParams from './IMoodleWSParams';
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
import IMoodleAttemptAccessInfo from './IMoodleAttemptAccessInfo';
import IMoodleWSAttemptSummaryResponse from './IMoodleWSAttemptSummaryResponse';
import IMoodleQuizFeedback from './IMoodleQuizFeedback';
import IMoodleWSBestGradeResponse from './IMoodleWSBestGradeResponse';
import IMoodleWSQuizzesResponse from './IMoodleWSQuizzesResponse';
import IMoodleWSReviewOptionsResponse from './IMoodleWSReviewOptionsResponse';
import IMoodleWSQTypesResponse from './IMoodleWSQTypesResponse';

export default interface IMoodleWSMod {
  assign: {
    /** Copy a students previous attempt to a new attempt. */
    copyPreviousAttempt: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the courses and assignments for the users capability */
    getAssignments: (params: IMoodleWSParams) => Promise<any>;
    /** Returns grades from the assignment */
    getGrades: (params: IMoodleWSParams) => Promise<any>;
    /** Get a participant for an assignment, with some summary info about their submissions. */
    getParticipant: (params: IMoodleWSParams) => Promise<any>;
    /** Returns information about an assignment submission status for a given user. */
    getSubmissionStatus: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the submissions for assignments */
    getSubmissions: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the user_flags for assignments */
    getUserFlags: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the user_mappings for assignments */
    getUserMappings: (params: IMoodleWSParams) => Promise<any>;
    /** List the participants for a single assignment, with some summary info about their submissions. */
    listParticipants: (params: IMoodleWSParams) => Promise<any>;
    /** Prevent students from making changes to a list of submissions */
    lockSubmissions: (params: IMoodleWSParams) => Promise<any>;
    /** Reveal the identities for a blind marking assignment */
    revealIdentities: (params: IMoodleWSParams) => Promise<any>;
    /** Reverts the list of submissions to draft status */
    revertSubmissionsToDraft: (params: IMoodleWSParams) => Promise<any>;
    /** Save a grade update for a single student. */
    saveGrade: (params: IMoodleWSParams) => Promise<any>;
    /** Save grade updates for one or more students. */
    saveGrades: (params: IMoodleWSParams) => Promise<any>;
    /** Update the current students submission */
    saveSubmission: (params: IMoodleWSParams) => Promise<any>;
    /** Save a list of assignment extensions */
    saveUserExtensions: (params: IMoodleWSParams) => Promise<any>;
    /** Sets the specified user_flags for an assignment */
    setUserFlags: (params: IMoodleWSParams) => Promise<any>;
    /** Submit the current students assignment for grading */
    submitForGrading: (params: IMoodleWSParams) => Promise<any>;
    /** Submit the grading form data via ajax */
    submitGradingForm: (params: IMoodleWSParams) => Promise<any>;
    /** Allow students to make changes to a list of submissions */
    unlockSubmissions: (params: IMoodleWSParams) => Promise<any>;
    /** Update the module completion status. */
    viewAssign: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the grading_table_viewed event. */
    viewGradingTable: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the submission status viewed event. */
    viewSubmissionStatus: (params: IMoodleWSParams) => Promise<any>;
  };
  book: {
    /** Returns a list of book instances in a provided set of courses. */
    getBooksByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewBook: (params: IMoodleWSParams) => Promise<any>;
  };
  chat: {
    /** Get the latest messages from the given chat sessio. */
    getChatLatestMessages: (params: IMoodleWSParams) => Promise<any>;
    /** Get the list of users in the given chat session. */
    getChatUsers: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of chat instances in a provided set of courses. */
    getChatsByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves messages of the given chat session. */
    getSessionMessages: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves chat sessions for a given chat. */
    getSessions: (params: IMoodleWSParams) => Promise<any>;
    /** Log a user into a chat room in the given chat. */
    loginUser: (params: IMoodleWSParams) => Promise<any>;
    /** Send a message on the given chat session. */
    sendChatMessage: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewChat: (params: IMoodleWSParams) => Promise<any>;
  };
  choice: {
    /** Delete the given submitted responses in a choice. */
    deleteChoiceResponses: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve options for a specific choice. */
    getChoiceOptions: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieve users results for a given choice. */
    getChoiceResults: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of choice instances in a provided set of courses. */
    getChoicesByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Submit responses to a specific choice item. */
    submitChoiceResponse: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status.. */
    viewChoice: (params: IMoodleWSParams) => Promise<any>;
  };
  data: {
    /** Adds a new entry. */
    addEntry: (params: IMoodleWSParams) => Promise<any>;
    /** Approves or unapproves an entry. */
    approveEntry: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes an entry. */
    deleteEntry: (params: IMoodleWSParams) => Promise<any>;
    /** Return access information for a given database. */
    getDataAccessInformation: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of database instances in a provided set of courses, if no courses are provided then all the database instances the user has access to will be returned. */
    getDatabasesByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Return the complete list of entries of the given database. */
    getEntries: (params: IMoodleWSParams) => Promise<any>;
    /** Return one entry record from the database, including contents optionally. */
    getEntry: (params: IMoodleWSParams) => Promise<any>;
    /** Return the list of configured fields for the given database. */
    getFields: (params: IMoodleWSParams) => Promise<any>;
    /** Search for entries in the given database. */
    searchEntries: (params: IMoodleWSParams) => Promise<any>;
    /** Updates an existing entry. */
    updateEntry: (params: IMoodleWSParams) => Promise<any>;
    /** Simulate the view.php web interface data: trigger events, completion, etc... */
    viewDatabase: (params: IMoodleWSParams) => Promise<any>;
  };
  feedback: {
    /** Retrieves the feedback analysis. */
    getAnalysis: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the temporary completion record for the current user. */
    getCurrentCompletedTmp: (params: IMoodleWSParams) => Promise<any>;
    /** Return access information for a given feedback. */
    getFeedbackAccessInformation: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of feedbacks in a provided list of courses, if no list is provided all feedbacks that the user can view will be returned. */
    getFeedbacksByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves responses from the last finished attempt. */
    getFinishedResponses: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the items (questions) in the given feedback. */
    getItems: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves the last completion record for the current user. */
    getLastCompleted: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves a list of students who didn\'t submit the feedback. */
    getNonRespondents: (params: IMoodleWSParams) => Promise<any>;
    /** Get a single feedback page items. */
    getPageItems: (params: IMoodleWSParams) => Promise<any>;
    /** Return the feedback user responses analysis. */
    getResponsesAnalysis: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves responses from the current unfinished attempt. */
    getUnfinishedResponses: (params: IMoodleWSParams) => Promise<any>;
    /** Starts or continues a feedback submission. */
    launchFeedback: (params: IMoodleWSParams) => Promise<any>;
    /** Process a jump between pages. */
    processPage: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewFeedback: (params: IMoodleWSParams) => Promise<any>;
  };
  folder: {
    /** Returns a list of folders in a provided list of courses, if no list is provided all folders that the user can view will be returned. Please note that this WS is not returning the folder contents. */
    getFoldersByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewFolder: (params: IMoodleWSParams) => Promise<any>;
  };
  forum: {
    /** Add a new discussion into an existing forum. */
    addDiscussion: (params: IMoodleWSParams) => Promise<any>;
    /** Create new posts into an existing discussion. */
    addDiscussionPost: (params: IMoodleWSParams) => Promise<any>;
    /** Check if the current user can add discussions in the given forum (and optionally for the given group). */
    canAddDiscussion: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes a post or a discussion completely when the post is the discussion topic. */
    deletePost: (params: IMoodleWSParams) => Promise<any>;
    /** Get a particular discussion post. */
    getDiscussionPost: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of forum posts for a discussion. */
    getDiscussionPosts: (params: {
      discussionid: number;
    }) => Promise<IMoodleWSDiscussionPostsResponse>;
    /** Returns a list of forum posts for a discussion for a user. */
    getDiscussionPostsByUserid: (params: IMoodleWSParams) => Promise<any>;
    /** Return capabilities information for a given forum. */
    getForumAccessInformation: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of forum posts for a discussion. */
    getForumDiscussionPosts: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of forum discussions optionally sorted and paginated. */
    getForumDiscussions: (params: {
      forumid: number;
      page?: number;
    }) => Promise<IMoodleWSDiscussionsResponse>;
    /** Returns a list of forum discussions optionally sorted and paginated. */
    getForumDiscussionsPaginated: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of forum instances in a provided set of courses, if no courses are provided then all the forum instances the user has access to will be returned. */
    getForumsByCourses: (params?: {
      [k: string]: number | undefined;
      'courseids[]'?: number;
    }) => Promise<IMoodleForum[]>;
    /** Prepares a draft area for editing a post. */
    prepareDraftAreaForPost: (params: IMoodleWSParams) => Promise<any>;
    /** Set the lock state for the discussion */
    setLockState: (params: IMoodleWSParams) => Promise<any>;
    /** Set the pin state */
    setPinState: (params: IMoodleWSParams) => Promise<any>;
    /** Set the subscription state */
    setSubscriptionState: (params: IMoodleWSParams) => Promise<any>;
    /** Toggle the favourite state */
    toggleFavouriteState: (params: IMoodleWSParams) => Promise<any>;
    /** Updates a post or a discussion topic post. */
    updateDiscussionPost: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course_module_viewed event when a user view a forum (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). */
    viewForum: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the discussion_viewed event when a user view a forum discussion (this web service will be initially used by the mobile app so information can be logged in the Moodle side when a user see the same page in the app). */
    viewForumDiscussion: (params: IMoodleWSParams) => Promise<any>;
  };
  glossary: {
    /** Add a new entry to a given glossary */
    addEntry: (params: IMoodleWSParams) => Promise<any>;
    /** Get the authors in a glossary */
    getAuthors: (params: IMoodleWSParams) => Promise<any>;
    /** Get a glossary's categories */
    getCategories: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries using author filtering */
    getEntriesByAuthor: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries using author ID filtering */
    getEntriesByAuthorId: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries using category filtering */
    getEntriesByCategory: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries using date filtering */
    getEntriesByDate: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries using letter filtering */
    getEntriesByLetter: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries matching a search query */
    getEntriesBySearch: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries using term filtering */
    getEntriesByTerm: (params: IMoodleWSParams) => Promise<any>;
    /** Get entries to be approved */
    getEntriesToApprove: (params: IMoodleWSParams) => Promise<any>;
    /** Get an entry by ID */
    getEntryById: (params: IMoodleWSParams) => Promise<any>;
    /** Get the glossaries in courses */
    getGlossariesByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Notify that a glossary entry was viewed */
    viewEntry: (params: IMoodleWSParams) => Promise<any>;
    /** Notify that a glossary was viewed */
    viewGlossary: (params: IMoodleWSParams) => Promise<any>;
  };
  imscp: {
    /** Returns a list of imscp instances in a provided set of courses. */
    getImscpsByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewImscp: (params: IMoodleWSParams) => Promise<any>;
  };
  label: {
    /** Returns a list of labels in a provided list of courses, if no list is provided all labels that the user can view will be returned. */
    getLabelsByCourses: (params: IMoodleWSParams) => Promise<any>;
  };
  lesson: {
    /** Finishes the current attempt. */
    finishAttempt: (params: IMoodleWSParams) => Promise<any>;
    /** Get a list of all the attempts made by users in a lesson. */
    getAttemptsOverview: (params: IMoodleWSParams) => Promise<any>;
    /** Return the list of content pages viewed by a user during a lesson attempt. */
    getContentPagesViewed: (params: IMoodleWSParams) => Promise<any>;
    /** Return information of a given lesson. */
    getLesson: (params: IMoodleWSParams) => Promise<any>;
    /** Return access information for a given lesson. */
    getLessonAccessInformation: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of lessons in a provided list of courses, if no list is provided all lessons that the user can view will be returned. */
    getLessonsByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Return information of a given page, including its contents. */
    getPageData: (params: IMoodleWSParams) => Promise<any>;
    /** Return the list of pages in a lesson (based on the user permissions). */
    getPages: (params: IMoodleWSParams) => Promise<any>;
    /** Return all the possible jumps for the pages in a given lesson. */
    getPagesPossibleJumps: (params: IMoodleWSParams) => Promise<any>;
    /** Return the list of questions attempts in a given lesson. */
    getQuestionsAttempts: (params: IMoodleWSParams) => Promise<any>;
    /** Return information about the given user attempt (including answers). */
    getUserAttempt: (params: IMoodleWSParams) => Promise<any>;
    /** Return grade information in the attempt for a given user. */
    getUserAttemptGrade: (params: IMoodleWSParams) => Promise<any>;
    /** Return the final grade in the lesson for the given user. */
    getUserGrade: (params: IMoodleWSParams) => Promise<any>;
    /** Return the timers in the current lesson for the given user. */
    getUserTimers: (params: IMoodleWSParams) => Promise<any>;
    /** Starts a new attempt or continues an existing one. */
    launchAttempt: (params: IMoodleWSParams) => Promise<any>;
    /** Processes page responses. */
    processPage: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewLesson: (params: IMoodleWSParams) => Promise<any>;
  };
  lti: {
    /** Create a tool proxy */
    createToolProxy: (params: IMoodleWSParams) => Promise<any>;
    /** Create a tool type */
    createToolType: (params: IMoodleWSParams) => Promise<any>;
    /** Delete a tool proxy */
    deleteToolProxy: (params: IMoodleWSParams) => Promise<any>;
    /** Delete a tool type */
    deleteToolType: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of lti instances in a provided set of courses. */
    getLtisByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Return the launch data for a given external tool. */
    getToolLaunchData: (params: IMoodleWSParams) => Promise<any>;
    /** Get a list of the tool proxies */
    getToolProxies: (params: IMoodleWSParams) => Promise<any>;
    /** Get a registration request for a tool proxy */
    getToolProxyRegistrationRequest: (params: IMoodleWSParams) => Promise<any>;
    /** Get a list of the tool types */
    getToolTypes: (params: IMoodleWSParams) => Promise<any>;
    /** Determine if the given url is for a cartridge */
    isCartridge: (params: IMoodleWSParams) => Promise<any>;
    /** Update a tool type */
    updateToolType: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewLti: (params: IMoodleWSParams) => Promise<any>;
  };
  page: {
    /** Returns a list of pages in a provided list of courses, if no list is provided all pages that the user can view will be returned. */
    getPagesByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewPage: (params: IMoodleWSParams) => Promise<any>;
  };
  quiz: {
    /** Return access information for a given attempt in a quiz. */
    getAttemptAccessInformation: (params: {
      quizid: number;
    }) => Promise<IMoodleAttemptAccessInfo>;
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
    getAttemptSummary: (params: {
      attemptid: number;
    }) => Promise<IMoodleWSAttemptSummaryResponse>;
    /** Combines the review options from a number of different quiz attempts. */
    getCombinedReviewOptions: (params: {
      quizid: number;
    }) => Promise<IMoodleWSReviewOptionsResponse>;
    /** Return access information for a given quiz. */
    getQuizAccessInformation: (params: {
      quizid: number;
    }) => Promise<IMoodleQuizAccessInfo>;
    /** Get the feedback text that should be show to a student who got the given grade in the given quiz. */
    getQuizFeedbackForGrade: (params: {
      quizid: number;
      grade: number;
    }) => Promise<IMoodleQuizFeedback>;
    /** Return the potential question types that would be required for a given quiz. */
    getQuizRequiredQtypes: (params: {
      quizid: number;
    }) => Promise<IMoodleWSQTypesResponse>;
    /** Returns a list of quizzes in a provided list of courses, if no list is provided all quizzes that the user can view will be returned. */
    getQuizzesByCourses: (params: {
      courseids: number[];
    }) => Promise<IMoodleWSQuizzesResponse>;
    /** Return a list of attempts for the given quiz and user. */
    getUserAttempts: (params: {
      quizid: number;
      userid?: number;
      status: 'finished' | 'unfinished' | 'all';
      includepreveiews?: boolean;
    }) => Promise<IMoodleWSAttemptsResponse>;
    /** Get the best current grade for the given user on a quiz. */
    getUserBestGrade: (params: {
      quizid: number;
      userid: number;
    }) => Promise<IMoodleWSBestGradeResponse>;
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
    viewAttempt: (params: {
      attemptid: number;
      page: number;
    }) => Promise<IMoodleWSStatusResponse>;
    /** Trigger the attempt reviewed event. */
    viewAttemptReview: (params: {
      attemptid: number;
    }) => Promise<IMoodleWSStatusResponse>;
    /** Trigger the attempt summary viewed event. */
    viewAttemptSummary: (params: {
      attemptid: number;
    }) => Promise<IMoodleWSStatusResponse>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewQuiz: (params: { quizid: number }) => Promise<IMoodleWSStatusResponse>;
  };
  resource: {
    /** Returns a list of files in a provided list of courses, if no list is provided all files that the user can view will be returned. */
    getResourcesByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewResource: (params: {
      resourceid: number;
    }) => Promise<IMoodleWSStatusResponse>;
  };
  scorm: {
    /** Return capabilities information for a given scorm. */
    getScormAccessInformation: (params: IMoodleWSParams) => Promise<any>;
    /** Return the number of attempts done by a user in the given SCORM. */
    getScormAttemptCount: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves SCO tracking data for the given user id and attempt number. */
    getScormScoTracks: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list containing all the scoes data related to the given scorm id. */
    getScormScoes: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves user tracking and SCO data and default SCORM values. */
    getScormUserData: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of scorm instances in a provided set of courses. */
    getScormsByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Saves a scorm tracking record. */
    insertScormTracks: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the SCO launched event. */
    launchSco: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status.. */
    viewScorm: (params: IMoodleWSParams) => Promise<any>;
  };
  survey: {
    /** Get the complete list of questions for the survey, including subquestions. */
    getQuestions: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of survey instances in a provided set of courses, if no courses are provided then all the survey instances the user has access to will be returned. */
    getSurveysByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Submit the answers for a given survey. */
    submitAnswers: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewSurvey: (params: IMoodleWSParams) => Promise<any>;
  };
  url: {
    /** Returns a list of urls in a provided list of courses, if no list is provided all urls that the user can view will be returned. */
    getUrlsByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewUrl: (params: { urlid: number }) => Promise<IMoodleWSStatusResponse>;
  };
  wiki: {
    /** Save the contents of a page. */
    editPage: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the contents of a page. */
    getPageContents: (params: IMoodleWSParams) => Promise<any>;
    /** Locks and retrieves info of page-section to be edited. */
    getPageForEditing: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the list of files for a specific subwiki. */
    getSubwikiFiles: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the list of pages for a specific subwiki. */
    getSubwikiPages: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the list of subwikis the user can see in a specific wiki. */
    getSubwikis: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of wiki instances in a provided set of courses, if no courses are provided then all the wiki instances the user has access to will be returned. */
    getWikisByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Create a new page in a subwiki. */
    newPage: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the page viewed event and update the module completion status. */
    viewPage: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewWiki: (params: IMoodleWSParams) => Promise<any>;
  };
  workshop: {
    /** Add a new submission to a given workshop. */
    addSubmission: (params: IMoodleWSParams) => Promise<any>;
    /** Deletes the given submission. */
    deleteSubmission: (params: IMoodleWSParams) => Promise<any>;
    /** Evaluates an assessment (used by teachers for provide feedback to the reviewer). */
    evaluateAssessment: (params: IMoodleWSParams) => Promise<any>;
    /** Evaluates a submission (used by teachers for provide feedback or override the submission grade). */
    evaluateSubmission: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves the given assessment. */
    getAssessment: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves the assessment form definition. */
    getAssessmentFormDefinition: (params: IMoodleWSParams) => Promise<any>;
    /** Returns the assessment and submission grade for the given user. */
    getGrades: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves the assessment grades report. */
    getGradesReport: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves all the assessments reviewed by the given user. */
    getReviewerAssessments: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves the given submission. */
    getSubmission: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves all the assessments of the given submission. */
    getSubmissionAssessments: (params: IMoodleWSParams) => Promise<any>;
    /** Retrieves all the workshop submissions or the one done by the given user (except example submissions). */
    getSubmissions: (params: IMoodleWSParams) => Promise<any>;
    /** Return the planner information for the given user. */
    getUserPlan: (params: IMoodleWSParams) => Promise<any>;
    /** Return access information for a given workshop. */
    getWorkshopAccessInformation: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of workshops in a provided list of courses, if no list is provided all workshops that the user can view will be returned. */
    getWorkshopsByCourses: (params: IMoodleWSParams) => Promise<any>;
    /** Add information to an allocated assessment. */
    updateAssessment: (params: IMoodleWSParams) => Promise<any>;
    /** Update the given submission. */
    updateSubmission: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the submission viewed event. */
    viewSubmission: (params: IMoodleWSParams) => Promise<any>;
    /** Trigger the course module viewed event and update the module completion status. */
    viewWorkshop: (params: IMoodleWSParams) => Promise<any>;
  };
}
