import { shallow } from "enzyme";
import React from "react";
import Loader from "./loader.component";

describe("Loader", () => {
  it("expect to render Loader Component correctly", () => {
    expect(shallow(<Loader />)).toMatchSnapshot();
  });
});
