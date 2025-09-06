import { Button, ButtonProps, Link } from "@mui/material";
import { forwardRef } from "react";

import { OpenInNewTabIcon } from "../Icons/OpenInNewTabIcon";

interface ExternalLinkProps extends Omit<ButtonProps, "href"> {
  openInNewTabIsVisible?: boolean;
  to: string;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  function ForwardRefExternalLink(props, ref) {
    const { children, openInNewTabIsVisible, to, ...otherProps } = props;
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
        {openInNewTabIsVisible && (
          <OpenInNewTabIcon sx={{ marginLeft: 0.5, verticalAlign: "middle" }} />
        )}
      </Button>
    );
  }
);

ExternalLink.defaultProps = {
  openInNewTabIsVisible: true,
};
