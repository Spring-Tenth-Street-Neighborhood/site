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
import { useLanguageContext } from "../../lib/Language/context";
const ContentByLanguage = {
  en: {
    title: "3335 Spring Street Halfway House Proposal",
    description: "Flyer from San Mateo County Board of Supervisors",
    overview:
      "South County Youth Housing Project proposal at 3335 Spring Street",
    summary:
      "The board of supervisors is considering a proposal to purchase and renovate the property at 3335 Spring Street into a halfway house for up to 12 residents. This proposal has raised concerns among local residents regarding its potential impact on the neighborhood.",
    flyerText: "Flyer",
    flyerDescription:
      "This is the flyer they provided to a very limited set of nearby residents. 300ft by law.",
    flyerLink: "Flyer Link",
    residentConcerns: "Resident Concerns",
  },
  es: {
    title: "Propuesta de Casa de Medio Camino en 3335 Spring Street",
    description: "Volante de la Junta de Supervisores del Condado de San Mateo",
    overview:
      "Propuesta del Proyecto de Vivienda Juvenil del Sur del Condado en 3335 Spring Street",
    summary:
      "La junta de supervisores está considerando una propuesta para comprar y renovar la propiedad en 3335 Spring Street y convertirla en una casa de medio camino para hasta 12 residentes. Esta propuesta ha generado preocupaciones entre los residentes locales sobre su posible impacto en el vecindario.",
    flyerText: "Volante",
    flyerDescription:
      "Este es el volante que proporcionaron a un conjunto muy limitado de residentes cercanos. 300 pies por ley.",
    flyerLink: "Enlace del volante",
    residentConcerns: "Preocupaciones de los residentes",
  },
};

export default function Spring3335HalfwayHouseFlyer() {
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={4} divider={<Divider />}>
          <Stack gap={2}>
            <Title component="h1">{content.title}</Title>
            <Text>{content.description}</Text>
          </Stack>
          <Stack gap={2}>
            <Title component="h2">{content.overview}</Title>
            <Text>{content.summary}</Text>
            <Card>
              <CardContent>
                <Stack gap={1}>
                  <Title component="h3">{content.flyerText}</Title>
                  <Text>{content.flyerDescription}</Text>
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
                  {content.flyerLink}
                </ExternalButtonLink>
                <InternalButtonLink to="/" variant="contained">
                  {content.residentConcerns}
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
