import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface BtnProps
  extends Omit<MuiButtonProps, "color" | "size" | "variant"> {
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  isLoading?: boolean;
}

export function Btn({
  children,
  color = "primary",
  size = "medium",
  variant = "contained",
  isLoading = false,
  disabled,
  ...rest
}: BtnProps): React.ReactElement {
  return (
    <MuiButton
      color={color}
      size={size}
      variant={variant as MuiButtonProps["variant"]}
      disabled={isLoading || disabled}
      className="!text-xs !uppercase"
      {...rest}
    >
      {children}
    </MuiButton>
  );
}
