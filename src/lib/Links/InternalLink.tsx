import { Link as MuiLink, ButtonProps, Button } from "@mui/material";

import { Link as GatsbyLink, type GatsbyLinkProps } from "gatsby";

export interface IInternalLinkProps
  extends Pick<GatsbyLinkProps<any>, "to">,
    ButtonProps {}

export function InternalLink(props: IInternalLinkProps) {
  const { children } = props;
  return (
    <Button component={GatsbyLink} {...props}>
      {children}
    </Button>
  );
}
