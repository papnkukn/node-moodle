import IMoodleWSParams from './IMoodleWSParams';

export default interface IMoodleWSTool {
  analytics: {
    /** Retrieve the list of potential contexts for a model. */
    potentialContexts: (params: IMoodleWSParams) => Promise<any>;
  };
  lp: {
    /** Load the data for the competencies manage page template */
    dataForCompetenciesManagePage: (params: IMoodleWSParams) => Promise<any>;
    /** Load the data for the competency frameworks manage page template */
    dataForCompetencyFrameworksManagePage: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Load competency data for summary template. */
    dataForCompetencySummary: (params: IMoodleWSParams) => Promise<any>;
    /** Load the data for the course competencies page template. */
    dataForCourseCompetenciesPage: (params: IMoodleWSParams) => Promise<any>;
    /** Load the data for the plan page template. */
    dataForPlanPage: (params: IMoodleWSParams) => Promise<any>;
    /** Load the data for the plans page template */
    dataForPlansPage: (params: IMoodleWSParams) => Promise<any>;
    /** Load the data for the related competencies template. */
    dataForRelatedCompetenciesSection: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Load the data for the template competencies page template. */
    dataForTemplateCompetenciesPage: (params: IMoodleWSParams) => Promise<any>;
    /** Load the data for the learning plan templates manage page template */
    dataForTemplatesManagePage: (params: IMoodleWSParams) => Promise<any>;
    /** Load a summary of a user competency. */
    dataForUserCompetencySummary: (params: IMoodleWSParams) => Promise<any>;
    /** Load a summary of a user competency. */
    dataForUserCompetencySummaryInCourse: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Load a summary of a user competency. */
    dataForUserCompetencySummaryInPlan: (
      params: IMoodleWSParams
    ) => Promise<any>;
    /** Load the data for the user evidence list page template */
    dataForUserEvidenceListPage: (params: IMoodleWSParams) => Promise<any>;
    /** Load the data for the user evidence page template */
    dataForUserEvidencePage: (params: IMoodleWSParams) => Promise<any>;
    /** List the courses using a competency */
    listCoursesUsingCompetency: (params: IMoodleWSParams) => Promise<any>;
    /** Search for cohorts. */
    searchCohorts: (params: IMoodleWSParams) => Promise<any>;
    /** Search for users. */
    searchUsers: (params: IMoodleWSParams) => Promise<any>;
  };
  mobile: {
    /** Call multiple external functions and return all responses. */
    callExternalFunctions: (params: IMoodleWSParams) => Promise<any>;
    /** Creates an auto-login key for the current user. Is created only in https sites and is restricted by time and ip address. */
    getAutologinKey: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of the site configurations, filtering by section. */
    getConfig: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a piece of content to be displayed in the Mobile app. */
    getContent: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of Moodle plugins supporting the mobile app. */
    getPluginsSupportingMobile: (params: IMoodleWSParams) => Promise<any>;
    /** Returns a list of the site public settings, those not requiring authentication. */
    getPublicConfig: (params: IMoodleWSParams) => Promise<any>;
  };
  templatelibrary: {
    /** List/search templates by component. */
    listTemplates: (params: IMoodleWSParams) => Promise<any>;
    /** Load a canonical template by name (not the theme overidden one). */
    loadCanonicalTemplate: (params: IMoodleWSParams) => Promise<any>;
  };
  usertours: {
    /** Mark the specified tour as completed for the current user */
    completeTour: (params: IMoodleWSParams) => Promise<any>;
    /** Fetch the specified tour */
    fetchAndStartTour: (params: IMoodleWSParams) => Promise<any>;
    /** Remove the specified tour */
    resetTour: (params: IMoodleWSParams) => Promise<any>;
    /** Mark the specified step as completed for the current user */
    stepShown: (params: IMoodleWSParams) => Promise<any>;
  };
  xmldb: {
    /** moves element up/down */
    invokeMoveAction: (params: IMoodleWSParams) => Promise<any>;
  };
}
