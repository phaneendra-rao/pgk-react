// Redux Saga: Root Saga
import { all } from 'redux-saga/effects';
import LoginWatcherSaga from './LoginWatcherSaga';
import CorporateProfileWatcherSaga from './CorporateProfileWatcherSaga';
import CommonWatcherSaga from './CommonWatcherSaga';
import HiringWatcherSaga from './HiringWatcherSaga';
import JobsWatcherSaga from './JobsWatcherSaga';
import OtherInformationWatcherSaga from './OtherInformationWatcherSaga';

export function* webportalAppRootSaga() {
	yield all([
		LoginWatcherSaga(),
		CorporateProfileWatcherSaga(),
		CommonWatcherSaga(),
		HiringWatcherSaga(),
		JobsWatcherSaga(),
		OtherInformationWatcherSaga()
	]);
}
