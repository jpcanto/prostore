"use client";

import { useTheme } from "next-themes";
import { IconBtn } from "@/components/ui/IconButton";
import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <IconBtn
      color="primary"
      size="small"
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
