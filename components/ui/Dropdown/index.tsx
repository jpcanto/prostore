"use client";

import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";

interface DropdownProps {
  options: { label: string; onClick: () => void }[];
  dropdownLabel: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, dropdownLabel }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>{dropdownLabel}</Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option.label} onClick={option.onClick}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
