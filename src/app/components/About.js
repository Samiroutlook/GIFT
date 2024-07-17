import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import Link from "next/link";

function About() {
  return (
    <Flex px={"5"} h={"250"} flexDirection={"column"} textAlign={"center"}>
      <Text fontWeight={"600"} fontSize={"larger"}>
        Aʙᴏᴜᴛ ᴍᴇ:-
      </Text>
      <Text mt={5} fontSize={"large"}>
        Hᴇʟʟᴏ, I ᴀᴍ Sᴀᴍɪʀ ғʀᴏᴍ Bᴀɴɢʟᴀᴅᴇsʜ 🇧🇩. I ᴀᴍ ɪɴ ᴄʟᴀss VII 📚 ᴀɴᴅ ʜᴀᴠᴇ ᴏᴠᴇʀ
        3 ʏᴇᴀʀs ᴏғ ᴇxᴘᴇʀɪᴇɴᴄᴇ ɪɴ ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ 🌐. I ʟᴏᴠᴇ ʀɪᴅɪɴɢ ʙɪᴋᴇs 🏍️,
        ʙᴜɪʟᴅɪɴɢ ᴡᴇʙsɪᴛᴇs 💻, ᴀɴᴅ ʟᴇᴀʀɴɪɴɢ ɴᴇᴡ ᴛʜɪɴɢs 📖. Mʏ ᴅʀᴇᴀᴍ ɪs ᴛᴏ ʙᴇᴄᴏᴍᴇ
        ᴀ ғᴜʟʟ-sᴛᴀᴄᴋ ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴇʀ 👨‍💻, ᴀɴᴅ ᴍʏ ᴅʀᴇᴀᴍ ᴜɴɪᴠᴇʀsɪᴛʏ ɪs Oxғᴏʀᴅ
        Uɴɪᴠᴇʀsɪᴛʏ 🎓. I ᴀᴍ ᴘʀᴏɢʀᴇssɪɴɢ ᴡɪᴛʜ ᴍʏ sᴋɪʟʟs ᴀɴᴅ ᴄʀᴇᴀᴛɪᴠɪᴛʏ ᴛᴏ ᴀᴄʜɪᴇᴠᴇ
        ᴍʏ ɢᴏᴀʟs 🌟.
      </Text>
      <Link href="https://samiroutlook.github.io/Samir/" passHref>
        <Button
          as="a"
          w={"100px"}
          mb={24}
          py={5}
          mt={5}
          mx={"auto"}
          colorScheme={"teal"}
        >
          Pʀᴏғɪʟᴏ
        </Button>
      </Link>
      <Flex w={"70%"} mx={"auto"} justify={"space-between"}>
        <Box>
          <Text fontWeight={"600"}>Birth Day:- 19/July/2024🎂</Text>
          <Text fontWeight={"600"}>Hobby:- Bike Riding🏍️</Text>
          <Text fontWeight={"600"}>Favorite Sport:- FootBall⚽</Text>
          <Text fontWeight={"600"}>Favorite Subject:- Since📚 </Text>
          <Text fontWeight={"600"}>Birth Day Gift:- This website❤</Text>
        </Box>
        <Box>
          <Text fontWeight={"600"}>Favorite Song:- MokingBird🎧</Text>
          <Text fontWeight={"600"}>Favorite Bike:- Yamaha MT-15🏍️</Text>
          <Text fontWeight={"600"}>Favorite Player:- Cristiano Ronaldo🇵🇹</Text>
          <Text fontWeight={"600"}>Favorite Personality:- Introvert🙂 </Text>
          <Text fontWeight={"600"}>Favorite Food:- Nothing😶</Text>
        </Box>
      </Flex>
      <Box
        bg={"#457FE5"}
        borderTopRadius="15px"
        w={"full"}
        h={14}
        position={"absolute"}
        left={0}
        bottom={0}
        textAlign={"center"}
        py={"auto"}
      >
        <Text fontSize={"x-large"} fontWeight={"700"} color={"white"}>
          🎉🎉Good Bye! Don't scroll its End🎉🎉
        </Text>
      </Box>
    </Flex>
  );
}

export default About;
