import { Typography, TypographyProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { mergeSxProps } from "../mergeSxProps";

export interface TextProps
  extends Omit<TypographyProps<"p">, "component" | "as"> {
  bold?: boolean;
  component?: "span" | "label";
}

export const Text = forwardRef(
  (props: TextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    const { variant = "body1", bold, sx, color, component, ...rest } = props;
    return (
      <Typography
        {...rest}
        ref={ref}
        component={component ?? "p"}
        variant={variant}
        sx={mergeSxProps(bold ? { fontWeight: 600 } : {}, sx)}
      />
    );
  }
);

Text.displayName = "Text";
