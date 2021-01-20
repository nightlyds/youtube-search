import React from "react";
import Error from "../components/Error";
import { shallow } from "enzyme";

const setUp = () => shallow(<Error />);

describe("Error component tests", () => {
    let component: any;

    beforeEach(() => {
        component = setUp();
    });

    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    });
});
