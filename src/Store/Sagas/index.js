// Redux Saga: Root Saga
import { all } from 'redux-saga/effects';
import LoginWatcherSaga from './LoginWatcherSaga';
import CorporateProfileWatcherSaga from './CorporateProfileWatcherSaga';
import CommonWatcherSaga from './CommonWatcherSaga';

export function* webportalAppRootSaga() {
	yield all([
		LoginWatcherSaga(),
		CorporateProfileWatcherSaga(),
		CommonWatcherSaga()
	]);
}
