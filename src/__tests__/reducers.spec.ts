import videosReducer from "../store/reducers/videosReducer";
import videoDetailReducer from "../store/reducers/videoDetailReducer";
import loadingReducer from "../store/reducers/loadingReducer";
import favouritesReducer from "../store/reducers/favouritesReducer";
import errorReducer from "../store/reducers/errorReducer";
import initialState, { localStorageGet } from "../store/initialState";

describe("Reducers tests", () => {
    it("videosReducer test", () => {
        const action = {
            type: "VIDEOS",
            videos: [{}],
        };

        expect(videosReducer([{}], action)).toEqual([{}]);
    });

    it("videosReducer should return default value", () => {
        expect(videosReducer(undefined, { type: "", videos: [{}] })).toEqual(
            initialState.videos
        );
    });

    it("videoDetailReducer test", () => {
        const action = {
            type: "VIDEO_DETAIL",
            videoDetail: [{}],
        };

        expect(videoDetailReducer([{}], action)).toEqual([{}]);
    });

    it("videoDetailReducer should return default value", () => {
        expect(
            videoDetailReducer(undefined, { type: "", videoDetail: [{}] })
        ).toEqual(initialState.videoDetail);
    });

    it("loadingReducer test", () => {
        const action = {
            type: "LOADING",
            loading: true,
        };

        expect(loadingReducer(true, action)).toEqual(true);
    });

    it("loadingReducer should return default value", () => {
        expect(loadingReducer(undefined, { type: "", loading: false })).toEqual(
            initialState.loading
        );
    });

    it("favouritesReducer test", () => {
        const action = {
            type: "FAVOURITES",
            favourites: [""],
        };

        expect(favouritesReducer([""], action)).toEqual([""]);
    });

    it("favouritesReducer should return default value", () => {
        expect(
            favouritesReducer(undefined, {
                type: "",
                favourites: localStorageGet,
            })
        ).toEqual(initialState.favourites);
    });

    it("errorReducer test", () => {
        const action = {
            type: "ERROR",
            error: false,
        };

        expect(errorReducer(false, action)).toEqual(false);
    });

    it("errorReducer should return default value", () => {
        expect(errorReducer(undefined, { type: "", error: false })).toEqual(
            initialState.error
        );
    });
});
