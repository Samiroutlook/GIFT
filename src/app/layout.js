// app/layout.js
"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/app/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Chakra UI App</title>
      </head>
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
