import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../../utils/axios";
import { toast } from "react-toastify";
import { ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST, ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST, ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST, ACTION_POST_OR_PATCH_CAMPUS_DRIVE_JOB_REQUEST, ACTION_DELETE_CAMPUS_DRIVE_JOB_REQUEST, ACTION_PUBLISH_CAMPUS_DRIVE_PUBLISH_JOBS_REQUEST, ACTION_GET_CAMPUS_DRIVE_STUDENTS_LIST_BY_JOB_ID_REQUEST, ACTION_GET_CAMPUS_DRIVE_APP_WINDOW_JOB_BY_ID_REQUEST, ACTION_POST_CAMPUS_DRIVE_APP_WINDOW_JOB_REQUEST } from '../../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../../Actions/SagaActions/CommonSagaActions';

// GET DEFINE JOBS - CAMPUS DRIVE
const getDefineJobsListRequest = (campusDriveId) => {
    const URL = '/cdj/job/all/'+campusDriveId;
    return Axios.get(URL).then(resp => resp.data);
}

function* getDefineJobsListRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(getDefineJobsListRequest, action.payload.campusDriveId);
        if(action.payload.callback && data) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// GET CAMPUS DRIVE HIRING CRITERIA LIST - CAMPUS DRIVE
const getCampusDriveHiringCriteriaListRequest = (apiPayloadRequest) => {
    const URL = '/cdj/hc/all/'+apiPayloadRequest.campusDriveId;
    return Axios.get(URL).then(resp => resp.data);
}

function* getCampusDriveHiringCriteriaListRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(getCampusDriveHiringCriteriaListRequest, action.payload.apiPayloadRequest);
        if(action.payload.callback && data) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// POST OR PATCH HIRING CRITERIA - CAMPUS DRIVE
const postOrPatchCampusDriveHiringCriteriaRequest = (apiPayloadRequest) => {
    if (apiPayloadRequest?.hiringCriteriaID) {
        const URL = '/cdj/hc';
        return Axios.patch(URL, apiPayloadRequest).then(resp => resp.data);
    } else {
        const URL = '/cdj/hc';
        return Axios.post(URL, apiPayloadRequest).then(resp => resp.data);
    }
}

function* postOrPatchCampusDriveHiringCriteriaRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(postOrPatchCampusDriveHiringCriteriaRequest, action.payload.apiPayloadRequest);
        if(action.payload.callback) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// POST OR PATCH JOB - CAMPUS DRIVE
const postOrPatchCampusDriveJobRequest = (apiPayloadRequest) => {
    if (apiPayloadRequest?.jobID) {
        const URL = '/cdj/job';
        return Axios.patch(URL, apiPayloadRequest).then(resp => resp.data);
    } else {
        const URL = '/cdj/job';
        return Axios.post(URL, apiPayloadRequest).then(resp => resp.data);
    }
}

function* postOrPatchCampusDriveJobRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(postOrPatchCampusDriveJobRequest, action.payload.apiPayloadRequest);
        if(action.payload.callback) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// DELETE JOB - CAMPUS DRIVE
const deleteCampusDriveJobRequest = (apiPayloadRequest) => {
    const URL = '/cdj/job/'+apiPayloadRequest.jobID;
    return Axios.delete(URL).then(resp => resp.data);
}
function* deleteCampusDriveJobRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(deleteCampusDriveJobRequest, action.payload.apiPayloadRequest);
        if(action.payload.callback) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// PUBLISH JOBS - CAMPUS DRIVE
const publishCampusDriveJobsRequest = (apiPayloadRequest) => {
    const URL = '/cdj/job/publish';
    return Axios.post(URL, apiPayloadRequest).then(resp => resp.data);
}

function* publishCampusDriveJobsRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(publishCampusDriveJobsRequest, action.payload.apiPayloadRequest);
        if(action.payload.callback) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// GET STUDENTS LIST BY JOB ID - CAMPUS DRIVE
const getCampusDriveStudentsListByJobId = (apiPayloadRequest) => {
    const URL = '/cdj/sl/'+apiPayloadRequest.JobId+'/'+apiPayloadRequest.campusDriveId;
    return Axios.get(URL).then(resp => resp.data);
}

function* getCampusDriveStudentsListByJobIdRequest(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(getCampusDriveStudentsListByJobId, action.payload.apiPayloadRequest);
        if(action.payload.callback) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// GET APPLICATION WINDOW JOBS LIST - CAMPUS DRIVE
const getCampusDriveAppWindowJobById = (apiPayloadRequest) => {
    const URL = '/cdj/jaw/job/'+apiPayloadRequest?.jobID;
    return Axios.get(URL).then(resp => resp.data);
}

function* getCampusDriveAppWindowJobByIdRequest(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(getCampusDriveAppWindowJobById, action?.payload?.apiPayloadRequest);
        if(action.payload.callback) {
            action.payload.callback(data);
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

// POST APPLICATION WINDOW JOB - CAMPUS DRIVE
const patchCampusDriveAppWindowJob = (formData) => {
    const URL = '/cdj/jaw';
    return Axios.patch(URL, formData).then(resp => resp.data);
}

const postCampusDriveAppWindowJob = (formData) => {
    const URL = '/cdj/jaw';
    return Axios.post(URL, formData).then(resp => resp.data);
}

function* postCampusDriveAppWindowJobRequest(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        let formData = new FormData();

        if(action?.payload?.apiPayloadRequest?.data?.update) {
            delete action?.payload?.apiPayloadRequest?.data?.update;

            for (const key in action?.payload?.apiPayloadRequest?.data) {
                formData.append(key, action?.payload?.apiPayloadRequest?.data[key]);
            }

            const data = yield call(patchCampusDriveAppWindowJob, formData);
            if(action.payload.callback) {
                action.payload.callback(data);
            }
    
        } else {
            for (const key in action?.payload?.apiPayloadRequest?.data) {
                formData.append(key, action?.payload?.apiPayloadRequest?.data[key]);
            }    

            const data = yield call(postCampusDriveAppWindowJob, formData);
            if(action.payload.callback) {
                action.payload.callback(data);
            }
        }
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

export default function* DefineJobsWatcherSaga() {
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST, getDefineJobsListRequestSaga);
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST, getCampusDriveHiringCriteriaListRequestSaga);
    yield takeLatest(ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST, postOrPatchCampusDriveHiringCriteriaRequestSaga);
    yield takeLatest(ACTION_POST_OR_PATCH_CAMPUS_DRIVE_JOB_REQUEST, postOrPatchCampusDriveJobRequestSaga);
    yield takeLatest(ACTION_DELETE_CAMPUS_DRIVE_JOB_REQUEST, deleteCampusDriveJobRequestSaga);
    yield takeLatest(ACTION_PUBLISH_CAMPUS_DRIVE_PUBLISH_JOBS_REQUEST, publishCampusDriveJobsRequestSaga);
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_STUDENTS_LIST_BY_JOB_ID_REQUEST, getCampusDriveStudentsListByJobIdRequest);
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_APP_WINDOW_JOB_BY_ID_REQUEST, getCampusDriveAppWindowJobByIdRequest);
    yield takeLatest(ACTION_POST_CAMPUS_DRIVE_APP_WINDOW_JOB_REQUEST, postCampusDriveAppWindowJobRequest);
}