import React, { ReactNode } from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface BtnProps
  extends Omit<MuiButtonProps, "color" | "size" | "startIcon" | "endIcon" | "variant"> {
  label: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Btn({
  label,
  color = "primary",
  size = "medium",
  variant = "contained",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...rest
}: BtnProps): React.ReactElement {
  return (
    <MuiButton
      color={color}
      size={size}
      variant={variant}
      disabled={isLoading || disabled}
      startIcon={
        isLoading ? <CircularProgress size={20} color="inherit" /> : leftIcon
      }
      endIcon={rightIcon}
      {...rest}
    >
      {label}
    </MuiButton>
  );
}
