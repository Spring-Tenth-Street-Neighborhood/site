import Spring3335WheelchairAccessImage from "./Spring3335WheelchairAccess.jpg";

import { Container, Divider, Stack } from "@mui/material";
import { useLanguageContext } from "../../../lib/Language/context";
import { Layout } from "../../../lib/Layout";
import { Seo } from "../../../lib/Seo/Seo";
import { Text } from "../../../lib/Typography/Text";
import { Title } from "../../../lib/Typography/Title";
import { Image } from "../../../lib/Image";

const ContentByLanguage = {
  en: {
    title: "3335 Spring Street Accessibility and Parking",
    description:
      "Review of the accessibility and parking conditions at 3335 Spring Street.",
    visualObservations: "Visual Observations",
    sidewalkAccessibility: "Sidewalk Accessibility",
    sidewalkAccessibilityText:
      "The following image shows the sidewalk around 3335 Spring Street. The combination of bushes and on-curb parking makes it inaccessible for people using wheelchairs.",
    parkingText:
      "The on-street parking along Tenth Ave is often full due to overflow parking from nearby apartments.",
  },
  es: {
    title:
      "Observaciones de Accesibilidad y Estacionamiento de 3335 Spring Street",
    description:
      "Revisión de las condiciones de accesibilidad y estacionamiento en 3335 Spring Street.",
    visualObservations: "Observaciones Visuales",
    sidewalkAccessibility: "Accesibilidad de la Acera",
    sidewalkAccessibilityText:
      "La siguiente imagen muestra la acera alrededor de 3335 Spring Street. La combinación de arbustos y estacionamiento en la acera la hace inaccesible para personas que usan sillas de ruedas.",
    parkingText:
      "El estacionamiento en la calle a lo largo de Tenth Ave a menudo está lleno debido al estacionamiento desbordado de los apartamentos cercanos.",
  },
};

export default function Spring3335AccessibilityParking() {
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
            <Title component="h2">{content.sidewalkAccessibility}</Title>
            <Stack gap={2}>
              <Title component="h3">{content.sidewalkAccessibility}</Title>
              <Text>{content.sidewalkAccessibilityText}</Text>
              <Text>{content.parkingText}</Text>
              <Image
                src={Spring3335WheelchairAccessImage}
                alt="Wheelchair access at 3335 Spring Street"
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}

export function Head() {
  return (
    <Seo
      title="House Accessibility and Parking"
      image={Spring3335WheelchairAccessImage}
    />
  );
}
