// Profile
export const ACTION_GET_CORPORATE_PROFILE_REQUEST = '@ACTION/GET/CORPORATE/PROFILE/REQUEST';
export const ACTION_PATCH_CORPORATE_PROFILE_REQUEST = '@ACTION/PATCH/CORPORATE/PROFILE/REQUEST';
export const ACTION_POST_PUBLISH_CORPORATE_PROFILE_REQUEST = '@ACTION/POST/PUBLISH/CORPORATE/PROFILE/REQUEST';
export const ACTION_GET_CORPORATE_PROFILE_RESPONSE = '@ACTION/POST/PUBLISH/CORPORATE/PROFILE/RESPONSE'

// CREATE JOB (HIRING CRITERIA, JOBS)
export const ACTION_GET_CORPORATE_HIRING_REQUEST = '@ACTION/GET/CORPORATE/HIRING/REQUEST';
export const ACTION_GET_CORPORATE_HIRING_RESPONSE = '@ACTION/GET/CORPORATE/HIRING/RESPONSE';
export const ACTION_POST_CORPORATE_HIRING_REQUEST = '@ACTION/POST/CORPORATE/HIRING/ADDHIRING/REQUEST';
export const ACTION_PATCH_CORPORATE_HIRING_REQUEST = '@ACTION/PATCH/CORPORATE/HIRING/ADDHIRING/REQUEST';
export const ACTION_CLONE_CORPORATE_HIRING_REQUEST = '@ACTION/CLONE/CORPORATE/HIRING-CRITERIA/REQUEST';
export const ACTION_GET_CORPORATE_JOBS_REQUEST = '@ACTION/GET/CORPORATE/JOBS/REQUEST';
export const ACTION_GET_CORPORATE_HIRING_BYID_REQUEST = '@ACTION/GET/CORPORATE/HIRING/BYID/REQUEST';
export const ACTION_GET_CORPORATE_JOBS_BYID_REQUEST = '@ACTION/GET/CORPORATE/JOBS/BYID/REQUEST';
// export const ACTION_GET_CORPORATE_JOBS_BYID_RESPONSE = '@ACTION/GET/CORPORATE/JOBS/BYID/RESPONSE';
export const ACTION_GET_CORPORATE_JOBS_RESPONSE = '@ACTION/GET/CORPORATE/JOBS/RESPONSE';
export const ACTION_POST_PUBLISH_CORPORATE_HIRING_REQUEST = '@ACTION/POST/PUBLISH/CORPORATE/HIRING/REQUEST';
export const ACTION_POST_CORPORATE_JOBS_REQUEST = '@ACTION/GET/CORPORATE/HIRING/ADDJOBS/REQUEST';
export const ACTION_POST_CORPORATE_UPDATEJOBS_REQUEST = '@ACTION/GET/CORPORATE/HIRING/UPDATEJOBS/REQUEST';
export const ACTION_POST_PUBLISH_CORPORATE_JOBS_REQUEST = '@ACTION/POST/PUBLISH/CORPORATE/JOBS/REQUEST';

// Other Information
export const ACTION_POST_ADD_OTHER_INFORMATION_REQUEST = '@ACTION/POST/ADD/OTHER-INFORMATION/REQUEST';
export const ACTION_POST_PUBLISH_OTHER_INFORMATION_REQUEST = '@ACTION/POST/PUBLISH/OTHER-INFORMATION/REQUEST';
export const ACTION_GET_PUBLISH_OTHER_INFORMATION_LIST_REQUEST = '@ACTION/GET/PUBLISH/OTHER-INFORMATION-LIST/REQUEST';
export const ACTION_GET_PUBLISH_OTHER_INFORMATION_BYID_REQUEST = '@ACTION/GET/PUBLISH/OTHER-INFORMATION-BYID/REQUEST';

