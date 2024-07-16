// app/page.js
"use client";
import ThemeSwitcher from "@/app/components/ThemeSwithcher";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vw",
        }}
      >
        <Image
          layout="fill"
          sizes="cover"
          src="/img3.jpg"
          alt="Picture of the author"
        />
      </div>
      <Flex
        bg="#232323"
        w="50vw"
        h="100vh"
        mx="auto"
        borderRadius="15"
        align="center"
        justify="center"
      >
        Hello
      </Flex>
    </>
  );
}
