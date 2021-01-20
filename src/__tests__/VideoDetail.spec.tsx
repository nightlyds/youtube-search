import React from "react";
import VideoDetail, { VideoDetailProps } from "../components/VideoDetail";
import { VideosTypes } from "../YoutubeSearch";
import { shallow } from "enzyme";

const setUp = (props: VideoDetailProps) => shallow(<VideoDetail {...props} />);

describe("VideoDetail component tests", () => {
    let component: any;
    const loadVideoDetail = (id: string) => {};
    const addToFavourites = (favourites: Array<string>) => {};
    const favourites: Array<string> = [];
    const videoDetail: Array<VideosTypes> = [];
    const loading: boolean = false;
    const error: boolean = false;
    let history: any;
    let match: any = {
        params: {
            id: "ID",
        },
    };
    let location: any;

    beforeEach(() => {
        component = setUp({
            history,
            match,
            location,
            loadVideoDetail,
            addToFavourites,
            favourites,
            videoDetail,
            loading,
            error,
        });
    });

    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    });
});
