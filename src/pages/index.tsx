import { Link as GatsbyLink, type PageProps } from "gatsby";
import { Layout } from "../lib/Layout";
import { Title } from "../lib/Typography/Title";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Stack,
} from "@mui/material";
import { Text } from "../lib/Typography/Text";
import { ExternalLink, InternalLink } from "../lib/Links";

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
                  3335 Spring Street Halfway house Board Meeting
                </Text>
                <Text>
                  The proposed halfway house at 3335 Spring Street has raised
                  concerns among local residents regarding its potential impact
                  on the neighborhood.
                </Text>
              </Stack>
            </CardContent>
            <CardActions>
              <ExternalLink
                component={Link}
                to="https://sanmateocounty.legistar.com/MeetingDetail.aspx?ID=1234924&GUID=A5CC7185-D515-4166-9667-B57F0066A392&Options=info|&Search="
              >
                Board Meeting
              </ExternalLink>
              <ExternalLink
                component={Link}
                to="https://smcgov.zoom.us/j/97944675398"
              >
                Zoom Meeting
              </ExternalLink>
            </CardActions>
          </Card>
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
              <InternalLink to="/concerns-around-3335-spring-street-halfway-house-proposal">
                Read More
              </InternalLink>
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
