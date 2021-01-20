import { put, call, takeLatest } from "redux-saga/effects";
import { key } from "../YoutubeApiKey";
import apiRequest from "./apiRequest";
import videosAction from "../actionCreators/videosAction";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";

export function* workerMostPopular() {
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiRequest,
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${key}` // Most popular videos for US region
        );
        yield put(videosAction(request)); // Dispatch requested data
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchMostPopular() {
    yield takeLatest("MOST_POPULAR", workerMostPopular); // Looking at special query and call according to that generator (function)
}
