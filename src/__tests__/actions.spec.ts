import videosAction from "../store/actionCreators/videosAction";
import videoDetailAction from "../store/actionCreators/videoDetailAction";
import mostPopularAction from "../store/actionCreators/mostPopularAction";
import loadUpVideoDetailAction from "../store/actionCreators/loadUpVideoDetailAction";
import loadUpAction from "../store/actionCreators/loadUpAction";
import loadingAction from "../store/actionCreators/loadingAction";
import favouritesAction from "../store/actionCreators/favouritesAction";
import errorAction from "../store/actionCreators/errorAction";

describe("Actions tests", () => {
    it("videosAction test", () => {
        const expectedAction = {
            type: "VIDEOS",
            videos: [{}],
        };

        expect(videosAction([{}])).toEqual(expectedAction);
    });

    it("videoDetailAction test", () => {
        const expectedAction = {
            type: "VIDEO_DETAIL",
            videoDetail: [{}],
        };

        expect(videoDetailAction([{}])).toEqual(expectedAction);
    });

    it("mostPopularAction test", () => {
        const expectedAction = {
            type: "MOST_POPULAR",
        };

        expect(mostPopularAction()).toEqual(expectedAction);
    });

    it("loadUpVideoDetailAction test", () => {
        const expectedAction = {
            type: "LOAD_UP_VIDEO_DETAIL",
            id: "ID",
        };

        expect(loadUpVideoDetailAction("ID")).toEqual(expectedAction);
    });

    it("loadUpAction test", () => {
        const expectedAction = {
            type: "LOAD_UP",
            keyword: "KEYWORD",
        };

        expect(loadUpAction("KEYWORD")).toEqual(expectedAction);
    });

    it("loadingAction test", () => {
        const expectedAction = {
            type: "LOADING",
            loading: true,
        };

        expect(loadingAction(true)).toEqual(expectedAction);
    });

    it("favouritesAction test", () => {
        const expectedAction = {
            type: "FAVOURITES",
            favourites: [""],
        };

        expect(favouritesAction([""])).toEqual(expectedAction);
    });

    it("errorAction test", () => {
        const expectedAction = {
            type: "ERROR",
            error: false,
        };

        expect(errorAction(false)).toEqual(expectedAction);
    });
});
