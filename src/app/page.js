// app/page.js
"use client";
import { Flex } from "@chakra-ui/react";
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
        mt={{ base: "8", md: "14" }} // Adjust margin top based on screen size
        maxW="950px"
        mx="auto"
        pt={{ base: "8", md: "14" }} // Adjust padding top based on screen size
        borderTopRadius="15px"
        backdropFilter="blur(10px)"
        backgroundColor="rgba(255, 255, 255, 0.3)" // Semi-transparent white background
        border="1px solid rgba(255, 255, 255, 0.18)"
        boxShadow="0 4px 6px 0 rgba(0, 0, 0, 0.2)"
      >
        <Profile />
        <About />
      </Flex>
    </>
  );
}
