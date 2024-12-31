"use client";
import {
  Box,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

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
              Fraud Complaint
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <br />
      <br />
      <Box p={[4, 8, 16]} mx={"auto"} maxW={["full", "7xl"]}>
        <p>
          If you see a charge that you do not recognize, it may be fraud. Before
          you report fraud, please make sure that neither yourself nor an
          authorized user made the transaction. You may report fraud to PAYRAPID
          INDIA PRIVATE LIMITED by contacting directly at dispute@payrapid.in.
        </p>
        <br />
        <h5>Registered Office Address</h5>
        <p>
          Aditya Digital Money Pvt. Ltd. Iglas, Aligarh, Uttar Pradesh, 202124
        </p>
        <p>info@payrapid.in</p>
      </Box>
    </>
  );
};

export default page;
