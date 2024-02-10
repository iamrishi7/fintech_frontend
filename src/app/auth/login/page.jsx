"use client";
import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import Navbar from "@/components/main/Navbar";

const SplitWithImage = () => {
  return (
    <>
      <Navbar />
      <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
        <Flex flex={1}>
          <Image
            alt="Cover image"
            objectFit="cover"
            src="https://bit.ly/2k1H1t6"
          />
        </Flex>
        <Flex
          p={8}
          flex={1}
          align="center"
          justifyContent="center"
          direction={"column"}
        >
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">Sign in to your account</Heading>
            </Stack>
            <VStack
              as="form"
              spacing={8}
              boxSize={{ base: "xs", sm: "sm", md: "md" }}
              h="max-content !important"
              bg={useColorModeValue("white", "gray.700")}
              rounded="lg"
              //   boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={8} w="100%">
                <FormControl id="email" variant={"floating"}>
                  <FormLabel>Email</FormLabel>
                  <Input rounded="md" type="email" placeholder=" " />
                </FormControl>
                <FormControl id="password" variant={"floating"}>
                  <FormLabel>Password</FormLabel>
                  <Input rounded="md" type="password" placeholder=" " />
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justifyContent="space-between" w="100%" mb={8}>
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  <Link fontSize={{ base: "md", sm: "md" }} color={'twitter.600'}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  bg="brand.primary"
                  color="white"
                  _hover={{
                    bg: "brand.hover",
                  }}
                  mt={4}
                  rounded="md"
                  w="100%"
                >
                  Sign in
                </Button>
                <br />
                <Text as={"a"} href={"/auth/signup"} color={"twitter.700"}>
                  Don't have an account? Register here!
                </Text>
              </VStack>
            </VStack>
          </Stack>

          <br />
          <br />
          <br />
          <Text fontSize={"xs"}>
            &copy; Copyright {new Date().getFullYear()} - Pesa24 Technologies
            Pvt. Ltd.
          </Text>
        </Flex>
      </Stack>
    </>
  );
};

export default SplitWithImage;
