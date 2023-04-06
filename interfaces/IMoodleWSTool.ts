import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSTool {
  analytics: {
    /** Retrieve the list of potential contexts for a model. */
    potentialContexts: (payload: IMoodleWSPayload) => Promise<any>;
  };
  lp: {
    /** Load the data for the competencies manage page template */
    dataForCompetenciesManagePage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load the data for the competency frameworks manage page template */
    dataForCompetencyFrameworksManagePage: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Load competency data for summary template. */
    dataForCompetencySummary: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load the data for the course competencies page template. */
    dataForCourseCompetenciesPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load the data for the plan page template. */
    dataForPlanPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load the data for the plans page template */
    dataForPlansPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load the data for the related competencies template. */
    dataForRelatedCompetenciesSection: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Load the data for the template competencies page template. */
    dataForTemplateCompetenciesPage: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Load the data for the learning plan templates manage page template */
    dataForTemplatesManagePage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load a summary of a user competency. */
    dataForUserCompetencySummary: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load a summary of a user competency. */
    dataForUserCompetencySummaryInCourse: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Load a summary of a user competency. */
    dataForUserCompetencySummaryInPlan: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    /** Load the data for the user evidence list page template */
    dataForUserEvidenceListPage: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load the data for the user evidence page template */
    dataForUserEvidencePage: (payload: IMoodleWSPayload) => Promise<any>;
    /** List the courses using a competency */
    listCoursesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    /** Search for cohorts. */
    searchCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    /** Search for users. */
    searchUsers: (payload: IMoodleWSPayload) => Promise<any>;
  };
  mobile: {
    /** Call multiple external functions and return all responses. */
    callExternalFunctions: (payload: IMoodleWSPayload) => Promise<any>;
    /** Creates an auto-login key for the current user. Is created only in https sites and is restricted by time and ip address. */
    getAutologinKey: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of the site configurations, filtering by section. */
    getConfig: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a piece of content to be displayed in the Mobile app. */
    getContent: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of Moodle plugins supporting the mobile app. */
    getPluginsSupportingMobile: (payload: IMoodleWSPayload) => Promise<any>;
    /** Returns a list of the site public settings, those not requiring authentication. */
    getPublicConfig: (payload: IMoodleWSPayload) => Promise<any>;
  };
  templatelibrary: {
    /** List/search templates by component. */
    listTemplates: (payload: IMoodleWSPayload) => Promise<any>;
    /** Load a canonical template by name (not the theme overidden one). */
    loadCanonicalTemplate: (payload: IMoodleWSPayload) => Promise<any>;
  };
  usertours: {
    /** Mark the specified tour as completed for the current user */
    completeTour: (payload: IMoodleWSPayload) => Promise<any>;
    /** Fetch the specified tour */
    fetchAndStartTour: (payload: IMoodleWSPayload) => Promise<any>;
    /** Remove the specified tour */
    resetTour: (payload: IMoodleWSPayload) => Promise<any>;
    /** Mark the specified step as completed for the current user */
    stepShown: (payload: IMoodleWSPayload) => Promise<any>;
  };
  xmldb: {
    /** moves element up/down */
    invokeMoveAction: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
