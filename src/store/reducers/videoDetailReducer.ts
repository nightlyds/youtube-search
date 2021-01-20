import initialState from "../initialState";
import { VideoDetailTypes } from "../types";

const videoDetailReducer = (
    state = initialState.videoDetail,
    action: VideoDetailTypes
) => {
    switch (action.type) {
        case "VIDEO_DETAIL":
            return action.videoDetail;
        default:
            return state;
    }
};

export default videoDetailReducer;
