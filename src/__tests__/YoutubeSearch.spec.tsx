import React from "react";
import YoutubeSearch, {
    YoutubeSearchProps,
    VideosTypes,
} from "../YoutubeSearch";
import { shallow } from "enzyme";

const setUp = (props: YoutubeSearchProps) =>
    shallow(<YoutubeSearch {...props} />);

describe("YoutubeSearch component tests", () => {
    let component: any;
    const mostPopular = () => {};
    const videos: Array<VideosTypes> = [];
    const loading: boolean = false;
    const error: boolean = false;
    const changeKeyword = (keyword: string | undefined) => {};

    beforeEach(() => {
        component = setUp({
            mostPopular,
            videos,
            loading,
            error,
            changeKeyword,
        });
    });

    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    });
});
