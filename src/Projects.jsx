import React, { useState, useEffect } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  let projectsList = projects.map((project) => {
    return (
      <div id={`project-${project.id}`} key={project.id}>
        <ProjectCard project={project} />
      </div>
    )
  });
  useEffect(() => {
    axios.get("./data/projects.json").then((response) => {
      setProjects(response.data);
    });
  }, []);

    return (
      <Container>
          <Header as="h1" id="projects-header">My Projects</Header>
        <Grid>{projectsList}</Grid>
      </Container>
    );
  };

export default Projects;
