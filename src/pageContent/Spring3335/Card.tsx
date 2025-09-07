import InfoIcon from "@mui/icons-material/Info";
import { type PageProps } from "gatsby";
import { Layout } from "../../lib/Layout";
import { Title } from "../../lib/Typography/Title";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { Text } from "../../lib/Typography/Text";
import { ExternalLink, InternalLink } from "../../lib/Links";
import Spring3335FrontImage from "../../images/spring-3335-front-33.jpg";
import { Span } from "../../lib/Span";
import { Spring3335Links } from "../../pageContent/Spring3335/Links";
import { useLanguageContext } from "../../lib/Language/context";
import { Spring3335CardListItems } from "./CardListItems";

const ContentByLanguage = {
  en: {
    title: "3335 Spring Street Halfway house Board Meeting",
    helloNeighbors: `Hello neighbors!`,
    theCountyGovernment: `The county government is trying to fast track this project into our neighborhood without allowing us residents enough time and information to discuss it. This will affect our neighborhood for decades.`,
    actionNeeded: `Action Needed:`,
    attendMeeting: `Attend the upcoming board meeting to voice your concerns and stay informed about this important issue.`,
    info1: `The last meeting required less than 30 minutes of time.`,
    info2: `It was easy to provide public comment in `,
    info3: `Zoom`,
    info4: `Simply raise your hand.`,
    whenWhere: "When & Where",
    date: (
      <>
        Date: <strong>Tuesday, September 9, 2025 at 9 AM</strong>
      </>
    ),
    zoomLink: "Zoom Link:",
    location: (
      <>
        Location:{" "}
        <strong>500 County Center Chambers, 1st Fl. Redwood City, CA</strong>
      </>
    ),
    meetingDetails: "Meeting Details",
    boardProposal: (
      <>
        <strong>Board Proposal:</strong> Spend{" "}
        <Text component="span" color="warning" bold>
          $2 million
        </Text>{" "}
        of our tax payer dollars to purchase and renovate the property at 3335
        Spring Street into a halfway house for up to 12 residents.
      </>
    ),
    proposalLink: "Proposal",
    meetingLink: "Meeting",
    flyerLink: "Flyer",
    neighborhoodConcerns: "Neighborhood Concerns",
    theNeighborhoodAround:
      "The neighborhood around 3335 Spring Street are very concerned regarding the proposed halfway house.",
    petitionLink: "Petition with at least 123 signatures",
  },
  es: {
    title: "Reunión de la Junta de 3335 Spring Street Casa de Medio Camino",
    helloNeighbors: `¡Hola vecinos!`,
    theCountyGovernment: `El gobierno del condado está tratando de acelerar este proyecto en nuestro vecindario sin permitir que nosotros, los residentes, tengamos suficiente tiempo e información para discutirlo. Esto afectará a nuestro vecindario durante décadas.`,
    actionNeeded: `Acción Necesaria:`,
    attendMeeting: `Asista a la próxima reunión de la junta para expresar sus preocupaciones y mantenerse informado sobre este importante tema.`,
    info1: `La última reunión requirió menos de 30 minutos de tiempo.`,
    info2: `Fue fácil proporcionar comentarios públicos en `,
    info3: `Zoom`,
    info4: `Simplemente levante la mano.`,
    whenWhere: "Cuándo y Dónde",
    date: (
      <>
        Fecha: <strong>Martes, 9 de septiembre de 2025 a las 9 AM</strong>
      </>
    ),
    zoomLink: "Enlace de Zoom:",
    location: (
      <>
        Ubicación:{" "}
        <strong>500 County Center Chambers, 1st Fl. Redwood City, CA</strong>
      </>
    ),
    meetingDetails: "Detalles de la Reunión",
    boardProposal: (
      <>
        <strong>Propuesta de la Junta:</strong> Gastar{" "}
        <Text component="span" color="warning" bold>
          $2 millones
        </Text>{" "}
        de nuestros dólares de impuestos para comprar y renovar la propiedad en
        3335 Spring Street y convertirla en una casa de medio camino para hasta
        12 residentes.
      </>
    ),
    proposalLink: "Propuesta",
    meetingLink: "Reunión",
    flyerLink: "Volante",
    neighborhoodConcerns: "Preocupaciones del Vecindario",
    theNeighborhoodAround:
      "El vecindario alrededor de 3335 Spring Street está muy preocupado por la propuesta de una casa de medio camino.",
    petitionLink: "Petición con al menos 123 firmas",
  },
};

export function Spring3335Card() {
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];
  return (
    <Card>
      <CardContent>
        <Stack gap={1}>
          <Text variant="h2" bold>
            {content.title}
          </Text>
          <Text>
            <strong>{content.helloNeighbors}</strong>
            <br />
            {content.theCountyGovernment}
          </Text>
          <CardMedia
            component="img"
            src={Spring3335FrontImage}
            alt="3335 Spring Street Halfway House"
          />
          <Text component="span" color="textSecondary" bold>
            {content.actionNeeded}
          </Text>
          <Text>{content.attendMeeting}</Text>
          <Text>
            <Span alignContent={"center"} display="flex" gap={1}>
              <InfoIcon color="primary" />
              <Stack display="inline-flex">
                {content.info1}
                <Span>
                  {content.info2}{" "}
                  <ExternalLink to="https://smcgov.zoom.us/j/97944675398">
                    {content.info3}
                  </ExternalLink>
                  .
                </Span>
                <Span>{content.info4}</Span>
              </Stack>
            </Span>
          </Text>
          <Text variant="h3" bold>
            {content.whenWhere}
          </Text>
          <Text>{content.date}</Text>
          <Text>
            {content.zoomLink}{" "}
            <ExternalLink to="https://smcgov.zoom.us/j/97944675398">
              https://smcgov.zoom.us/j/97944675398
            </ExternalLink>
          </Text>
          <Text>{content.location}</Text>
          <Text variant="h3" bold>
            {content.meetingDetails}
          </Text>
          <Text>
            {content.boardProposal}{" "}
            <ExternalLink to="https://www.smcgov.org/ceo/south-county-youth-housing">
              {content.proposalLink}
            </ExternalLink>{" "}
            <ExternalLink to="https://sanmateocounty.legistar.com/LegislationDetail.aspx?ID=7649069&GUID=3A3209C8-010C-4963-BB4B-FA9DB0D34D96&Options=&Search=">
              {content.meetingLink}
            </ExternalLink>{" "}
            <InternalLink to="/spring-st-3335">
              {content.flyerLink}
            </InternalLink>
          </Text>
          <Divider />
          <Text variant="h3" bold component="span" display="block">
            {content.neighborhoodConcerns}
          </Text>
          <Text>
            {content.theNeighborhoodAround}
            <ExternalLink to="https://chng.it/SYb2wGrqZC">
              {content.petitionLink}
            </ExternalLink>
            <Spring3335CardListItems />
          </Text>
        </Stack>
        <Divider />
      </CardContent>
      <CardActions>
        <Spring3335Links />
      </CardActions>
    </Card>
  );
}
