import InfoIcon from "@mui/icons-material/Info";
import { type PageProps } from "gatsby";
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
import { ExternalButtonLink, ExternalLink, InternalLink } from "../lib/Links";
import Spring3335FrontImage from "../images/spring-3335-front-33.jpg";
import { Span } from "../lib/Span";

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
                  <Text variant="h3" bold>
                    3335 Spring Street Halfway house Board Meeting
                  </Text>
                  <CardMedia
                    component="img"
                    src={Spring3335FrontImage}
                    alt="3335 Spring Street Halfway House"
                  />
                  <Text>
                    <Text component="span" color="textSecondary" bold>
                      Action Needed:
                    </Text>{" "}
                    Attend the upcoming board meeting to voice your concerns and
                    stay informed about this important issue.
                  </Text>
                  <Text>
                    <Span alignContent={"center"} display="flex" gap={1}>
                      <InfoIcon color="primary" />
                      <Stack display="inline-flex">
                        The last meeting required less than 30 minutes of time.
                        <Span>
                          It was easy to provide public comment in{" "}
                          <ExternalLink to="https://smcgov.zoom.us/j/97944675398">
                            Zoom
                          </ExternalLink>
                          . Simply raise your hand.
                        </Span>
                      </Stack>
                    </Span>
                  </Text>
                  <Text variant="h4" bold>
                    Meeting Details
                  </Text>
                  <Text>
                    <strong>Board Proposal:</strong> Spend $2 million of our tax
                    payer dollars to purchase and renovate the property at 3335
                    Spring Street into a halfway house for up to 12 residents.{" "}
                    <ExternalLink to="https://sanmateocounty.legistar.com/LegislationDetail.aspx?ID=7649069&GUID=3A3209C8-010C-4963-BB4B-FA9DB0D34D96&Options=&Search=">
                      View Proposal
                    </ExternalLink>
                  </Text>
                  <Text>
                    <strong>Neighborhood Concerns:</strong>
                    <ul>
                      <li>
                        <ExternalLink to="https://county-taxes.net/ca-sanmateo/services/property-tax/c2FubWF0ZW8tY2E6Z3NneF9wcm9wZXJ0eV90YXg6cGFyZW50czoxMzM5MjRmYi1kNzE2LTExZWMtOTZjMy0wMDUwNTZhNDQzNDc=/bills/a0539f7f-3888-11ef-be3b-005056a4afdb#parcel">
                          Loss of $22,602.12 in annual property tax revenue
                        </ExternalLink>{" "}
                        for the county and our neighborhood.
                      </li>
                      <li>
                        Approximately $80,000 in loss of interest per year.
                        (modest 4% return)
                      </li>
                      <li>Yearly costs for supervisory services.</li>
                      <li>Increase in traffic and noise in the area.</li>
                      <li>Safety and security for local residents.</li>
                      <li>Impact on property values in the neighborhood.</li>
                    </ul>
                  </Text>
                  <Text variant="h4" bold>
                    When & Where
                  </Text>
                  <Text>
                    Date: <strong>Tuesday, September 9, 2025 at 9 AM</strong>
                  </Text>
                  <Text>
                    Zoom Link:{" "}
                    <ExternalLink to="https://smcgov.zoom.us/j/97944675398">
                      https://smcgov.zoom.us/j/97944675398
                    </ExternalLink>
                  </Text>
                  <Text>
                    Location:{" "}
                    <strong>
                      500 County Center Chambers, 1st Fl. Redwood City, CA
                    </strong>
                  </Text>
                </Stack>
              </CardContent>
              <CardActions>
                <ExternalButtonLink
                  component={Link}
                  to="https://sanmateocounty.legistar.com/MeetingDetail.aspx?ID=1234924&GUID=A5CC7185-D515-4166-9667-B57F0066A392&Options=info|&Search="
                >
                  Board Meeting
                </ExternalButtonLink>
                <ExternalButtonLink
                  component={Link}
                  to="https://sanmateocounty.legistar.com/MeetingDetail.aspx?ID=1234924&GUID=A5CC7185-D515-4166-9667-B57F0066A392&Options=info|&Search="
                >
                  Board Meeting
                </ExternalButtonLink>
                <ExternalButtonLink
                  variant="contained"
                  to="https://smcgov.zoom.us/j/97944675398"
                >
                  Zoom Meeting
                </ExternalButtonLink>
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
