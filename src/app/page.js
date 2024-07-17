// app/page.js
"use client";
import ThemeSwitcher from "@/app/components/ThemeSwithcher";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Profile from "./components/Profile";
import About from "./components/About";

export default function HomePage() {
  return (
    <>
      <div
        style={{
          top: "0",
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/imgbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Flex
        flexDirection={"column"}
        mt={14}
        maxW="950px"
        h="100vh"
        mx="auto"
        pt={14}
        borderTopRadius="15px"
        algin="center"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.3)", // Semi-transparent white background
          border: "1px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Profile />
        <About />
      </Flex>
    </>
  );
}
