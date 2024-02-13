"use client";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { BiSolidError } from "react-icons/bi";
import { BsFillClockFill, BsFillPatchCheckFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { MdError } from "react-icons/md";

interface ReceiptProps {
  amount: number;
  showLogo?: boolean;
  showFooter?: boolean;
  footerMessage?: string;
  timestamp: string;
  status: string | boolean;
  data?: object;
}

const Layout1 = ({
  amount,
  showLogo = true,
  showFooter = true,
  footerMessage,
  timestamp,
  status,
  data,
}: any) => {
  const config = {
    fontSize: "10",
  };

  return (
    <>
      <VStack
        minH={"lg"}
        w={"full"}
        p={6}
        bgColor={"#FFF"}
        gap={4}
        justifyContent={"space-between"}
      >
        {/* Receipt Header */}
        <VStack>
          <Text fontSize={"3xl"} fontWeight={"medium"} color={"gray.700"}>
            ₹{Number(amount ?? 0)?.toFixed(2)}
          </Text>
          {status == "success" ? (
            <Icon
              as={BsFillPatchCheckFill}
              color={"whatsapp.500"}
              fontSize={"64"}
            />
          ) : status == "pending" ? (
            <Icon as={BsFillClockFill} color={"orange.500"} fontSize={"64"} />
          ) : status == "failed" ? (
            <Icon as={BiSolidError} color={"red.500"} fontSize={"72"} />
          ) : null}

          <Text
            fontWeight={"semibold"}
            color={
              status == "success"
                ? "whatsapp.500"
                : status == "pending"
                ? "orange.500"
                : status == "failed"
                ? "red.500"
                : "gray.700"
            }
            textTransform={"uppercase"}
          >
            {status}
          </Text>
        </VStack>

        {/* Receipt Body */}
        <Box w={"full"}>
          <HStack w={"full"} gap={0}>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize} fontWeight={"medium"}>
                Transaction Type
              </Text>
            </Box>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize}>Payout</Text>
            </Box>
          </HStack>
          <HStack w={"full"} gap={0}>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize} fontWeight={"medium"}>
                Transaction ID
              </Text>
            </Box>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize}>RZPPYT243</Text>
            </Box>
          </HStack>
          <HStack w={"full"} gap={0}>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize} fontWeight={"medium"}>
                Timestamp
              </Text>
            </Box>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize}>13-02-2024 19:34</Text>
            </Box>
          </HStack>
          <HStack w={"full"} gap={0}>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize} fontWeight={"medium"}>
                Account No.
              </Text>
            </Box>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize}>39488734970</Text>
            </Box>
          </HStack>
          <HStack w={"full"} gap={0}>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize} fontWeight={"medium"}>
                Beneficiary Name
              </Text>
            </Box>
            <Box
              px={2}
              py={1}
              flex={1}
              border={"0.5px solid"}
              borderColor={"gray.300"}
            >
              <Text fontSize={config?.fontSize}>Sangam Kumar</Text>
            </Box>
          </HStack>
        </Box>

        {/* Receipt Footer */}
        <VStack gap={1}>
          <HStack w={"full"} justifyContent={"center"}>
            <Text fontWeight={"semibold"}>NXGENIUS</Text>
          </HStack>
          <Text fontSize={"xs"} textAlign={"center"}>
            This is a computer generated receipt and does not require physical
            signature.
          </Text>
        </VStack>
      </VStack>
    </>
  );
};

export default Layout1;
