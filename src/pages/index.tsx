import { Link as GatsbyLink, type PageProps } from "gatsby";
import { Layout } from "../lib/Layout";
import { Title } from "../lib/Typography/Title";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Link,
  Stack,
} from "@mui/material";
import { Text } from "../lib/Typography/Text";
import { ExternalLink, InternalLink } from "../lib/Links";
import Spring3335FrontImage from "../images/spring-3335-front-33.jpg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={4} divider={<Divider />}>
          <Stack gap={2}>
            <Title component="h1">Spring Tenth Neighborhood</Title>
            <Text>
              Welcome to the Spring Tenth Neighborhood in Redwood City
            </Text>
          </Stack>
          <Stack gap={2}>
            <Title component="h2">
              Top Agenda - 3335 Spring Street Halfway House Proposal
            </Title>
            <Text>
              The local residents of the Spring Tenth neighborhood are deeply
              concerned about the proposed halfway house at 3335 Spring Street.
              We believe that this proposal could have significant negative
              impacts on our community, including increased traffic, noise, and
              safety concerns.
            </Text>
            <Text>
              We urge the Redwood City Council to carefully consider the
              potential consequences of this proposal and to prioritize the
              well-being of our neighborhood residents.
            </Text>
            <Card>
              <CardContent>
                <Stack gap={1}>
                  <CardMedia
                    component="img"
                    src={Spring3335FrontImage}
                    alt="3335 Spring Street Halfway House"
                  />
                  <Text variant="h3" bold>
                    3335 Spring Street Halfway house Board Meeting
                  </Text>
                  <Text>
                    <strong>Action Needed:</strong> Attend the upcoming board
                    meeting to voice your concerns and stay informed about this
                    important issue.
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
                    concerns among local residents regarding its potential
                    impact on the neighborhood.
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
