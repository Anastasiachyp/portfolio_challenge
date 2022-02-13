import React from "react";
import { Container, Header } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
       <Header as="h1" id="about-header">About Me</Header>
      <p>
        Hello, I am a 25-year-old girl attending the Craft Academy's software development course.
        For a long time I've wanted to do a course that excites me and where I can learn new things every day, so I've decided to change my career and for the next few months I'll be a full time student.
      </p>
    </Container>
  );
};

export default About;
