import { Link as MuiLink, LinkProps } from "@mui/material";

import { Link as GatsbyLink, type GatsbyLinkProps } from "gatsby";

export interface InternalLinkProps
  extends Pick<GatsbyLinkProps<any>, "to" | "activeStyle" | "partiallyActive">,
    LinkProps {}

export function InternalLink(props: InternalLinkProps) {
  const { children } = props;
  return (
    <MuiLink component={GatsbyLink} {...props}>
      {children}
    </MuiLink>
  );
}
