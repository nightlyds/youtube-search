import React from "react";
import Error404 from "../components/Error404";
import { shallow } from "enzyme";

const setUp = () => shallow(<Error404 />);

describe("Error 404 component tests", () => {
    let component: any;

    beforeEach(() => {
        component = setUp();
    });

    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    });
});
