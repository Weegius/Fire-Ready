import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import NavBar from "./nav";
import data from '../data/resources.json'
import ResourceCard from "./resourcecards";

const Resources = () => {
  return( 
    <>
      <Flex  bg={'#01161e'} fontSize="3xl" justifyContent={'right'} pr={4}>
          <NavBar />
      </Flex>
      <Flex bg={'#01161e'} minH="100vh" h={'auto'} w="100%">
      <SimpleGrid pb={10} columnGap={5} mt={10} rowGap={20} columns={[1, 2, 3, 3]} >
        {data.map((website, index) => (
          <ResourceCard key={index} website={website} />
        ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}
export default Resources