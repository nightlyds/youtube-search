import { VideosTypes } from "../types";

const videosAction = (videos: Array<Object>): VideosTypes => ({
    type: "VIDEOS",
    videos,
});

export default videosAction;
