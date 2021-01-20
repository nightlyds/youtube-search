import { VideoDetailTypes } from "../types";

const videoDetailAction = (videoDetail: Array<Object>): VideoDetailTypes => ({
    type: "VIDEO_DETAIL",
    videoDetail,
});

export default videoDetailAction;
