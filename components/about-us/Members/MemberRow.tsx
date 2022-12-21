import { Card, createStyles, Flex, Grid, Image, Text } from "@mantine/core";

export interface AvatarInfo {
  personName: string;
  personDesc: string;
  profileUrl: string;
}

interface MemberRowProps {
  people: AvatarInfo[];
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

export default function MemberRow(props: MemberRowProps) {
  const { classes } = useStyles();
  return (
    <Grid gutter={40} align={"stretch"}>
      {props.people.map((person) => (
        <Grid.Col span={3} key={person.profileUrl}>
          <Card shadow={"sm"} radius={5} className={classes.card} withBorder>
            <Card.Section>
              <Image src={person.profileUrl} alt={person.personName} />
            </Card.Section>
            <Flex
              className={classes.textContainer}
              direction={"column"}
              align={"center"}
              justify={"space-between"}
            >
              <Text className={classes.title}>{person.personName}</Text>
              <Text className={classes.subtitle}>{person.personDesc}</Text>
            </Flex>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
