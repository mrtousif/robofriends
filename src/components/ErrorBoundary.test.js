import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { shallow } from "enzyme";

it("should not render ErrorBoundary component", () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});

it("should render ErrorBoundary component", () => {
    expect(
        shallow(<ErrorBoundary />)
            .instance()
            .componentDidCatch()
    ).toMatchSnapshot();
});
