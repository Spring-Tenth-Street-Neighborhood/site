import { LinkProps, Link } from "@mui/material";
import { forwardRef } from "react";

import { OpenInNewTabIcon } from "../Icons/OpenInNewTabIcon";
import { mergeSxProps } from "../mergeSxProps";

interface ExternalLinkProps extends Omit<LinkProps, "href"> {
  to: string;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  function ForwardRefExternalLink(props, ref) {
    const { children, to, ...otherProps } = props;
    return (
      <Link
        ref={ref}
        {...otherProps}
        href={to}
        target="_blank"
        rel="noopener"
        sx={mergeSxProps(
          { display: "inline-flex", alignItems: "center", gap: 0.5 },
          otherProps.sx
        )}
      >
        {children}
        <OpenInNewTabIcon />
      </Link>
    );
  }
);
