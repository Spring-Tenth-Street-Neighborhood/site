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
                  <Text variant="h2" bold>
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
                          .
                        </Span>
                        <Span>Simply raise your hand.</Span>
                      </Stack>
                    </Span>
                  </Text>
                  <Text variant="h3" bold>
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
                  </Text>{" "}
                  <Text variant="h3" bold>
                    Meeting Details
                  </Text>
                  <Text>
                    <strong>Board Proposal:</strong> Spend{" "}
                    <Text component="span" color="warning" bold>
                      $2 million
                    </Text>{" "}
                    of our tax payer dollars to purchase and renovate the
                    property at 3335 Spring Street into a halfway house for up
                    to 12 residents.{" "}
                    <ExternalLink to="https://www.smcgov.org/ceo/south-county-youth-housing">
                      Proposal
                    </ExternalLink>
                    {""}
                    <ExternalLink to="https://sanmateocounty.legistar.com/LegislationDetail.aspx?ID=7649069&GUID=3A3209C8-010C-4963-BB4B-FA9DB0D34D96&Options=&Search=">
                      Meeting
                    </ExternalLink>
                  </Text>
                  <Text>
                    <Text variant="h3" bold component="span" display="block">
                      Neighborhood Concerns
                    </Text>
                    The neighborhood around 3335 Spring Street are very
                    concerned regarding the proposed halfway house.
                    <ExternalLink to="https://chng.it/SYb2wGrqZC">
                      Petition with at least 123 signatures
                    </ExternalLink>
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
                      <li>Yearly costs for supervisory 24 hour services.</li>
                      <li>
                        Yearly costs for maintenance and repair.{" "}
                        <ExternalLink to="https://www.smcgov.org/ceo/repairs-transitional-housing-service-league-san-mateo-county">
                          Prior example at 3787, 3787 Hoover Street and 1143
                          Marsh Road
                        </ExternalLink>
                      </li>
                      <li>
                        Plans to place 12 residents in a single-family home.
                        <ul>
                          <li>
                            Initial proposal: "begin with no more than six
                            residents at a time during the initial six months of
                            operation".
                          </li>
                          <li>
                            Messaging indicated 12 men and women over time.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Precedence:{" "}
                        <ExternalLink to="https://serviceleague.org/get-help/transitional-housing.html#:~:text=We%20operate%20five%2C%20six%2Dbed%20homes%20(2%20for%20women*%20and%203%20for%20men)%20in%20residential%20settings%C2%A0throughout%20Redwood%20City.">
                          Service League of San Mateo
                        </ExternalLink>
                        <ul>
                          <li>
                            "operate five, six-bed homes{" "}
                            <Text component="span" color="warning" bold>
                              (2 for women* and 3 for men)
                            </Text>{" "}
                            in residential settings throughout Redwood City."
                          </li>
                          <li>
                            In other words, up to{" "}
                            <Text component="span" color="warning" bold>
                              18
                            </Text>{" "}
                            people could be housed at once.
                          </li>
                          <li>
                            Our neighborhood is not equipped to handle 12-18
                            residents, or their associated traffic, sewage
                            service, parking, and other infrastructure needs.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Legal recourse:
                        <ul>
                          <li>
                            Residential neighborhoods can challenge the
                            placement of such facilities through local zoning
                            laws and regulations.
                          </li>
                          <li>
                            Legal Precedence:{" "}
                            <ExternalLink to="https://supreme.justia.com/cases/federal/us/416/1/">
                              https://supreme.justia.com/cases/federal/us/416/1/
                            </ExternalLink>
                          </li>
                          <li>
                            The U.S. Supreme Court allowed the legislature to
                            draw distinctions that limit the number of unrelated
                            people who can constitute a family.
                          </li>
                        </ul>
                      </li>
                      <li>Increase in traffic and noise in the area.</li>
                      <li>Safety and security for local residents.</li>
                      <li>Impact on property values in the neighborhood.</li>
                    </ul>
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
                <ExternalButtonLink to="https://chng.it/SYb2wGrqZC">
                  Sign the Petition
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
