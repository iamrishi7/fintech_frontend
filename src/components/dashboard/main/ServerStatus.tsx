'use client'
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ServerStatus = () => {
  return (
    <Box w={"full"} p={4} bgColor={"#FFF"}>
      <VStack w={"full"}>
        <Text fontSize={"xs"} mb={1}>
          Server Status
        </Text>
        <HStack gap={6}>
          <HStack>
            <Box boxSize={3} rounded={"full"} bgColor={"whatsapp.500"}></Box>
            <Text fontSize={"xs"}>Razorpay</Text>
          </HStack>
          <HStack>
            <Box boxSize={3} rounded={"full"} bgColor={"whatsapp.500"}></Box>
            <Text fontSize={"xs"}>Eko</Text>
          </HStack>
          <HStack>
            <Box boxSize={3} rounded={"full"} bgColor={"red.500"}></Box>
            <Text fontSize={"xs"}>Paysprint</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ServerStatus;
