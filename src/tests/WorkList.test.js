import React from "react";
import { render, screen } from "@testing-library/react";
import WorkList from "../WorkList";
import "@testing-library/jest-dom";

const work = {
  id: 1,
  company: "OFYR",
  jobtitle: "Digital Marketing Assistant",
  period: "2020 - 2021"
};

describe("WorkList.jsx", () => {
  beforeEach(() => {
    render(<WorkList work={work} />);
  });

  it("is expected to display correct mock data", () => {
    expect(screen.getByText("Most Amazing Company Ever")).toBeInTheDocument();
  });
});

