"use client";
import { Box, HStack, Icon, Text, TextProps, VStack } from "@chakra-ui/react";
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
  isLayout?: boolean;
}

interface ReceiptEntryProps {
  k: string;
  v: string;
  fontSize: TextProps["fontSize"];
}

const ReceiptEntry = ({ k, v, fontSize }: ReceiptEntryProps) => {
  return (
    <>
      <HStack w={"full"} gap={0}>
        <Box
          px={2}
          py={1}
          flex={1}
          border={"0.5px solid"}
          borderColor={"gray.300"}
        >
          <Text
            textTransform={"capitalize"}
            fontSize={fontSize || "10"}
            fontWeight={"medium"}
          >
            {k}
          </Text>
        </Box>
        <Box
          px={2}
          py={1}
          flex={2}
          border={"0.5px solid"}
          borderColor={"gray.300"}
        >
          <Text textTransform={"capitalize"} fontSize={fontSize || "10"}>
            {v}
          </Text>
        </Box>
      </HStack>
    </>
  );
};

const Layout1 = ({
  amount,
  showLogo = true,
  showFooter = true,
  footerMessage,
  timestamp,
  status,
  data,
  isLayout,
}: any) => {
  const config = {
    fontSize: isLayout ? "6" : "10",
  };

  return (
    <>
      <VStack
        minH={isLayout ? "xs" : "lg"}
        w={"full"}
        p={isLayout ? 3 : 6}
        bgColor={"#FFF"}
        gap={4}
        justifyContent={"space-between"}
      >
        {/* Receipt Header */}
        <VStack>
          <Text
            fontSize={isLayout ? "md" : "3xl"}
            fontWeight={"medium"}
            color={"gray.700"}
          >
            ₹{Number(amount ?? 0)?.toFixed(2)}
          </Text>
          {status == "success" ? (
            <Icon
              as={BsFillPatchCheckFill}
              color={"whatsapp.500"}
              fontSize={isLayout ? "32" : "64"}
            />
          ) : status == "pending" ? (
            <Icon
              as={BsFillClockFill}
              color={"orange.500"}
              fontSize={isLayout ? "32" : "64"}
            />
          ) : status == "failed" ? (
            <Icon
              as={BiSolidError}
              color={"red.500"}
              fontSize={isLayout ? "36" : "72"}
            />
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
            fontSize={isLayout ? "sm" : "md"}
          >
            {status}
          </Text>
        </VStack>

        {/* Receipt Body */}
        <Box w={"full"}>
          <ReceiptEntry
            k="Trnxn Type"
            v="Payout"
            fontSize={config?.fontSize}
          />
          <ReceiptEntry
            k="Trnxn ID"
            v="RZPPYT243"
            fontSize={config?.fontSize}
          />
          <ReceiptEntry
            k="Timestamp"
            v="13-02-2024 19:34"
            fontSize={config?.fontSize}
          />
          <ReceiptEntry
            k="Account No."
            v="39488734970"
            fontSize={config?.fontSize}
          />
          <ReceiptEntry
            k="Beneficiary"
            v="Sangam Kumar"
            fontSize={config?.fontSize}
          />
        </Box>

        {/* Receipt Footer */}
        <VStack gap={1}>
          <HStack w={"full"} justifyContent={"center"}>
            <Text fontSize={isLayout ? "2xs" : "md"} fontWeight={"semibold"}>
              NXGENIUS
            </Text>
          </HStack>
          <Text fontSize={isLayout ? 6 : 10} textAlign={"center"}>
            This is a computer generated receipt and does not require physical
            signature.
          </Text>
        </VStack>
      </VStack>
    </>
  );
};

export default Layout1;
