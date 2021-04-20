import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardLayout from './Components/Layout/DashboardLayout';
import Layout from './Components/Layout/Layout';
import RegisterLayout from './Components/Layout/RegisterLayout';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <ErrorBoundary> */}
      <Switch>
        {/* <Route path="/404" exact name="404" render={props => <PageNotFound {...props} />} />
        <Route path="/login" strict={true} name="Login" render={props => <Login {...props} />} /> */}
        <Route path="/dashboard" strict={true} name="DashboardLayout" render={props => <DashboardLayout {...props}/>} />
        <Route path="/register" strict={true} name="RegisterLayout" render={props => <RegisterLayout {...props} />} />
        <Route path="/" strict={true} name="home" render={props => <Layout {...props} />} />
        <Redirect to="/404" from="*" />
      </Switch>
      {/* </ErrorBoundary> */}
    </Suspense>
  );
}

export default App;
