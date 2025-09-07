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

const letterToTheBoard = `
Hi,
I am writing to express significant concerns, shared by many community members at the recent meeting,
regarding the county's proposed purchase of 3335 Spring St., Redwood City, for a temporary housing facility. I urge you to vote against this proposal at next Monday's Board of Supervisors meeting, as it is not in the best interest of our community or the county. My concerns are shared by many community members, and there are many other people in our neighborhood who aren’t yet aware of the plans.
Purchasing this house is not financially sound for the county. The community has uncovered numerous
historical issues with the property, including many unsanctioned and un-permitted additions. Bringing these upto code would be extremely expensive. During an open house, I observed uneven and sinking flooring, raising concerns about the structural integrity of the house. It may also require retrofitting for earthquake safety.
Purchasing a house in a neighborhood with strong community opposition to the youth home could lead to
numerous complaints, potential lawsuits, and code violations for the county. The community's intense scrutiny of the house and its residents would likely generate frequent reports, creating extra work and additional costs for the operators.
One significant concern is the existing parking problem in the neighborhood. An influx of residents and
visitors, potentially bringing additional vehicles, would exacerbate parking sprawl into surrounding blocks. This area already experiences a three-block radius of parking overflow from a nearby apartment complex.
Furthermore, the area's lack of walkability presents a challenge for those without cars, limiting their access to essential amenities like entertainment, community services, and groceries. Public transportation in this vicinity
is also inadequate; for example, a two-mile trip to downtown Redwood City can take up to 30 minutes via
public transit.
This house is located within 2000 feet of Taft Elementary School, a proximity that is legally off-limits to registered sex offenders. There is concern due to the lack of information provided at the community meeting regarding proper background checks for potential residents. Additionally, Taft Elementary employees and parents have not been adequately informed about the county's plans for this property so their input is being ignored.
The county's plan to house up to 12 people on this single-family zoned property would lead to an excessive increase in housing density, which the neighborhood infrastructure cannot adequately support.
The project seems to have been hastily organized. At the community meeting, several critical details
regarding the proposed operation were missing. There was insufficient information on its management,
oversight, and operational costs. The number of residents the home would house, the necessary retrofitting, and viable solutions to community concerns were also not provided. There was minimal community outreach, and negative community sentiment was not well understood. The presenter at the community

Item No. 26 - 4 meeting seemed to assume the board would pass the proposal without fully grasping the implications of placing the home in this area.
Extensive discussions also occurred regarding the closure of a nearby youth center, operated by a different organization, located near Douglas Ave. The presenters didn’t know why it failed and what would make this location more likely to be a success. Community members expressed concerns over how the Douglas Ave operation drastically and negatively impacted the neighborhood.

With all these concerns in mind, please vote no next Tuesday at that board meeting.`
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
