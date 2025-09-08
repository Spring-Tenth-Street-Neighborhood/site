import Spring3335Chimneytilt2Image from "./Spring3335Chimneytilt2.jpg";
import Spring3335ChimneytiltImage from "./Spring3335Chimneytilt.jpg";
import Spring3335RoofStructuralZoom3Image from "./Spring3335RoofStructuralZoom3.jpg";
import Spring3335RoofStructuralZoom2Image from "./Spring3335RoofStructuralZoom2.jpg";
import Spring3335RoofStructuralZoom1Image from "./Spring3335RoofStructuralZoom1.jpg";

import { Container, Divider, Stack } from "@mui/material";
import { useLanguageContext } from "../../../lib/Language/context";
import { Layout } from "../../../lib/Layout";
import { Seo } from "../../../lib/Seo/Seo";
import { Text } from "../../../lib/Typography/Text";
import { Title } from "../../../lib/Typography/Title";
import { Image } from "../../../lib/Image";
import { Spring3335Links } from "../../../pageContent/Spring3335/Links";

const ContentByLanguage = {
  en: {
    title: "3335 Spring Street Structural Observations",
    description:
      "Review of the structural observations made at 3335 Spring Street.",
    visualObservations: "Visual Observations",
    roofStructureWarping: "Roof Structure Warping",
    roofStructureWarpingText:
      "The following images shows a clear warping of the roof structure with misaligned boards. This is not a shadow. The sun is to the right of the image!",
    leaningChimney: "Leaning Chimney",
    leaningChimneyText:
      "The following images show a leaning chimney. In December, the chimney was wrapped in plastic and leaning further.",
  },
  es: {
    title: "Observaciones Estructurales de 3335 Spring Street",
    description:
      "Revisión de las observaciones estructurales realizadas en 3335 Spring Street.",
    visualObservations: "Observaciones Visuales",
    roofStructureWarping: "Deformación de la Estructura del Techo",
    roofStructureWarpingText:
      "Las siguientes imágenes muestran una clara deformación de la estructura del techo con tablas desalineadas. Esto no es una sombra. ¡El sol está a la derecha de la imagen!",
    leaningChimney: "Chimenea Inclinada",
    leaningChimneyText:
      "Las siguientes imágenes muestran una chimenea inclinada. En diciembre, la chimenea fue envuelta en plástico e inclinada aún más.",
  },
};

export default function Spring3335StructuralObservations() {
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
            <Title component="h2">{content.visualObservations}</Title>
            <Stack gap={2}>
              <Title component="h3">{content.roofStructureWarping}</Title>
              <Text>{content.roofStructureWarpingText}</Text>
              <Image
                src={Spring3335RoofStructuralZoom1Image}
                alt="Roof misalignment at 3335 Spring Street"
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                flexWrap="nowrap"
                width="100%"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                {" "}
                <Image
                  src={Spring3335RoofStructuralZoom2Image}
                  alt="Roof misalignment at 3335 Spring Street"
                  sx={{
                    maxWidth: { sm: "calc(50% - 8px)", xs: "100%" },
                  }}
                />
                <Image
                  src={Spring3335RoofStructuralZoom3Image}
                  alt="Roof misalignment at 3335 Spring Street"
                  sx={{
                    maxWidth: { sm: "calc(50% - 8px)", xs: "100%" },
                  }}
                />
              </Stack>
            </Stack>
            <Stack gap={2}>
              <Title component="h3">{content.leaningChimney}</Title>
              <Text>{content.leaningChimneyText}</Text>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                flexWrap="nowrap"
                width="100%"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Image
                  src={Spring3335ChimneytiltImage}
                  alt="Leaning chimney at 3335 Spring Street"
                  sx={{
                    maxWidth: { sm: "calc(50% - 8px)", xs: "100%" },
                  }}
                />
                <Image
                  src={Spring3335Chimneytilt2Image}
                  alt="Leaning chimney at 3335 Spring Street"
                  sx={{
                    maxWidth: { sm: "calc(50% - 8px)", xs: "100%" },
                  }}
                />
              </Stack>
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
      title="House Value Analysis"
      image={Spring3335RoofStructuralZoom1Image}
    />
  );
}
