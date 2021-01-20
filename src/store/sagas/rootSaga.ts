import { all } from "redux-saga/effects";
import { watchMostPopular } from "./mostPopularSaga";
import { watchYoutubeVideos } from "./searchByKeywordSaga";
import { watchVideoDetail } from "./videoDetailSaga";

export default function* rootSaga() {
    yield all([watchMostPopular(), watchYoutubeVideos(), watchVideoDetail()]);
}
