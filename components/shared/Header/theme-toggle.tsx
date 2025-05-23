"use client";

import { useTheme } from "next-themes";
import { IconBtn } from "@/components/ui/IconButton";
import { SunIcon, MoonIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconBtn
      color="primary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="text-orange-500" />
      ) : (
        <MoonIcon className="text-blue-200" />
      )}
    </IconBtn>
  );
};
