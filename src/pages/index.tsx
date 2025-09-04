import { Link as GatsbyLink, type PageProps } from "gatsby";
import { Layout } from "../lib/Layout";
import { Title } from "../lib/Typography/Title";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Stack,
} from "@mui/material";
import { Text } from "../lib/Typography/Text";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2}>
          <Title variant="h1" component="h1" bold>
            Spring Tenth Neighborhood
          </Title>
          <Text>Welcome to the Spring Tenth Neighborhood in Redwood City</Text>
          <Card>
            <CardContent>
              <Stack gap={1}>
                <Text variant="h3" bold>
                  Concerns around 3335 Spring Street Halfway house proposal
                </Text>
                <Text>
                  The proposed halfway house at 3335 Spring Street has raised
                  concerns among local residents regarding its potential impact
                  on the neighborhood.
                </Text>
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                component={GatsbyLink}
                to="/concerns-around-3335-spring-street-halfway-house-proposal"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export function Head() {
  return (
    <>
      <title>Spring Tenth Neighborhood</title>
      <meta name="description" content="Spring Tenth Neighborhood" />
    </>
  );
}
