import { Image, Flex, Text, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Landing = () => {
  return (
    <Flex w="100%" h="100vh">
      <Image
        pos="fixed"
        zIndex={-1}
        h="100%"
        w="100%"
        src={require("../assets/images/dixie.png")}
        alt="Dixie Fire"
      />
      <Flex w={400} h={300} flexDir="column">
        <Text fontSize={"8xl"} color="white" pt={10} textAlign="center">
          FireReady
        </Text>
        <Text color="white" fontSize={25} textAlign="center">
          Helping you stay ahead of fire season
        </Text>
      </Flex>
      <Spacer />
      <Flex
        flexDir="column"
        fontSize={30}
        color={"white"}
        textAlign="right"
        justifyContent={'center'}
        pr='4'
      >
        {/* <Link to={"map"}>Map</Link> */}
        <Link to={"story"}>Story</Link>
        <Link to={"gallery"}>Gallery</Link>
        <Link to={"resources"}>Resources</Link>
      </Flex>
      {/* 
      Vertical Navbar here
      */}
    </Flex>
  );
};
export default Landing;
