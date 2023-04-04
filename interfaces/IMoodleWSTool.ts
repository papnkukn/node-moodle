export interface IMoodleWSTool {
  analytics: {
    potentialContexts: (data?: any) => Promise<any>;
  };
  lp: {
    dataForCompetenciesManagePage: (data?: any) => Promise<any>;
    dataForCompetencyFrameworksManagePage: (data?: any) => Promise<any>;
    dataForCompetencySummary: (data?: any) => Promise<any>;
    dataForCourseCompetenciesPage: (data?: any) => Promise<any>;
    dataForPlanPage: (data?: any) => Promise<any>;
    dataForPlansPage: (data?: any) => Promise<any>;
    dataForRelatedCompetenciesSection: (data?: any) => Promise<any>;
    dataForTemplateCompetenciesPage: (data?: any) => Promise<any>;
    dataForTemplatesManagePage: (data?: any) => Promise<any>;
    dataForUserCompetencySummary: (data?: any) => Promise<any>;
    dataForUserCompetencySummaryInCourse: (data?: any) => Promise<any>;
    dataForUserCompetencySummaryInPlan: (data?: any) => Promise<any>;
    dataForUserEvidenceListPage: (data?: any) => Promise<any>;
    dataForUserEvidencePage: (data?: any) => Promise<any>;
    listCoursesUsingCompetency: (data?: any) => Promise<any>;
    searchCohorts: (data?: any) => Promise<any>;
    searchUsers: (data?: any) => Promise<any>;
  };
  mobile: {
    callExternalFunctions: (data?: any) => Promise<any>;
    getAutologinKey: (data?: any) => Promise<any>;
    getConfig: (data?: any) => Promise<any>;
    getContent: (data?: any) => Promise<any>;
    getPluginsSupportingMobile: (data?: any) => Promise<any>;
    getPublicConfig: (data?: any) => Promise<any>;
  };
  templatelibrary: {
    listTemplates: (data?: any) => Promise<any>;
    loadCanonicalTemplate: (data?: any) => Promise<any>;
  };
  usertours: {
    completeTour: (data?: any) => Promise<any>;
    fetchAndStartTour: (data?: any) => Promise<any>;
    resetTour: (data?: any) => Promise<any>;
    stepShown: (data?: any) => Promise<any>;
  };
  xmldb: {
    invokeMoveAction: (data?: any) => Promise<any>;
  };
}
