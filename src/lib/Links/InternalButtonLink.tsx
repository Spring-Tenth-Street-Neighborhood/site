import { ButtonProps, Button } from "@mui/material";

import { Link as GatsbyLink, type GatsbyLinkProps } from "gatsby";

export interface InternalButtonLinkProps
  extends Pick<GatsbyLinkProps<any>, "to">,
    ButtonProps {}

export function InternalButtonLink(props: InternalButtonLinkProps) {
  const { children } = props;
  return (
    <Button component={GatsbyLink} {...props}>
      {children}
    </Button>
  );
}
