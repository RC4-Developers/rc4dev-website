import { Card, createStyles, Flex, Grid, Image, Text } from "@mantine/core";
import { ProjectInfo } from "components/projects/Projects/ProjectsContainer";

interface ProjectsRowProps {
  projects: ProjectInfo[];
}

const useStyles = createStyles(() => ({
  person: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1rem",
    textAlign: "center",
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "stretch",
    borderRadius: "10px",
  },
  textContainer: {
    height: "100%",
    flex: 1,
  },
}));

export default function ProjectsRow(props: ProjectsRowProps) {
  const { classes } = useStyles();
  return (
    <Grid gutter={40} align={"stretch"}>
      {props.projects.map((project) => (
        <Grid.Col span={3} key={project.projectUrl}>
          <Card shadow={"sm"} radius={5} className={classes.card} withBorder>
            <Card.Section>
              <Image src={project.projectUrl} alt={project.projectName} />
            </Card.Section>
            <Flex
              className={classes.textContainer}
              direction={"column"}
              align={"center"}
              justify={"space-between"}
            >
              <Text className={classes.title}>{project.projectName}</Text>
              <Text className={classes.subtitle}>{project.projectDesc}</Text>
            </Flex>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
