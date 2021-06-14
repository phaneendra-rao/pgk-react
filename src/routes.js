import React from "react";
const Login = React.lazy(() => import("./Pages/Forms/Corporate/Login"));
const Register = React.lazy(() =>
  import("./Pages/Forms/Corporate/Register/Register")
);
const CorporateSecondary = React.lazy(() =>
  import("./Pages/Forms/Corporate/Register/CorporateSecondary")
);
const ContactPersonnel = React.lazy(() =>
  import("./Pages/Forms/Corporate/Register/ContactPersonnel")
);
const Authentication = React.lazy(() =>
  import("./Pages/Forms/Corporate/Register/Authentication")
);
const RegistrationCompleted = React.lazy(() =>
  import("./Pages/Forms/Corporate/Register/RegistrationCompleted")
);
const CorporatePayment = React.lazy(() =>
  import("./Pages/Forms/Corporate/Register/CorporatePayment")
);
const Payment = React.lazy(() => import("./Pages/Forms/Payment/"));
const StudentRegister = React.lazy(() =>
  import("./Pages/Forms/Student/StudentRegister")
);
const StudentSecondary = React.lazy(() =>
  import("./Pages/Forms/Student/StudentSecondary")
);
const StudentAuthentication = React.lazy(() =>
  import("./Pages/Forms/Student/StudentAuthentication")
);
const StudentRegCompleted = React.lazy(() =>
  import("./Pages/Forms/Student/StudentRegCompleted")
);
const StudentPayment = React.lazy(() =>
  import("./Pages/Forms/Student/StudentPayment")
);
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const Profile = React.lazy(() => import("./Pages/Dashboard/Profile/Profile"));
// const Profile = React.lazy(() => import('./Pages/Profile/Profile'));
const HiringCriteria = React.lazy(() =>
  import("./Pages/Dashboard/CreateJob/HiringCriteria/index")
);
const Jobs = React.lazy(() => import("./Pages/Dashboard/CreateJob/Jobs/Jobs"));
const PublishProfile = React.lazy(() =>
  import("./Pages/Dashboard/Publish/PublishProfile")
);
const PublishOtherInformation = React.lazy(() =>
  import("./Pages/Dashboard/Publish/OtherInformation/PublishOtherInformation")
);
const PublishHiringCriteria = React.lazy(() =>
  import("./Pages/Dashboard/Publish/HiringCriteria/PublishHiringCriteria")
);
const PublishJobs = React.lazy(() =>
  import("./Pages/Dashboard/Publish/Jobs/PublishJobs")
);
const PublishHistory = React.lazy(() =>
  import("./Pages/Dashboard/Publish/PublishHistory/PublishHistory")
);
const SubscriptionHistory = React.lazy(() =>
  import("./Pages/Dashboard/Subscribe/SubscriptionHistory/SubscriptionHistory")
);
const NewUniversity = React.lazy(() =>
  import("./Pages/Dashboard/Subscribe/NewUniversity/NewUniversity")
);
const University = React.lazy(() =>
  import("./Pages/Dashboard/Subscribe/University/University")
);
const Notifications = React.lazy(() =>
  import("./Pages/Dashboard/Notifications/Notifications")
);
const Analytics = React.lazy(()=> import("./Pages/Dashboard/Analytics/Analytics"));
const CampusDrive = React.lazy(()=>import("./Pages/Dashboard/CampusDrive/CampusDrive"));
const TransactionHistory = React.lazy(()=> import("./Pages/Dashboard/TransactionHistory/TransactionHistory"));
const Support = React.lazy(() => import("./Pages/Dashboard/Support/Support"));
const UniversityStudents = React.lazy(() => import("./Pages/Dashboard/Subscribe/University/UniversityStudents/UniversityStudents"));
// C2 Hire Lazy Comps
const C2HireHome = React.lazy(() => import("./Pages/C2Hire/Common/Home"));
const PrivacyPolicy = React.lazy(() => import("./Pages/C2Hire/UserGuides/PrivacyPolicy"));
const RefundPolicy = React.lazy(() => import("./Pages/C2Hire/UserGuides/RefundPolicy"));
const TermsAndConditions = React.lazy(() => import("./Pages/C2Hire/UserGuides/TermsAndConditions"));
const OurTeam = React.lazy(() => import("./Pages/C2Hire/Members/OurTeam"));
const Mentors = React.lazy(() => import("./Pages/C2Hire/Members/Mentors"));
const Advisors = React.lazy(() => import("./Pages/C2Hire/Members/Advisors"));
const Partners = React.lazy(() => import("./Pages/C2Hire/Members/Partners"));
const ContactUs = React.lazy(() => import("./Pages/C2Hire/Misc/ContactUs"));
const FAQs = React.lazy(() => import("./Pages/C2Hire/Misc/FAQs"));
const WhyC2Hire = React.lazy(() => import("./Pages/C2Hire/Misc/WhyC2Hire"));


