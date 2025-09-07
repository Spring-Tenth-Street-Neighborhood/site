import { graphql } from "gatsby";
import { Layout } from "../../../lib/Layout";
import { Container, List, ListItem, ListItemText, Stack } from "@mui/material";
import { Title } from "../../../lib/Typography/Title";
import { ExternalLink, InternalLink } from "../../../lib/Links";
import { Text } from "../../../lib/Typography/Text";
import { useLanguageContext } from "../../../lib/Language/context";

const ContentByLanguage = {
  en: {
    title: "Letters to the board",
    description:
      "Provide your feedback to the board regarding the proposed purchase of 3335 Spring St for a temporary housing facility.",
    emailTheBoard:
      "You can email your letter to the board, even if you did before",
    emailUs: "Email us at",
    sendFeedback: "or send us your feedback in this",
    survey: "survey",
    lettersFrom: "Letters from concerned residents and voters",
    weAre:
      "We are local residents and voters in Redwood City. Here are our voices.",
  },
  es: {
    title: "Cartas a la junta",
    description:
      "Envíe sus comentarios a la junta con respecto a la propuesta de compra de 3335 Spring St para una instalación de vivienda temporal.",
    emailTheBoard: "Puede enviar su carta a la junta, incluso si lo hizo antes",
    emailUs: "Envíenos un correo electrónico a",
    sendFeedback: "o envíenos sus comentarios en esta",
    survey: "encuesta",
    lettersFrom: "Cartas de residentes y votantes preocupados",
    weAre:
      "Somos residentes y votantes locales en Redwood City. Aquí están nuestras voces.",
  },
};

export default function BlogPage(props: any) {
  const { data } = props;
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];

  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2}>
          <Title component="h1">{content.title}</Title>
          <Text>{content.description}</Text>
          <Text>
            <ul>
              <li>
                {content.emailTheBoard}{" "}
                <ExternalLink to="mailto:BoardFeedback@smcgov.org?subject=Feedback%20on%203335%20Spring%20St%20Proposal">
                  BoardFeedback@smcgov.or
                </ExternalLink>
              </li>
              <li>
                {content.emailUs}{" "}
                <ExternalLink to="mailto:northfairoaksneighbors@gmail.com">
                  northfairoaksneighbors@gmail.com
                </ExternalLink>{" "}
              </li>
              <li>
                {content.sendFeedback}{" "}
                <ExternalLink to="https://form.typeform.com/to/PqjalTyv">
                  {content.survey}
                </ExternalLink>
              </li>
            </ul>
          </Text>
          <Title component="h2">{content.lettersFrom}</Title>
          <Text>{content.weAre}</Text>
          <List>
            {data.allMdx.nodes.map((node: any) => (
              <ListItem
                key={node.id}
                alignItems="flex-start"
                sx={{ gap: 0.5, flexDirection: { xs: "column", sm: "row" } }}
              >
                <ListItemText
                  primary={node.frontmatter.author}
                  secondary={node.frontmatter.date}
                  sx={{ flex: 1 }}
                />
                <ListItemText
                  primary={
                    <InternalLink
                      to={`/spring-st-3335/lettersToTheBoard/${node.frontmatter.slug}`}
                    >
                      {node.frontmatter.title}
                    </InternalLink>
                  }
                  secondary={
                    <Text color="textPrimary" variant="body2">
                      {node.excerpt}
                    </Text>
                  }
                  sx={{ flex: 4 }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Container>
    </Layout>
  );
}

export function Head(props: any) {
  return (
    <>
      <title>3335 Spring St | Letters to the board</title>
      <meta
        name="description"
        content="Letters to the board at 3335 Spring St"
      />
    </>
  );
}
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
          author
        }
        id
        excerpt
      }
    }
  }
`;
