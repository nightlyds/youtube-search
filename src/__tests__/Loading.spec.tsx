import React from "react";
import Loading from "../components/Loading";
import { shallow } from "enzyme";

const setUp = () => shallow(<Loading />);

describe("Loading component tests", () => {
    let component: any;

    beforeEach(() => {
        component = setUp();
    });

    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    });
});
