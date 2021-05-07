// Redux Saga: Root Saga
import { all } from 'redux-saga/effects';
import LoginWatcherSaga from './LoginWatcherSaga';
import CorporateProfileWatcherSaga from './CorporateProfileWatcherSaga';
import CommonWatcherSaga from './CommonWatcherSaga';
import HiringWatcherSaga from './HiringWatcherSaga';
import JobsWatcherSaga from './JobsWatcherSaga';
import OtherInformationWatcherSaga from './OtherInformationWatcherSaga';
import SubscriptionWatcherSaga from './SubscriptionWatcherSaga';
import DashboardWatcherSaga from './DashboardWatcherSaga';
import NotificationsWatcherSaga from './NotificationsWatcherSaga';
import PublishHistoryWatcherSaga from './PublishHistoryWatcherSaga';
import SupportWatcherSaga from './SupportWatcherSaga';

export function* webportalAppRootSaga() {
	yield all([
		LoginWatcherSaga(),
		CorporateProfileWatcherSaga(),
		CommonWatcherSaga(),
		HiringWatcherSaga(),
		JobsWatcherSaga(),
		OtherInformationWatcherSaga(),
		SubscriptionWatcherSaga(),
		DashboardWatcherSaga(),
		NotificationsWatcherSaga(),
		PublishHistoryWatcherSaga(),
		SupportWatcherSaga()
	]);
}
