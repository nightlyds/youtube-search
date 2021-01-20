import { combineReducers } from "redux";
import videosReducer from "./videosReducer";
import videoDetailReducer from "./videoDetailReducer";
import favouritesReducer from "./favouritesReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
    videosReducer,
    videoDetailReducer,
    favouritesReducer,
    loadingReducer,
    errorReducer,
});

export default reducers;