// Publish history
export const ACTION_GET_PUBLISH_HISTORY_REQUEST = '@ACTION/GET/PUBLISH-HISTORY/REQUEST';
export const ACTION_GET_PUBLISH_HISTORY_ITEM_BY_ID_REQUEST = '@ACTION/GET/PUBLISH-HISTORY-ITEM-BY-ID/REQUEST';

// SUBSCRIPTION
export const ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST = '@ACTION/GET/CORPORATE/SUBSCRIPTION/SEARCH/REQUEST';
export const ACTION_GET_CORPORATE_SUBSCRIBESEARCH_REQUEST = '@ACTION/GET/CORPORATE/SUBSCRIPTION/UNIVERSITIES/REQUEST';
export const ACTION_GET_CORPORATE_SUBSCRIBE_UNIVERSITY_REQUEST = '@ACTION/GET/CORPORATE/SUBSCRIPTION/UNIVERSITY/INFO/REQUEST';
export const ACTION_GET_CORPORATE_SUBSCRIBE_TOKENS_REQUEST = '@ACTION/GET/CORPORATE/SUBSCRIPTION/TOKENS/REQUEST';
export const ACTION_GET_CORPORATE_HISTORY_UNIVERSITY_REQUEST = '@ACTION/GET/CORPORATE/HISTORY/UNIVERSITY/INFO/REQUEST';
export const ACTION_GET_CORPORATE_SUBSCRIBE_UNV_INFO_REQUEST = '@ACTION/GET/CORPORATE/SUBSCRIPTION/UNV/INFO/REQUEST';
export const ACTION_GET_CORPORATE_UNIVERSITY_SUBSCRIPTION_HISTORY_REQUEST = '@ACTION/GET/CORPORATE/UNIVERSITY-SUBSCRIPTION/HISTORY/REQUEST';
export const ACTION_POST_CORPORATE_SENDMAIL_TO_UNIVERSITY_REQUEST = '@ACTION/POST/CORPORATE/UNIVERSITY/SENDMAIL/REQUEST';
export const ACTION_POST_CORPORATE_STUDENT_SEARCH_REQUEST = '@ACTION/POST/CORPORATE/STUDENT/SEARCH/REQUEST';
export const ACTION_GET_CORPORATE_SINGLE_SUBSCRIPTION_REQUEST = '@ACTION/GET/CORPORATE/SINGLE/SUBSCRIPTION/REQUEST';

// TOKEN
export const ACTION_GET_CORPORATE_TOKENS_REQUEST = '@ACTION/GET/CORPORATE/TOKENS/REQUEST';
export const ACTION_GET_CORPORATE_TOKENS_RESPONSE = '@ACTION/GET/CORPORATE/TOKENS/RESPONSE';

// NOTIFICATIONS
export const ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST = '@ACTION/GET/CORPORATE/NOTIFICATIONS/REQUEST';
export const ACTION_GET_CORPORATE_SINGLE_NOTIFICATION_REQUEST = '@ACTION/GET/CORPORATE/SINGLE/NOTIFICATION/REQUEST';
export const ACTION_POST_CORPORATE_RESPOND_TO_CAMPUS_DRIVE_REQUEST = '@ACTION/POST/CORPORATE/RESPOND-TO-CAMPUS-DRIVE/REQUEST';

// ANALYTICS
export const ACTION_GET_ANALYTICS_BI_ACCESS_TOKEN_REQUEST = '@ACTION/GET/ANALYTICS-BI-ACCESS-TOKEN/REQUEST';

