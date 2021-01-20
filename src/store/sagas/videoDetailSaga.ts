import { put, call, takeLatest } from "redux-saga/effects";
import apiRequest from "./apiRequest";
import { key } from "../YoutubeApiKey";
import { LoadUpVideoTypes } from "../types";
import videoDetailAction from "../actionCreators/videoDetailAction";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";

export function* workerVideoDetail(action: LoadUpVideoTypes) {
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiRequest,
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${action.id}&key=${key}` // Request with special keyword from action and API key
        );
        yield put(videoDetailAction(request)); // Dispatch the requested data
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchVideoDetail() {
    yield takeLatest("LOAD_UP_VIDEO_DETAIL", workerVideoDetail); // Looking at special query and call according to that generator (function)
}
