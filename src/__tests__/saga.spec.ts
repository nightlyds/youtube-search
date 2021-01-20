import { combineReducers } from "redux";
import { call, takeLatest } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import apiRequest from "../store/sagas/apiRequest";
import { key } from "../store/YoutubeApiKey";
import {
    watchMostPopular,
    workerMostPopular,
} from "../store/sagas/mostPopularSaga";
import {
    watchYoutubeVideos,
    workerYoutubeVideos,
} from "../store/sagas/searchByKeywordSaga";
import {
    watchVideoDetail,
    workerVideoDetail,
} from "../store/sagas/videoDetailSaga";
import videosAction from "../store/actionCreators/videosAction";
import videoDetailAction from "../store/actionCreators/videoDetailAction";
import loadingAction from "../store/actionCreators/loadingAction";
import errorAction from "../store/actionCreators/errorAction";
import videosReducer from "../store/reducers/videosReducer";
import videoDetailReducer from "../store/reducers/videoDetailReducer";
import loadingReducer from "../store/reducers/loadingReducer";
import errorReducer from "../store/reducers/errorReducer";

describe("Sagas tests", () => {
    describe("Most Popular saga test", () => {
        it("Saga watcher test", () => {
            const saga = watchMostPopular(); // Initialize Watcher Saga
            expect(saga.next().value).toEqual(
                takeLatest("MOST_POPULAR", workerMostPopular)
            ); // Take value of the first next()
            expect(saga.next().done).toBeTruthy(); // on the second next(), the saga will be done
        });

        it("Saga worker test success", () => {
          const reducers = combineReducers({
            videosReducer,
            loadingReducer,
            errorReducer,
          }); // the list of the reducers
    
          return expectSaga(workerMostPopular)
            .provide([
              [call(apiRequest, `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${key}`), [{}]],
            ]) // calling to the API and substitute another value
            .withReducer(reducers)
    
            .put(loadingAction(false))
            .put(errorAction(false))
            .put(videosAction([{}]))
            .put(loadingAction(true))
    
            .hasFinalState({
              videosReducer: [{}],
              loadingReducer: true,
              errorReducer: false,
            }) // Final reducers look
    
            .silentRun();
        });

        it("Saga worker test error", () => {
            const reducers = combineReducers({
                videosReducer,
                loadingReducer,
                errorReducer,
            });

            const expectedError = new Error("Network Error!"); // simulate an error

            return expectSaga(workerMostPopular)
                .provide([
                    [
                        call(
                            apiRequest,
                            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${key}`
                        ),
                        throwError(expectedError),
                    ],
                ])
                .withReducer(reducers)

                .put(loadingAction(false))
                .put(errorAction(false))
                .put(errorAction(true))
                .put(loadingAction(true))

                .hasFinalState({
                    videosReducer: [{}],
                    loadingReducer: true,
                    errorReducer: true,
                })

                .silentRun();
        });
    });
    describe("Search By Keyword saga test", () => {
        it("Saga watcher test", () => {
            const saga = watchYoutubeVideos();
            expect(saga.next().value).toEqual(
                takeLatest("LOAD_UP", workerYoutubeVideos)
            );
            expect(saga.next().done).toBeTruthy();
        });

        it("Saga worker test success", () => {
            const reducers = combineReducers({
                videosReducer,
                loadingReducer,
                errorReducer,
            });

            const action = {
                type: "LOAD_UP",
                keyword: "keyword",
            }; // special action with 'keyword'

            return expectSaga(workerYoutubeVideos, action)
                .provide([
                    [
                        call(
                            apiRequest,
                            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${action.keyword}&key=${key}`
                        ),
                        [{}],
                    ],
                ])
                .withReducer(reducers)

                .put(loadingAction(false))
                .put(errorAction(false))
                .put(videosAction([{}]))
                .put(loadingAction(true))

                .hasFinalState({
                    videosReducer: [{}],
                    loadingReducer: true,
                    errorReducer: false,
                })

                .silentRun();
        });

        it("Saga worker test error", () => {
            const reducers = combineReducers({
                videosReducer,
                loadingReducer,
                errorReducer,
            });

            const expectedError = new Error("Network Error!");

            const action = {
                type: "LOAD_UP",
                keyword: "keyword",
            };

            return expectSaga(workerYoutubeVideos, action)
                .provide([
                    [
                        call(
                            apiRequest,
                            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${action.keyword}&key=${key}`
                        ),
                        throwError(expectedError),
                    ],
                ])
                .withReducer(reducers)

                .put(loadingAction(false))
                .put(errorAction(false))
                .put(errorAction(true))
                .put(loadingAction(true))

                .hasFinalState({
                    videosReducer: [{}],
                    loadingReducer: true,
                    errorReducer: true,
                })

                .silentRun();
        });
    });
    describe("Video Detail saga test", () => {
        it("Saga watcher test", () => {
            const saga = watchVideoDetail();
            expect(saga.next().value).toEqual(
                takeLatest("LOAD_UP_VIDEO_DETAIL", workerVideoDetail)
            );
            expect(saga.next().done).toBeTruthy();
        });

        it("Saga worker test success", () => {
            const reducers = combineReducers({
                videoDetailReducer,
                loadingReducer,
                errorReducer,
            });

            const action = {
                type: "LOAD_UP_VIDEO_DETAIL",
                id: "ID",
            };

            return expectSaga(workerVideoDetail, action)
                .provide([
                    [
                        call(
                            apiRequest,
                            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${action.id}&key=${key}`
                        ),
                        [{}],
                    ],
                ])

                .withReducer(reducers)

                .put(loadingAction(false))
                .put(errorAction(false))
                .put(videoDetailAction([{}]))
                .put(loadingAction(true))

                .hasFinalState({
                    videoDetailReducer: [{}],
                    loadingReducer: true,
                    errorReducer: false,
                })

                .silentRun();
        });

        it("Saga worker test error", () => {
            const reducers = combineReducers({
                videoDetailReducer,
                loadingReducer,
                errorReducer,
            });

            const action = {
                type: "LOAD_UP_VIDEO_DETAIL",
                id: "ID",
            };

            const expectedError = new Error("Network Error!");

            return expectSaga(workerVideoDetail, action)
                .provide([
                    [
                        call(
                            apiRequest,
                            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${action.id}&key=${key}`
                        ),
                        throwError(expectedError),
                    ],
                ])

                .withReducer(reducers)

                .put(loadingAction(false))
                .put(errorAction(false))
                .put(errorAction(true))
                .put(loadingAction(true))

                .hasFinalState({
                    videoDetailReducer: [{}],
                    loadingReducer: true,
                    errorReducer: true,
                })

                .silentRun();
        });
    });
});
