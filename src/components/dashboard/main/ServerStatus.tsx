"use client";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ServerStatus = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const services = JSON.parse(
      localStorage.getItem("services")
    );
    if (services) {
      setData(services);
    }
  }, []);

  return (
    <Box w={"full"} p={4} bgColor={"#FFF"}>
      <VStack w={"full"}>
        <Text fontSize={"xs"} mb={1}>
          Server Status
        </Text>
        <HStack gap={6}>
          <HStack>
            <Box
              boxSize={3}
              rounded={"full"}
              bgColor={data?.razorpay_payout ? "whatsapp.500" : "red.500"}
            ></Box>
            <Text fontSize={"xs"}>Razorpay</Text>
          </HStack>
          <HStack>
            <Box
              boxSize={3}
              rounded={"full"}
              bgColor={data?.eko_api ? "whatsapp.500" : "red.500"}
            ></Box>
            <Text fontSize={"xs"}>Eko</Text>
          </HStack>
          <HStack>
            <Box
              boxSize={3}
              rounded={"full"}
              bgColor={data?.paysprint_api ? "whatsapp.500" : "red.500"}
            ></Box>
            <Text fontSize={"xs"}>Paysprint</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ServerStatus;
