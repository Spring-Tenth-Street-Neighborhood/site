import { Text } from "../../lib/Typography/Text";
import { ExternalLink, InternalLink } from "../../lib/Links";
import { useLanguageContext } from "../../lib/Language/context";

const ContentByLanguage = {
  en: {
    LettersToTheBoard: "Letters to the Board of Supervisors",
    fromAConcernedResident: "from concerned residents and voters",
    lossOfPropertyTax:
      "Loss of $22,602.12 in annual property tax revenue for the county and our neighborhood.",
    approximatelyLoss:
      "Approximately $80,000 in loss of interest per year. (modest 4% return)",
    initialRepairs:
      "The house has structural issues, and was expanded without permits.",
    accessibilityParking: "The house has accessibility and parking issues.",
    yearlyCostsSupervisory: "Yearly costs for supervisory 24 hour services.",
    yearlyCostsMaintenance: "Yearly costs for maintenance and repair.",
    priorExampleAt:
      "Prior example at 3787, 3787 Hoover Street and 1143 Marsh Road",
    plansToPlace: "Plans to place 12 residents in a single-family home.",
    initialProposal:
      'Initial proposal: "begin with no more than six residents at a time during the initial six months of operation".',
    messagingIndicated: "Messaging indicated 12 men and women over time.",
    precedence: "Precedence",
    serviceLeague: "Service League of San Mateo",
    operation1: (
      <>
        "operate five, six-bed homes{" "}
        <Text component="span" color="warning" bold>
          (2 for women* and 3 for men)
        </Text>{" "}
        in residential settings throughout Redwood City."
      </>
    ),
    operation2: (
      <>
        In other words, up to{" "}
        <Text component="span" color="warning" bold>
          18
        </Text>{" "}
        people could be housed at once.
      </>
    ),
    operation3: `Our neighborhood is not equipped to handle 12-18 residents, or their
            associated traffic, sewage service, parking, and other
            infrastructure needs.`,
    legalRecourse: "Legal recourse",
    zoningLaws:
      "Residential neighborhoods can challenge the placement of such facilities through local zoning laws and regulations.",
    legalPrecedence:
      "Legal Precedence: https://supreme.justia.com/cases/federal/us/416/1/",
    supremeCourt:
      "The U.S. Supreme Court allowed the legislature to draw distinctions that limit the number of unrelated people who can constitute a family.",
    increaseTraffic: "Increase in traffic and noise in the area.",
    safetySecurity: "Safety and security for local residents.",
    impactPropertyValues: "Impact on property values in the neighborhood.",
  },
  es: {
    LettersToTheBoard: "Cartas a la Junta de Supervisores",
    fromAConcernedResident: "de residentes y votantes preocupados",
    lossOfPropertyTax:
      "Pérdida de $22,602.12 en ingresos anuales por impuestos a la propiedad para el condado y nuestro vecindario.",
    approximatelyLoss:
      "Aproximadamente $80,000 en pérdida de intereses por año. (modesto retorno del 4%)",
    initialRepairs:
      "La casa tiene problemas estructurales y fue ampliada sin permisos.",
    accessibilityParking:
      "La casa tiene problemas de accesibilidad y estacionamiento.",
    yearlyCostsSupervisory:
      "Costos anuales por servicios de supervisión las 24 horas.",
    yearlyCostsMaintenance: "Costos anuales de mantenimiento y reparación.",
    priorExampleAt:
      "Ejemplo previo en 3787, 3787 Hoover Street y 1143 Marsh Road",
    plansToPlace:
      "Planes para colocar a 12 residentes en una casa unifamiliar.",
    initialProposal:
      'Propuesta inicial: "comenzar con no más de seis residentes a la vez durante los primeros seis meses de operación".',
    messagingIndicated: "El mensaje indicó 12 hombres y mujeres con el tiempo.",
    precedence: "Precedencia",
    serviceLeague: "Service League de San Mateo",
    operation1: (
      <>
        "operar cinco casas de seis camas{" "}
        <Text component="span" color="warning" bold>
          (2 para mujeres* y 3 para hombres)
        </Text>{" "}
        en entornos residenciales en todo Redwood City."
      </>
    ),
    operation2: (
      <>
        En otras palabras, hasta{" "}
        <Text component="span" color="warning" bold>
          18
        </Text>{" "}
        personas podrían ser alojadas a la vez.
      </>
    ),
    operation3: `Nuestro vecindario no está equipado para manejar de 12 a 18 residentes, o sus
            necesidades asociadas de tráfico, servicio de alcantarillado, estacionamiento y otra
            infraestructura.`,
    legalRecourse: "Recurso legal",
    zoningLaws:
      "Los vecindarios residenciales pueden impugnar la colocación de tales instalaciones a través de las leyes y regulaciones de zonificación locales.",
    legalPrecedence:
      "Precedencia legal: https://supreme.justia.com/cases/federal/us/416/1/",
    supremeCourt:
      "La Corte Suprema de los EE. UU. permitió que la legislatura hiciera distinciones que limitan el número de personas no relacionadas que pueden constituir una familia.",
    increaseTraffic: "Aumento del tráfico y ruido en el área.",
    safetySecurity: "Seguridad para los residentes locales.",
    impactPropertyValues:
      "Impacto en los valores de las propiedades en el vecindario.",
  },
};