const routes = [
  {
    path: "/",
    strict: true,
    exact: true,
    role: "corporate",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "Register",
    component: Register,
  },
  {
    path: "/register/CorporateSecondary",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "CorporateSecondary",
    component: CorporateSecondary,
  },
  {
    path: "/register/contactPersonnel",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "ContactPersonnel",
    component: ContactPersonnel,
  },
  {
    path: "/register/authentication",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "Authentication",
    component: Authentication,
  },
  {
    path: "/register/completed",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "RegistrationCompleted",
    component: RegistrationCompleted,
  },
  {
    path: "/register/payment",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "CorporatePayment",
    component: CorporatePayment,
  },
  {
    path: "/payment",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/register/studentRegister",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "StudentRegister",
    component: StudentRegister,
  },
  {
    path: "/register/studentSecondary",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "StudentSecondary",
    component: StudentSecondary,
  },
  {
    path: "/register/studentAuthentication",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "StudentAuthentication",
    component: StudentAuthentication,
  },
  {
    path: "/register/studentRegisterCompleted",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "StudentRegCompleted",
    component: StudentRegCompleted,
  },
  {
    path: "/register/studentPayment",
    strict: true,
    exact: true,
    role: "corporateReg",
    name: "StudentPayment",
    component: StudentPayment,
  },
  // DASHBOARD
  {
    path: "/dashboard",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/profile/",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/dashboard/createjob/hiring",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "HiringCriteria",
    component: HiringCriteria,
  },
  {
    path: "/dashboard/createjob/jobs",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/dashboard/publish/profile",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Publish Profile",
    component: PublishProfile,
  },
  {
    path: "/dashboard/publish/otherinformation",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Publish Other Information",
    component: PublishOtherInformation,
  },
  {
    path: "/dashboard/publish/hiring-criteria",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Publish Hiring Criteria",
    component: PublishHiringCriteria,
  },
  {
    path: "/dashboard/publish/jobs",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Publish Jobs",
    component: PublishJobs,
  },
  {
    path: "/dashboard/publish-history",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Publish History",
    component: PublishHistory,
  },
  {
    path: "/dashboard/subscribe/newuniversity",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "NewUniversity",
    component: NewUniversity,
  },
  {
    path: "/dashboard/subscribe/newuniversity/:id",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "University",
    component: University,
  },
  {
    path: "/dashboard/subscribe/students/:id",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "University",
    component: UniversityStudents,
  },
  {
    path: "/dashboard/subscribe/subscriptionhistory",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "SubscriptionHistory",
    component: SubscriptionHistory,
  },
  {
    path: "/dashboard/notifications",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/dashboard/campus-drive",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "CampusDrive",
    component: CampusDrive,
  },
  {
    path: "/dashboard/analytics",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Analytics",
    component: Analytics,
  },
  {
    path: "/dashboard/transactionhistory",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Transaction History",
    component: TransactionHistory,
  },
  {
    path: "/dashboard/support",
    strict: true,
    exact: true,
    role: "dashboard",
    name: "Support",
    component: Support,
  },
// ];

// export const c2hireRoutes = [
 // C2hire routes start from here
 {
  path: "/c2hire",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Home",
  component: C2HireHome,
},

{
  path: "/c2hire/userguide/privacypolicy",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Privacy Policy",
  component: PrivacyPolicy,
},
{
  path: "/c2hire/userguide/refundpolicy",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Refund Policy",
  component: RefundPolicy,
},
{
  path: "/c2hire/userguide/termsandconditions",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Terms and Conditions",
  component: TermsAndConditions,
},
{
  path: "/c2hire/members/ourteam",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Our Team",
  component: OurTeam,
},
{
  path: "/c2hire/members/mentors",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Mentors",
  component: Mentors,
},
{
  path: "/c2hire/members/advisors",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Advisors",
  component: Advisors,
},
{
  path: "/c2hire/members/partners",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Partners",
  component: Partners,
},
{
  path: "/c2hire/contactus",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Contact Us",
  component: ContactUs,
},
{
  path: "/c2hire/faqs",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire FAQs",
  component: FAQs,
},
{
  path: "/c2hire/whyc2hire",
  strict: true,
  exact: true,
  role: "dashboard",
  name: "C2Hire Why C2Hire",
  component: WhyC2Hire,
},

];

export default routes;
