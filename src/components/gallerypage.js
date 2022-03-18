import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Gallery from "./gallery";
import NavBar from "./nav";

const GalleryPage = () => {
  return (
    <>
      <Flex bg={'#01161e'} fontSize="3xl" pr={4} alignItems='center' justify={'right'} >
        <Text fontSize={"5xl"} color="white" pr={'40'} mr="25">California's 20 Biggest Wild Fires</Text>
        <Flex >
        <NavBar />
        </Flex>
      </Flex>
      <Gallery />
    </>
  )
}
export default GalleryPage