// Common
export const ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST = '@ACTION/GET/DEPENDENCY/LOOKUPS/REQUEST';
export const ACTION_GET_COUNTRY_CODES_REQUEST = '@ACTION/GET/COUNTRY/CODES/REQUEST';
export const ACTION_GET_UNIVERSAL_ACCESS_TOKEN = '@ACTION/GET/UNIVERSAL-ACCESS-TOKEN';
export const ACTION_SAVE_UNIVERSAL_ACCESS_TOKEN = '@ACTION/SAVE/UNIVERSAL-ACCESS-TOKEN';
export const ACTION_SAVE_COUNTRIES = '@ACTION/SAVE/COUNTRIES';
export const ACTION_GET_COUNTRIES_REQUEST = '@ACTION/GET/COUNTRIES/REQUEST';
export const ACTION_GET_STATES_BY_COUNTRY_NAME_REQUEST = '@ACTION/GET/STATES-BY-COUNTRY-NAME/REQUEST';
export const ACTION_GET_CITIES_BY_STATE_NAME_REQUEST = '@ACTION/GET/CITIES-BY-STATE-NAME/REQUEST';

// Support
export const ACTION_POST_CORPORATE_SUPPORT_REQUEST = '@ACTION/POST/CORPORATE/SUPPORT/REQUEST';

// Get profile states
export const ACTION_GET_CORPORATE_PROFILE_STATS_REQUEST = '@ACTION/GET/CORPORATE-PROFILE-STATS/REQUEST';

// Transaction History
export const ACTION_GET_TRANSACTION_HISTORY_REQUEST = '@ACTION/GET/TRANSACTION-HISTORY/REQUEST';

// Campus drive REQUESTS
export const ACTION_GET_CAMPUS_DRIVE_INVITES_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-INVITES/REQUEST';
export const ACTION_POST_RESPOND_TO_CAMPUS_DRIVE_REQUEST_REQUEST = '@ACTION/POST/RESPOND-TO-CAMPUS-DRIVE-REQUEST/REQUEST';

// Campus drive accepted invites list
export const ACTION_GET_CAMPUS_DRIVE_ACCEPTED_INVITES_LIST_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-ACCEPTED-INVITES-LIST/REQUEST';

// Campus Drive - Define Jobs
export const ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-DEFINE-JOBS-LIST/REQUEST';
export const ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-HIRING-CRITERIA-LIST/REQUEST';
export const ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST = '@ACTION/POST-OR-PATCH/CAMPUS-DRIVE-HIRING-CRITERIA/REQUEST';
export const ACTION_POST_OR_PATCH_CAMPUS_DRIVE_JOB_REQUEST = '@ACTION/POST-OR-PATCH/CAMPUS-DRIVE-JOB/REQUEST';
export const ACTION_DELETE_CAMPUS_DRIVE_JOB_REQUEST = '@ACTION/DELETE/CAMPUS-DRIVE-JOB/REQUEST';
export const ACTION_PUBLISH_CAMPUS_DRIVE_PUBLISH_JOBS_REQUEST = '@ACTION/PUBLISH/CAMPUS-DRIVE-PUBLISH/JOBS/REQUEST';
export const ACTION_GET_CAMPUS_DRIVE_STUDENTS_LIST_BY_JOB_ID_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-STUDENTS-LIST-BY-JOB-ID/REQUEST';

// Campus Drive - Communication Module
export const ACTION_GET_CAMPUS_DRIVE_EMAIL_TEMPLATES_LIST_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-EMAIL-TEMPLATES-LIST/REQUEST';
export const ACTION_POST_CAMPUS_DRIVE_NEW_EMAIL_TEMPLATE_REQUEST = '@ACTION/POST/CAMPUS-DRIVE-NEW-EMAIL-TEMPLATE/REQUEST';
export const ACTION_GET_CAMPUS_DRIVE_INDUCTION_INFO_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-INDUCTION-INFO/REQUEST';
export const ACTION_POST_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST = '@ACTION/POST/CAMPUS-DRIVE-INTERVIEW-ROUNDS/REQUEST';

// Campus Drive - Campus Interview Module
export const ACTION_GET_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-INTERVIEW-ROUNDS/REQUEST';
export const ACTION_GET_CAMPUS_DRIVE_INTERVIEW_STUDENTS_LIST_REQUEST = '@ACTION/GET/CAMPUS-DRIVE-INTERVIEW-STUDENTS-LIST/REQUEST';
