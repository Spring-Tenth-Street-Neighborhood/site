import { Typography, TypographyProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { mergeSxProps } from "../mergeSxProps";

export interface TitleProps
  extends Omit<TypographyProps<"h1">, "component" | "as" | "variant"> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bold?: boolean;
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title = forwardRef(
  (props: TitleProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    const { variant = "h1", bold, sx, color, component, ...rest } = props;
    return (
      <Typography
        {...rest}
        ref={ref}
        component={component ?? "h1"}
        variant={variant}
        sx={mergeSxProps(bold ? { fontWeight: 600 } : {}, sx)}
      />
    );
  }
);

Title.displayName = "Title";
