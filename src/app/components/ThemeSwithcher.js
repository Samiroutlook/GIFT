// components/ThemeSwitcher.js
"use client"; // Add this line
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MotionIconButton
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      whileTap={{ scale: 0.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default ThemeSwitcher;
