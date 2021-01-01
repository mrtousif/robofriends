import React from "react";
import Loading from "./Loading";
import { shallow } from "enzyme";

it("should render loading component", () => {
    expect(shallow(<Loading />)).toMatchSnapshot();
});
