import { Container, createStyles, Text } from "@mantine/core";
import ProjectsRow from "components/projects/Projects/ProjectsRow";
import { CONFIG_PROJECTS } from "config/projects/ProjectsContainer";

const useStyles = createStyles(() => ({
  root: {
    padding: "1rem",
    marginTop: "5%",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "4rem",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
}));

export interface ProjectInfo {
  projectName: string;
  projectDesc: string;
  projectUrl: string;
}

export interface YearlyProjectInfo {
  year: number;
  projects: ProjectInfo[];
}

export default function ProjectsContainer() {
  const { classes } = useStyles();
  return (
    <Container className={classes.root}>
      {CONFIG_PROJECTS.map((project) => (
        <div key={project.year}>
          <Text className={classes.title}>{project.year}</Text>
          <ProjectsRow projects={project.projects} />
        </div>
      ))}
    </Container>
  );
}
