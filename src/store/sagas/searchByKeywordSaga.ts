import { call, put, takeLatest } from "redux-saga/effects";
import { key } from "../YoutubeApiKey";
import apiRequest from "./apiRequest";
import { LoadUpTypes } from "../types";
import videosAction from "../actionCreators/videosAction";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";

export function* workerYoutubeVideos(action: LoadUpTypes) {
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiRequest,
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${action.keyword}&key=${key}` // Request with special keyword from action and API key
        );
        yield put(videosAction(request)); // Dispatch the requested data
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchYoutubeVideos() {
    yield takeLatest("LOAD_UP", workerYoutubeVideos); // Looking at special query and call according to that generator (function)
}
