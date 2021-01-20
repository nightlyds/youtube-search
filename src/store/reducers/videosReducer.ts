import initialState from "../initialState";
import { VideosTypes } from "../types";

const videosReducer = (state = initialState.videos, action: VideosTypes) => {
    switch (action.type) {
        case "VIDEOS":
            return action.videos;
        default:
            return state;
    }
};

export default videosReducer;
