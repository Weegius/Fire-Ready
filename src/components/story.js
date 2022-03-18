import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import NavBar from "./nav";

const Story = () => {
  return (
    <>
      <Flex w="100%" h="100vh" flexDir="column">
        <Flex justify={"right"} pr="4">
          <NavBar />
        </Flex>
        <Flex w="50%" h="100%" justifyContent={"center"} color="white" flexDir={'column'}>
          <Text
            p="5"
            textAlign={"center"}
            fontSize="4xl"
            justifyContent="center"
            mt="15"
            fontWeight={'bold'}
          >
            Why are fires important to me?
          </Text>
          <Text
            p="5"
            textAlign={"center"}
            fontSize="2xl"
            justifyContent="center"
          >
            I try to stay involved with information about fires as I think it is
            essential that most people stay informed and knowledgeable about the
            topic. I care so much because I lived through the glass fire in
            2020; luckily, our house survived, and the only reason for that is
            because we took the proper steps with home hardening, defensible
            space, and made sure to clean up dead brush around the house. I
            believe four of my neighbor's houses burnt down, so we were very
            fortunate. And because of this, I want to create a place for
            information on how to protect yourself and your house from fires
          </Text>
        </Flex>

        <Image
          pos="fixed"
          zIndex={-1}
          h="100%"
          w="100%"
          src={require("../assets/images/Glass.png")}
          alt="Glass Fire"
        />
      </Flex>
    </>
  );
};
export default Story;
