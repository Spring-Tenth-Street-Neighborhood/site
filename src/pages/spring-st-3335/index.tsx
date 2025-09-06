import { Layout } from "../../lib/Layout";
import { Title } from "../../lib/Typography/Title";
import {
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { Text } from "../../lib/Typography/Text";
import FlyerEnglishImage from "../../images/SouthCountyHousingFlyerEnglish-33.png";
import FlyerSpanishImage from "../../images/SouthCountyHousingFlyerSpanish-33.png";
import { Image } from "../../lib/Image";
import {
  ExternalButtonLink,
  InternalButtonLink,
  InternalLink,
} from "../../lib/Links";

export default function Spring3335HalfwayHouseFlyer() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Breadcrumbs>
          <InternalLink to="/" color="inherit" underline="hover">
            Home
          </InternalLink>
          <Text>Flyer</Text>
        </Breadcrumbs>
        <Stack gap={4} divider={<Divider />}>
          <Stack gap={2}>
            <Title component="h1">
              3335 Spring Street Halfway House Proposal
            </Title>
            <Text>Flyer from San Mateo County Board of Supervisors</Text>
          </Stack>
          <Stack gap={2}>
            <Title component="h2">
              South County Youth Housing Project proposal at 3335 Spring Street
            </Title>
            <Text>
              The board of supervisors is considering a proposal to purchase and
              renovate the property at 3335 Spring Street into a halfway house
              for up to 12 residents. This proposal has raised concerns among
              local residents regarding its potential impact on the
              neighborhood.
            </Text>
            <Card>
              <CardContent>
                <Stack gap={1}>
                  <Title component="h3">Flyer</Title>
                  <Text>
                    This is the flyer they provided to a very limited set of
                    nearby residents. 300ft by law.
                  </Text>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    gap={1}
                    sx={{ width: "100%" }}
                  >
                    <Image
                      src={FlyerEnglishImage}
                      alt="3335 Spring Street Halfway House - English Flyer"
                      flex={1}
                    />
                    <Image
                      src={FlyerSpanishImage}
                      alt="3335 Spring Street Halfway House - Spanish Flyer"
                      flex={1}
                    />
                  </Stack>
                </Stack>
              </CardContent>
              <CardActions>
                <ExternalButtonLink to="https://www.smcgov.org/ceo/south-county-youth-housing">
                  Flyer Link
                </ExternalButtonLink>
                <InternalButtonLink to="/" variant="contained">
                  Resident Concerns
                </InternalButtonLink>
              </CardActions>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <title>3335 Spring Street Halfway House Proposal</title>
      <meta
        name="description"
        content="3335 Spring Street Halfway House Proposal"
      />
    </>
  );
}
