import { type PageProps } from "gatsby";
import { Layout } from "../lib/Layout";
import { Title } from "../lib/Typography/Title";
import { Alert, Container, Divider, Stack } from "@mui/material";
import { Text } from "../lib/Typography/Text";
import {
  ExternalButtonLink,
  InternalButtonLink,
  InternalLink,
} from "../lib/Links";
import { Spring3335Links } from "../pageContent/Spring3335/Links";
import { useLanguageContext } from "../lib/Language/context";
import { Spring3335Card } from "../pageContent/Spring3335/Card";
import { Seo } from "../lib/Seo/Seo";

const ContentByLanguage = {
  en: {
    title: "Spring Tenth Neighborhood",
    description: "Welcome to the Spring Tenth Neighborhood in Redwood City",
    agenda: "Top Agenda - 3335 Spring Street Halfway House Proposal",
    summary1: `The local residents of the Spring Tenth neighborhood are deeply
          concerned about the proposed halfway house at 3335 Spring Street. We
          believe that this proposal could have significant negative impacts on
          our community, including increased traffic, noise, and safety
          concerns.`,
    summary2: `
          We urge the San Mateo Board of Supervisors to carefully consider the potential
          consequences of this proposal and to prioritize the well-being of our
          neighborhood residents.`,
    lettersToTheBoard: "Letters to the Board",
  },
  es: {
    title: "Vecindario de Spring Tenth",
    description: "Bienvenido al vecindario de Spring Tenth en Redwood City",
    agenda:
      "Agenda Principal - Propuesta de Casa de Medio Camino en 3335 Spring Street",
    summary1: `
          Los residentes locales del vecindario Spring Tenth están profundamente
          preocupados por la propuesta de una casa de medio camino en 3335
          Spring Street. Creemos que esta propuesta podría tener impactos
          negativos significativos en nuestra comunidad, incluyendo un aumento
          del tráfico, ruido y preocupaciones de seguridad.
          `,
    summary2: `Instamos al Concejo de la Ciudad de Redwood a considerar
            cuidadosamente las posibles consecuencias de esta propuesta y a
            priorizar el bienestar de los residentes de nuestro vecindario.
        `,
    lettersToTheBoard: "Cartas a la Junta",
  },
};

const IndexPage: React.FC<PageProps> = () => {
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2} divider={<Divider />}>
          <Stack gap={2}>
            <Title component="h1">{content.title}</Title>
            <Text>{content.description}</Text>
          </Stack>
          <Stack gap={2}>
            <Title component="h2">{content.agenda}</Title>
            <Text>
              {content.summary1}{" "}
              <InternalButtonLink
                to="/spring-st-3335/lettersToTheBoard/"
                variant="contained"
              >
                {content.lettersToTheBoard}
              </InternalButtonLink>
            </Text>
            <Text>{content.summary2}</Text>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={1}
            >
              <Spring3335Links />
            </Stack>
            <Spring3335Card />
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export function Head() {
  return <Seo />;
}
