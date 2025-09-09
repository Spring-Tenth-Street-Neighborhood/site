import { Box, Stack } from "@mui/material";
import { useLanguageContext } from "../../lib/Language/context";
import { Text } from "../../lib/Typography/Text";
const ContentByLanguage = {
  en: {
    summary:
      "639 Douglas Ave was a transitional housing facility run by Star Vista for 30 years. It housed 7+ men and women in a 3 bedroom house.",
    neighborFeedback: [
      "639 Douglas Ave., RWC – Brief comments re previously run transitional home",
      "The following is a brief anecdotal summary provided by 3 long-term residents living in the very near vicinity of the transitional adult home previously located at 639 Douglas Ave, RWC:",
      "During its tenure, the residents all related that there were multiple occurrences at the house that required police assistance. From one resident’s recollection, the issues which arose that required police assistance were varied and not isolated to one or two occasions. The resident closest to the 639 property did not have specific information as to the details; just that police had to be called on multiple occasions to settle disputes that arose at the dwelling.",
      "Unfortunately, none of the residents recalled how many transitional home residents were housed at the 639 Douglas property, but all commented on the noise, volume of garbage, etc. that were in play during the existence of the transitional home at 639 Douglas Ave., RWC.",
    ],
  },
  es: {
    summary:
      "639 Douglas Ave fue una instalación de vivienda de transición administrada por Star Vista durante 30 años. Alojó a más de 7+ hombres y mujeres en una casa de 3 habitaciones.",
    neighborFeedback: [
      "639 Douglas Ave., RWC – Breves comentarios sobre el hogar de transición que se ejecutó anteriormente",
      "Lo siguiente es un breve resumen anecdótico proporcionado por 3 residentes a largo plazo que viven en las cercanías del hogar de adultos en transición que anteriormente se encontraba en 639 Douglas Ave, RWC:",
      "Durante su mandato, los residentes relacionaron que hubo múltiples ocurrencias en la casa que requirieron la asistencia policial. Según el recuerdo de un residente, los problemas que surgieron y que requirieron la asistencia policial fueron variados y no se aislaron a una o dos ocasiones. El residente más cercano a la propiedad 639 no tenía información específica sobre los detalles; solo que la policía tuvo que ser llamada en múltiples ocasiones para resolver disputas que surgieron en la vivienda.",
      "Desafortunadamente, ninguno de los residentes recordó cuántos residentes del hogar de transición se alojaban en la propiedad 639 Douglas, pero todos comentaron sobre el ruido, el volumen de basura, etc. que estaban en juego durante la existencia del hogar de transición en 639 Douglas Ave., RWC.",
    ],
  },
};

export function DouglasAve639Content() {
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];
  return (
    <Stack gap={2}>
      <Text>{content.summary}</Text>
      <Stack
        gap={2}
        sx={{
          borderLeft: "2px solid",
          borderColor: "divider",
          paddingLeft: 2,
        }}
      >
        {content.neighborFeedback.map((paragraph, index) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </Stack>
    </Stack>
  );
}
