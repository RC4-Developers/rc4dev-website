import { Avatar, createStyles, Flex, Grid, Text } from "@mantine/core";

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
}));

export default function MemberRow(props: MemberRowProps) {
  const { classes } = useStyles();
  return (
    <Grid>
      {props.people.map((person) => (
        <Grid.Col span={3} key={person.profileUrl}>
          <Flex className={classes.person}>
            <Avatar
              src={person.profileUrl}
              alt={person.personName}
              size={200}
              radius={200}
              key={person.profileUrl}
            />
            <Text>{person.personName}</Text>
            <Text>{person.personDesc}</Text>
          </Flex>
        </Grid.Col>
      ))}
    </Grid>
  );
}