export function Spring3335CardListItems() {
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];
  return (
    <ul>
      <li>
        {content.LettersToTheBoard}:{" "}
        <InternalLink to="/spring-st-3335/lettersToTheBoard/">
          {content.fromAConcernedResident}
        </InternalLink>
      </li>
      <li>
        <ExternalLink to="https://county-taxes.net/ca-sanmateo/services/property-tax/c2FubWF0ZW8tY2E6Z3NneF9wcm9wZXJ0eV90YXg6cGFyZW50czoxMzM5MjRmYi1kNzE2LTExZWMtOTZjMy0wMDUwNTZhNDQzNDc=/bills/a0539f7f-3888-11ef-be3b-005056a4afdb#parcel">
          {content.lossOfPropertyTax}
        </ExternalLink>
      </li>
      <li>{content.approximatelyLoss}</li>
      <li>
        <InternalLink to="/spring-st-3335/structure">
          {content.initialRepairs}
        </InternalLink>
      </li>
      <li>
        <InternalLink to="/spring-st-3335/accessibilityParking">
          {content.accessibilityParking}
        </InternalLink>
      </li>
      <li>{content.yearlyCostsSupervisory}</li>
      <li>
        {content.yearlyCostsMaintenance}{" "}
        <ul>
          <li>
            <ExternalLink to="https://www.smcgov.org/ceo/repairs-transitional-housing-service-league-san-mateo-county">
              {content.priorExampleAt}
            </ExternalLink>
          </li>
        </ul>
      </li>
      <li>
        {content.plansToPlace}
        <ul>
          <li>{content.initialProposal}</li>
          <li>{content.messagingIndicated}</li>
        </ul>
      </li>
      <li>
        {content.precedence}:{" "}
        <ExternalLink to="https://serviceleague.org/get-help/transitional-housing.html#:~:text=We%20operate%20five%2C%20six%2Dbed%20homes%20(2%20for%20women*%20and%203%20for%20men)%20in%20residential%20settings%C2%A0throughout%20Redwood%20City.">
          {content.serviceLeague}
        </ExternalLink>
        <ul>
          <li>{content.operation1}</li>
          <li>{content.operation2}</li>
          <li>{content.operation3}</li>
        </ul>
      </li>
      <li>
        {content.legalRecourse}:
        <ul>
          <li>{content.zoningLaws}</li>
          <li>
            <ExternalLink to="https://supreme.justia.com/cases/federal/us/416/1/">
              {content.legalPrecedence}
            </ExternalLink>
          </li>
          <li>{content.supremeCourt}</li>
        </ul>
      </li>
      <li>{content.increaseTraffic}</li>
      <li>{content.safetySecurity}</li>
      <li>{content.impactPropertyValues}</li>
    </ul>
  );
}
