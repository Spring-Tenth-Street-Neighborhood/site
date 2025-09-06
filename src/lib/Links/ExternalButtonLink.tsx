import { Button, ButtonProps, Link } from "@mui/material";
import { forwardRef } from "react";

import { OpenInNewTabIcon } from "../Icons/OpenInNewTabIcon";

interface ExternalLinkProps extends Omit<ButtonProps, "href"> {
  to: string;
}

export const ExternalButtonLink = forwardRef<
  HTMLAnchorElement,
  ExternalLinkProps
>(function ForwardRefExternalLink(props, ref) {
  const { children, to, ...otherProps } = props;
  return (
    <Button
      ref={ref}
      component={Link}
      {...otherProps}
      href={to}
      target="_blank"
      rel="noopener"
    >
      {children}
      <OpenInNewTabIcon sx={{ marginLeft: 0.5, verticalAlign: "middle" }} />
    </Button>
  );
});
