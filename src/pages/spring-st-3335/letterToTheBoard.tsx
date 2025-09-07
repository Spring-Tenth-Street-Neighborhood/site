import {
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { Layout } from "../../lib/Layout";
import { Title } from "../../lib/Typography/Title";
import { Text } from "../../lib/Typography/Text";
import { useLanguageContext } from "../../lib/Language/context";
import { Spring3335Links } from "../../pageContent/Spring3335/Links";
import { ebLetterToTheBoard } from "../../pageContent/Spring3335/lettersToTheBoard";

const letterToTheBoard = ebLetterToTheBoard
  .split("\n")
  .map((line) => <Text key={line}>{line}</Text>);

const ContentByLanguage = {
  en: {
    title: "Letter to the Board of Supervisors",
    description:
      "A letter expressing concerns about the proposed purchase of 3335 Spring St. for a temporary housing facility.",
    author: "A concerned resident and voter in Redwood City",
  },
  es: {
    title: "Carta a la Junta de Supervisores",
    description:
      "Una carta que expresa preocupaciones sobre la propuesta de compra de 3335 Spring St. para una instalación de vivienda temporal.",
    author: "Un residente y votante preocupado en Redwood City",
  },
};

export default function LetterToTheBoard() {
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];
  return (
    <Layout>
      <Container maxWidth="md">
        <Stack gap={2} divider={<Divider />}>
          <Stack gap={2}>
            <Title component="h1">{content.title}</Title>
            <Text>{content.description}</Text>
            <Text>{content.author}</Text>
          </Stack>
          <Card>
            <CardContent>
              <Stack gap={1}>{letterToTheBoard}</Stack>
            </CardContent>
          </Card>
          <CardActions>
            <Spring3335Links />
          </CardActions>
        </Stack>
      </Container>
    </Layout>
  );
}
