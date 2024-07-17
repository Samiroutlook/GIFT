import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        w={"full"}
        h={"fit-content"}
      >
        <Box mt={"5"} bg="white" w="200px" h="200px" borderRadius="50%">
          <Image
            src="/img.jpg" // Ensure you have the correct image path
            borderRadius="50%"
            boxSize="200px"
            alt="Profile Image"
          />
        </Box>
        <Text fontSize={"larger"} fontWeight={"600"} letterSpacing={"3px"}>
          sᴀᴍɪʀ
        </Text>
      </Flex>
    </>
  );
}

export default Profile;
