import { useLanguageContext } from "../../lib/Language/context";
import { ExternalButtonLink } from "../../lib/Links";

const ContentByLanguage = {
  en: {
    boardMeeting: "Board Meeting",
    signPetition: "Sign the Petition",
    zoomMeeting: "Zoom Meeting",
  },
  es: {
    boardMeeting: "Reunión de la Junta",
    signPetition: "Firmar la Petición",
    zoomMeeting: "Reunión de Zoom",
  },
};

export function Spring3335Links() {
  const { language } = useLanguageContext();
  const content = ContentByLanguage[language];
  return (
    <>
      <ExternalButtonLink to="https://sanmateocounty.legistar.com/MeetingDetail.aspx?ID=1234924&GUID=A5CC7185-D515-4166-9667-B57F0066A392&Options=info|&Search=">
        {content.boardMeeting}
      </ExternalButtonLink>
      <ExternalButtonLink to="https://chng.it/SYb2wGrqZC">
        {content.signPetition}
      </ExternalButtonLink>
      <ExternalButtonLink
        to="mailto:BoardFeedback@smcgov.org?subject=Feedback%20on%203335%20Spring%20St%20Proposal"
        variant="contained"
      >
        Email BoardFeedback@smcgov.org
      </ExternalButtonLink>
      <ExternalButtonLink
        variant="contained"
        to="https://smcgov.zoom.us/j/97944675398"
      >
        {content.zoomMeeting}
      </ExternalButtonLink>
    </>
  );
}
