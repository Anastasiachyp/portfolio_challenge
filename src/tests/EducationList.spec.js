import React from "react";
import { render, screen } from "@testing-library/react";
import EducationList from "../EducationList";
import "@testing-library/jest-dom";

const education = {
  id: 1,
  institution: "IULM University",
  programm: "Master's degree, Marketing",
  period: "2018-2019",
};

describe("EducationList.jsx", () => {
  beforeEach(() => {
    render(<EducationList education={education} />);
  });

  it("is expected to display correct mock data", () => {
    expect(screen.getByText("IULM University")).toBeInTheDocument();
  });
});
