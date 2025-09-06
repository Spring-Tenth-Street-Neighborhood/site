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
  Stack,
} from "@mui/material";
import { Text } from "../lib/Typography/Text";
import { ExternalLink, InternalLink } from "../lib/Links";
import Spring3335FrontImage from "../images/spring-3335-front-33.jpg";
import { Span } from "../lib/Span";
import { Spring3335Links } from "../pageContent/Spring3335/Links";
import { useLanguageContext } from "../lib/Language/context";
import { Spring3335Card } from "../pageContent/Spring3335/Card";

const ContentByLanguage = {
  en: {
    title: "Spring Tenth Neighborhood",
    description: "Welcome to the Spring Tenth Neighborhood in Redwood City",
    agenda: "Top Agenda - 3335 Spring Street Halfway House Proposal",
    summary: (
      <>
        <Text>
          The local residents of the Spring Tenth neighborhood are deeply
          concerned about the proposed halfway house at 3335 Spring Street. We
          believe that this proposal could have significant negative impacts on
          our community, including increased traffic, noise, and safety
          concerns.
        </Text>
        <Text>
          We urge the Redwood City Council to carefully consider the potential
          consequences of this proposal and to prioritize the well-being of our
          neighborhood residents.
        </Text>
      </>
    ),
  },
  es: {
    title: "Vecindario de Spring Tenth",
    description: "Bienvenido al vecindario de Spring Tenth en Redwood City",
    agenda:
      "Agenda Principal - Propuesta de Casa de Medio Camino en 3335 Spring Street",
    summary: (
      <>
        <Text>
          Los residentes locales del vecindario Spring Tenth están profundamente
          preocupados por la propuesta de una casa de medio camino en 3335
          Spring Street. Creemos que esta propuesta podría tener impactos
          negativos significativos en nuestra comunidad, incluyendo un aumento
          del tráfico, ruido y preocupaciones de seguridad.
        </Text>
        <Text>
          Instamos al Concejo de la Ciudad de Redwood a considerar
          cuidadosamente las posibles consecuencias de esta propuesta y a
          priorizar el bienestar de los residentes de nuestro vecindario.
        </Text>
      </>
    ),
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
            {content.summary}
            <Text>
              <Spring3335Links />
            </Text>
            <Spring3335Card />
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
