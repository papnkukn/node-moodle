import IMoodleWSPayload from './IMoodleWSPayload';

export default interface IMoodleWSTool {
  analytics: {
    potentialContexts: (payload: IMoodleWSPayload) => Promise<any>;
  };
  lp: {
    dataForCompetenciesManagePage: (payload: IMoodleWSPayload) => Promise<any>;
    dataForCompetencyFrameworksManagePage: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForCompetencySummary: (payload: IMoodleWSPayload) => Promise<any>;
    dataForCourseCompetenciesPage: (payload: IMoodleWSPayload) => Promise<any>;
    dataForPlanPage: (payload: IMoodleWSPayload) => Promise<any>;
    dataForPlansPage: (payload: IMoodleWSPayload) => Promise<any>;
    dataForRelatedCompetenciesSection: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForTemplateCompetenciesPage: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForTemplatesManagePage: (payload: IMoodleWSPayload) => Promise<any>;
    dataForUserCompetencySummary: (payload: IMoodleWSPayload) => Promise<any>;
    dataForUserCompetencySummaryInCourse: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForUserCompetencySummaryInPlan: (
      payload: IMoodleWSPayload
    ) => Promise<any>;
    dataForUserEvidenceListPage: (payload: IMoodleWSPayload) => Promise<any>;
    dataForUserEvidencePage: (payload: IMoodleWSPayload) => Promise<any>;
    listCoursesUsingCompetency: (payload: IMoodleWSPayload) => Promise<any>;
    searchCohorts: (payload: IMoodleWSPayload) => Promise<any>;
    searchUsers: (payload: IMoodleWSPayload) => Promise<any>;
  };
  mobile: {
    callExternalFunctions: (payload: IMoodleWSPayload) => Promise<any>;
    getAutologinKey: (payload: IMoodleWSPayload) => Promise<any>;
    getConfig: (payload: IMoodleWSPayload) => Promise<any>;
    getContent: (payload: IMoodleWSPayload) => Promise<any>;
    getPluginsSupportingMobile: (payload: IMoodleWSPayload) => Promise<any>;
    getPublicConfig: (payload: IMoodleWSPayload) => Promise<any>;
  };
  templatelibrary: {
    listTemplates: (payload: IMoodleWSPayload) => Promise<any>;
    loadCanonicalTemplate: (payload: IMoodleWSPayload) => Promise<any>;
  };
  usertours: {
    completeTour: (payload: IMoodleWSPayload) => Promise<any>;
    fetchAndStartTour: (payload: IMoodleWSPayload) => Promise<any>;
    resetTour: (payload: IMoodleWSPayload) => Promise<any>;
    stepShown: (payload: IMoodleWSPayload) => Promise<any>;
  };
  xmldb: {
    invokeMoveAction: (payload: IMoodleWSPayload) => Promise<any>;
  };
}
