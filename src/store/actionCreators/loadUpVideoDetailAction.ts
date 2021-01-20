import { LoadUpVideoTypes } from "../types";

const loadUpVideoDetailAction = (id: string): LoadUpVideoTypes => ({
    type: "LOAD_UP_VIDEO_DETAIL",
    id,
});

export default loadUpVideoDetailAction;
