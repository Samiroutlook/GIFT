// components/About.js
import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

function About() {
  return (
    <Flex
      px={{ base: "5", md: "20" }} // Adjust padding based on screen size
      py={{ base: "8", md: "16" }} // Adjust padding top and bottom based on screen size
      h={{ base: "auto", md: "100vh" }} // Adjust height for smaller screens and full height for medium screens
      flexDirection={"column"}
      textAlign={"center"}
      justify={"space-between"} // Ensure space between content and footer
      position={"relative"} // Keep the footer at the bottom
    >
      <Box>
        <Text fontWeight={"600"} fontSize={{ base: "xl", md: "2xl" }}>
          Aʙᴏᴜᴛ ᴍᴇ:-
        </Text>
        <Text mt={5} fontSize={{ base: "md", md: "lg" }}>
          Hᴇʟʟᴏ, I ᴀᴍ Sᴀᴍɪʀ ғʀᴏᴍ Bᴀɴɢʟᴀᴅᴇsʜ 🇧🇩. I ᴀᴍ ɪɴ ᴄʟᴀss VII 📚 ᴀɴᴅ ʜᴀᴠᴇ
          ᴏᴠᴇʀ 3 ʏᴇᴀʀs ᴏғ ᴇxᴘᴇʀɪᴇɴᴄᴇ ɪɴ ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ 🌐. I ʟᴏᴠᴇ ʀɪᴅɪɴɢ ʙɪᴋᴇs
          🏍️, ʙᴜɪʟᴅɪɴɢ ᴡᴇʙsɪᴛᴇs 💻, ᴀɴᴅ ʟᴇᴀʀɴɪɴɢ ɴᴇᴡ ᴛʜɪɴɢs 📖. Mʏ ᴅʀᴇᴀᴍ ɪs ᴛᴏ
          ʙᴇᴄᴏᴍᴇ ᴀ ғᴜʟʟ-sᴛᴀᴄᴋ ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴇʀ 👨‍💻, ᴀɴᴅ ᴍʏ ᴅʀᴇᴀᴍ ᴜɴɪᴠᴇʀsɪᴛʏ ɪs
          Oxғᴏʀᴅ Uɴɪᴠᴇʀsɪᴛʏ 🎓. I ᴀᴍ ᴘʀᴏɢʀᴇssɪɴɢ ᴡɪᴛʜ ᴍʏ sᴋɪʟʟs ᴀɴᴅ ᴄʀᴇᴀᴛɪᴠɪᴛʏ
          ᴛᴏ ᴀᴄʜɪᴇᴠᴇ ᴍʏ ɢᴏᴀʟs 🌟.
        </Text>
        <Link href="https://samiroutlook.github.io/Samir/" passHref>
          <Button
            as="a"
            w={"100px"}
            mb={{ base: "4", md: "8" }} // Adjust margin bottom based on screen size
            mt={5}
            mx={"auto"}
            colorScheme={"teal"}
          >
            Pʀᴏғɪʟᴏ
          </Button>
        </Link>
      </Box>
      <Flex
        w={"full"}
        mx={"auto"}
        direction={{ base: "column", md: "row" }} // Adjust direction based on screen size
        justify={"space-between"}
        mt={8} // Adjust top margin for spacing
      >
        <Box mb={{ base: "8", md: "0" }}>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Birth Day:- 19/July/2024🎂
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Hobby:- Bike Riding🏍️
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Favorite Sport:- FootBall⚽
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Favorite Subject:- Since📚
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Birth Day Gift:- This website❤
          </Text>
        </Box>
        <Box>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Favorite Song:- MokingBird🎧
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Favorite Bike:- Yamaha MT-15🏍️
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Favorite Player:- Cristiano Ronaldo🇵🇹
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Favorite Personality:- Introvert🙂
          </Text>
          <Text fontWeight={"600"} fontSize={{ base: "sm", md: "md" }}>
            Favorite Food:- Nothing😶
          </Text>
        </Box>
      </Flex>
      <Box
        bg={"#457FE5"}
        borderTopRadius="15px"
        w={"full"}
        h={{ base: "auto", md: "14" }} // Adjust height based on screen size
        textAlign={"center"}
        py={"auto"}
      >
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight={"700"}
          color={"white"}
        >
          🎉🎉Good Bye! Don't scroll its End🎉🎉
        </Text>
      </Box>
    </Flex>
  );
}

export default About;
