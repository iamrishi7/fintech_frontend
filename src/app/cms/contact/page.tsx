"use client";
import {
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

const contactOptions = [
  {
    label: "Address",
    value:
      "Aditya Digital Money Pvt. Ltd. Iglas, Aligarh, Uttar Pradesh, 202124",
    icon: GoLocation,
  },
  {
    label: "PHONE NUMBER",
    value: "+91 90845 33003",
    icon: BsPhone,
  },
  {
    label: "EMAIL",
    value: "info@payrapid.in",
    icon: HiOutlineMail,
  },
];

const page = () => {
  return (
    <>
      <Flex
        w={"full"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          p={[4, 8, 16]}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Contact Us
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <br />
      <br />

      <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
        <Stack spacing={10}>
          <Stack
            spacing={{ base: 6, md: 0 }}
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            {contactOptions.map((option, index) => (
              <Fragment key={index}>
                <Stack
                  spacing={3}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  px={3}
                >
                  <Icon as={option.icon} w={10} h={10} color="green.400" />
                  <Text fontSize="lg" fontWeight="semibold">
                    {option.label}
                  </Text>
                  <Text fontSize="md" textAlign="center">
                    {option.value}
                  </Text>
                </Stack>
                {contactOptions.length - 1 !== index && (
                  <Flex display={{ base: "none", md: "flex" }}>
                    <Divider orientation="vertical" />
                  </Flex>
                )}
              </Fragment>
            ))}
          </Stack>
          <VStack
            as="form"
            spacing={8}
            w="100%"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <Stack
                w="100%"
                spacing={3}
                direction={{ base: "column", md: "row" }}
              >
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Ahmad" rounded="md" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    rounded="md"
                  />
                </FormControl>
              </Stack>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input
                  type="text"
                  placeholder="Are you available for freelance work?"
                  rounded="md"
                />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  size="lg"
                  placeholder="Enter your message"
                  rounded="md"
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w={{ base: "100%", md: "max-content" }}
              >
                Send Message
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </>
  );
};

export default page;
