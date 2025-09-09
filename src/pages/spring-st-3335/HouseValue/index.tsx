import { Container, Divider, Stack } from "@mui/material";
import { useLanguageContext } from "../../../lib/Language/context";
import { Layout } from "../../../lib/Layout";
import { Seo } from "../../../lib/Seo/Seo";
import { Text } from "../../../lib/Typography/Text";
import { ExternalLink } from "../../../lib/Links";
import { Title } from "../../../lib/Typography/Title";
import PriceEstimate639DouglasAveImage from "./PriceEstimate639DouglasAve.png";
import PriceEstimate646DouglasAveImage from "./PriceEstimate646DouglasAve.png";
import PriceEstimate632DouglasAveImage from "./PriceEstimate632DouglasAve.png";
import { Image } from "../../../lib/Image";
import { Spring3335Links } from "../../../pageContent/Spring3335/Links";
import { DouglasAve639Content } from "../../../pageContent/DouglasAve639/Content";

const ContentByLanguage = {
  en: {
    title: "House Value Analysis",
    description:
      "Review of the effect of transitional housing on nearby property values.",
    claim:
      "The claims are that transitional housing has no effect on nearby property values. Let's take a look at the data.",
    background: "Background",
    caseStudyTitle: "Case Study",
    caseStudy:
      "The 639 Douglas Avenue transitional housing project in Redwood City is a case study for impact in property values and crime.",
    onZillow: "On Zillow, we can see the ",
    propertyValueHistory: "property value history for 639 Douglas Avenue",
    listedOnMarket:
      "It was recently listed on the market on August 8, 2025. Prior to that, its estimate was around $1.4M.Its estimate dropped by approximately $300,000, and is being sold for $1.088M. This is a drop of 27.5%!",
    neighbors646: "Neighbors 646 Douglas Ave",
    neighbors646Price: "Price decreasing since 2019, from $1.2M to $1.05M",
    neighbors632: "Neighbors 632 Douglas Ave",
    neighbors632Price: "Price decreasing since 2019, from $1.2M to $924K",
    conclusion: "Conclusion",
    conclusionText:
      "By any reasonable expectation, this is a significant decrease in value, and we can expect the same for 3335 Spring St, and nearby properties. In addition, we will be required to disclose the presence of a transitional housing facility when selling our homes, which will impact our property values.",
  },
  es: {
    title: "Análisis del Valor de la Vivienda",
    description:
      "Revisión del efecto de la vivienda de transición en los valores de las propiedades cercanas.",
    claim:
      "Las afirmaciones son que la vivienda de transición no tiene efecto en los valores de las propiedades cercanas. Echemos un vistazo a los datos.",
    background: "Antecedentes",
    caseStudyTitle: "Estudio de Caso",
    caseStudy:
      "El proyecto de vivienda de transición en 639 Douglas Avenue en Redwood City es un estudio de caso sobre el impacto en los valores de las propiedades y el crimen.",
    onZillow: "En Zillow, podemos ver el ",
    propertyValueHistory:
      "historial de valor de la propiedad para 639 Douglas Avenue",
    listedOnMarket:
      "Recientemente se puso en el mercado el 8 de agosto de 2025. Antes de eso, su estimación era de alrededor de $1.4M. Su estimación bajó aproximadamente $300,000, y se está vendiendo por $1.088M. ¡Esto es una caída del 27.5%!",
    neighbors646: "Vecinos 646 Douglas Ave",
    neighbors646Price: "Precio disminuyendo desde 2019, de $1.2M a $1.05M",
    neighbors632: "Vecinos 632 Douglas Ave",
    neighbors632Price: "Precio disminuyendo desde 2019, de $1.2M a $924K",
    conclusion: "Conclusión",
    conclusionText:
      "Por cualquier expectativa razonable, esta es una disminución significativa en el valor, y podemos esperar lo mismo para 3335 Spring St, y las propiedades cercanas. Además, se nos requerirá divulgar la presencia de una instalación de vivienda de transición al vender nuestras casas, lo que impactará en los valores de nuestras propiedades.",
  },
};

export default function HouseValuePage() {
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
            <Title component="h2">639 Douglas Avenue</Title>
            <Text>{content.claim}</Text>
            <Title component="h3">{content.background}</Title>
            <DouglasAve639Content />
            <Title component="h3">{content.caseStudyTitle}</Title>
            <Text>{content.caseStudy}</Text>
            <Text>
              {content.onZillow}
              <ExternalLink to="https://www.zillow.com/homedetails/639-Douglas-Ave-Redwood-City-CA-94063/15567040_zpid/?utm_campaign=zillowwebmessage&utm_medium=referral&utm_source=txtshare">
                {content.propertyValueHistory}
              </ExternalLink>
              .
            </Text>
            <Text>{content.listedOnMarket}</Text>
            <Image
              src={PriceEstimate639DouglasAveImage}
              alt="Price Estimate for 639 Douglas Avenue"
            />
            <Title component="h2">{content.neighbors646}</Title>
            <Text>{content.neighbors646Price}</Text>
            <Image
              src={PriceEstimate646DouglasAveImage}
              alt="Price Estimate for 646 Douglas Avenue"
            />
            <Text>
              <ExternalLink to="https://www.zillow.com/homedetails/646-Douglas-Ave-Redwood-City-CA-94063/15567108_zpid/">
                646 Douglas Ave
              </ExternalLink>
            </Text>
            <Title component="h2">{content.neighbors632}</Title>
            <Text>{content.neighbors632Price}</Text>
            <Image
              src={PriceEstimate632DouglasAveImage}
              alt="Price Estimate for 632 Douglas Avenue"
            />
            <Text>
              <ExternalLink to="https://www.zillow.com/homedetails/632-Douglas-Ave-Redwood-City-CA-94063/15567106_zpid/">
                632 Douglas Ave
              </ExternalLink>
            </Text>
          </Stack>
          <Stack gap={2}>
            <Title component="h2">{content.conclusion}</Title>
            <Text>{content.conclusionText}</Text>
            <Stack gap={2} direction={{ xs: "column", sm: "row" }}>
              <Spring3335Links />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}

export function Head() {
  return <Seo title="House Value Analysis" />;
}
