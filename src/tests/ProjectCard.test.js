import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";
import "@testing-library/jest-dom";

const project = {
  id: 3,
  name: "ATM Challenge",
  image:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2F2287673364866031&psig=AOvVaw3oeOBv6JMweuBvLZ0ry-AD&ust=1644853254695000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj8voSC_fUCFQAAAAAdAAAAABAD",
  description: "We designed an ATM machine with real life case scenarios and appropriate response.",
};

describe("ProjectCard.jsx", () => {
  beforeEach(() => {
    render(<ProjectCard project={project} />);
  });

  it("is expected to display the title of the project", () => {
    expect(screen.getByText("ATM Challenge")).toBeInTheDocument();
  });
});