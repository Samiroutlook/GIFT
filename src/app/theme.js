// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "gray.800")(props),
      },
    }),
  },
  colors: {
    customWhiteAlpha: "",
    brand: {
      50: "#f5f7ff",
      100: "#e1e6ff",
      200: "#c4cfff",
      300: "#a0b5ff",
      400: "#809aff",
      500: "#5875ff",
      600: "#3a5bff",
      700: "#2d46cc",
      800: "#233699",
      900: "#1b2966",
    },
  },
});

export default theme;
