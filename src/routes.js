import React from 'react';
const Login = React.lazy(() => import('./Pages/Forms/Corporate/Login'));
const Register = React.lazy(() => import('./Pages/Forms/Corporate/Register/Register'));
const CorporateSecondary = React.lazy(() => import('./Pages/Forms/Corporate/Register/CorporateSecondary'));
const ContactPersonnel = React.lazy(() => import('./Pages/Forms/Corporate/Register/ContactPersonnel'));
const Authentication = React.lazy(() => import('./Pages/Forms/Corporate/Register/Authentication'));
const RegistrationCompleted = React.lazy(() => import('./Pages/Forms/Corporate/Register/RegistrationCompleted'));
const CorporatePayment = React.lazy(() => import('./Pages/Forms/Corporate/Register/CorporatePayment'));
const Payment = React.lazy(() => import('./Pages/Forms/Payment/'));
const StudentRegister = React.lazy(() => import('./Pages/Forms/Student/StudentRegister'));
const StudentSecondary = React.lazy(() => import('./Pages/Forms/Student/StudentSecondary'));
const StudentAuthentication = React.lazy(() => import('./Pages/Forms/Student/StudentAuthentication'));
const StudentRegCompleted = React.lazy(() => import('./Pages/Forms/Student/StudentRegCompleted'));
const StudentPayment = React.lazy(() => import('./Pages/Forms/Student/StudentPayment'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./Pages/Dashboard/Profile/Profile'));
// const Profile = React.lazy(() => import('./Pages/Profile/Profile'));
const HiringCriteria = React.lazy(() => import('./Pages/Dashboard/CreateJob/HiringCriteria/index'));
const Jobs = React.lazy(() => import('./Pages/Dashboard/CreateJob/Jobs/Jobs'));
<<<<<<< HEAD
const PublishProfile = React.lazy(() => import('./Pages/Dashboard/Publish/PublishProfile'));
const PublishOtherInformation = React.lazy(() => import('./Pages/Dashboard/Publish/OtherInformation/PublishOtherInformation'));
=======
const SubscriptionHistory = React.lazy(() => import('./Pages/Dashboard/Subscribe/SubscriptionHistory/SubscriptionHistory'));
const NewUniversity = React.lazy(() => import('./Pages/Dashboard/Subscribe/NewUniversity/NewUniversity'));
const Notifications = React.lazy(() => import('./Pages/Dashboard/Notifications/Notifications'));
const Support = React.lazy(() => import('./Pages/Dashboard/Support/Support'));

>>>>>>> 0662e29e037f1d6b31a95ef0f693e15f9bd7cd29

const routes = [
    { path: "/", strict: true, exact: true, role: "corporate", name: 'Login', component: Login },
    { path: "/register", strict: true, exact: true, role: "corporateReg", name: 'Register', component: Register },
    { path: "/register/CorporateSecondary", strict: true, exact: true, role: "corporateReg", name: 'CorporateSecondary', component: CorporateSecondary },
    { path: "/register/contactPersonnel", strict: true, exact: true, role: "corporateReg", name: 'ContactPersonnel', component: ContactPersonnel },
    { path: "/register/authentication", strict: true, exact: true, role: "corporateReg", name: 'Authentication', component: Authentication },
    { path: "/register/completed", strict: true, exact: true, role: "corporateReg", name: 'RegistrationCompleted', component: RegistrationCompleted },
    { path: "/register/payment", strict: true, exact: true, role: "corporateReg", name: 'CorporatePayment', component: CorporatePayment },
    { path: "/payment", strict: true, exact: true, role: "corporateReg", name: 'Payment', component: Payment },
    { path: "/register/studentRegister", strict: true, exact: true, role: "corporateReg", name: 'StudentRegister', component: StudentRegister },
    { path: "/register/studentSecondary", strict: true, exact: true, role: "corporateReg", name: 'StudentSecondary', component: StudentSecondary },
    { path: "/register/studentAuthentication", strict: true, exact: true, role: "corporateReg", name: 'StudentAuthentication', component: StudentAuthentication },
    { path: "/register/studentRegisterCompleted", strict: true, exact: true, role: "corporateReg", name: 'StudentRegCompleted', component: StudentRegCompleted },
    { path: "/register/studentPayment", strict: true, exact: true, role: "corporateReg", name: 'StudentPayment', component: StudentPayment },
    // DASHBOARD
    { path: "/dashboard", strict: true, exact: true, role: "dashboard", name: 'Dashboard', component: Dashboard },
    { path: "/dashboard/profile/", strict: true, exact: true, role: "dashboard", name: 'Profile', component: Profile },
    { path: "/dashboard/createjob/hiring", strict: true, exact: true, role: "dashboard", name: 'HiringCriteria', component: HiringCriteria },
    { path: "/dashboard/createjob/jobs", strict: true, exact: true, role: "dashboard", name: 'Jobs', component: Jobs },
    { path: "/dashboard/publish/profile", strict: true, exact: true, role: "dashboard", name: 'Publish Profile', component: PublishProfile },
    { path: "/dashboard/publish/otherinformation", strict: true, exact: true, role: "dashboard", name: 'Publish Other Information', component: PublishOtherInformation },
    { path: "/dashboard/subscribe/newuniversity", strict: true, exact: true, role: "dashboard", name: 'NewUniversity', component: NewUniversity },
    { path: "/dashboard/subscribe/subscriptionhistory", strict: true, exact: true, role: "dashboard", name: 'SubscriptionHistory', component: SubscriptionHistory },
    { path: "/dashboard/notifications", strict: true, exact: true, role: "dashboard", name: 'Notifications', component: Notifications },
    { path: "/dashboard/support", strict: true, exact: true, role: "dashboard", name: 'Support', component: Support },

];

export default routes;