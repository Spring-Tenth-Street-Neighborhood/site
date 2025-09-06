import { Typography, TypographyProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { mergeSxProps } from "../mergeSxProps";

export interface TitleProps
  extends Omit<TypographyProps<"h1">, "component" | "as" | "variant"> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title = forwardRef(
  (props: TitleProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    const { variant, component, ...rest } = props;
    return (
      <Typography
        {...rest}
        ref={ref}
        component={component}
        variant={variant ?? component}
      />
    );
  }
);

Title.displayName = "Title";
