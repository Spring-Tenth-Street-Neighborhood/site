import { type SxProps, type Theme } from "@mui/material/styles";

export function mergeSxProps(
  ...sxPropsArray: (SxProps<Theme> | undefined)[]
): SxProps<Theme> {
  return sxPropsArray
    .flatMap((sxProps) =>
      Array.isArray(sxProps) ? sxProps : ([sxProps] as SxProps<Theme>)
    )
    .filter(Boolean);
}
