import { Container } from "@mantine/core";
import HomepageArticleRow from "components/homepage/HomepageNewsBulletin/HomepageArticleRow";

export default function HomepageArticlesContainer() {
  return (
    <Container fluid mt={10}>
      <HomepageArticleRow />
      <HomepageArticleRow />
      <HomepageArticleRow />
    </Container>
  );
}
