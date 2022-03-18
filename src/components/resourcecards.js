import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ResourceCard = ({ website }) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        minH={{ sm: "476px", md: "20rem" }}
        h="auto"
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("#FEF9EF", "#FEF9EF")}
        boxShadow={"2xl"}
        padding={4}
        m={5}
      >
        <Flex flexDir={'column'}>
          <Image
            // objectFit="cover"
            boxSize="100%"
            w={website.image.size.w}
            h={website.image.size.h}
            src={`${website.image.url}`}
          />  
          <Heading fontSize={"2xl"} fontFamily={"body"} textAlign='center'>
            {website.name}
          </Heading>
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Text
            textAlign={"center"}
            color={useColorModeValue("black")}
            px={3}
          >
            {website.desc}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"#f3722c"}
              color={"white"}
              // boxShadow={
              //   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              // }
              _hover={{
                bg: "#f3722c",
              }}
              _focus={{
                bg: "#f3722c",
              }}
              onClick={()=>window.location.href=website.link}
            >
              Visit
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};
export default ResourceCard;
