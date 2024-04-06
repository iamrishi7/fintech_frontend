"use client";
import Forbidden from "@/components/cms/Forbidden";
import CustomButton from "@/components/misc/CustomButton";
import useAuth from "@/lib/hooks/useAuth";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  const { user } = useAuth();

  if (!user?.active) {
    return <Forbidden />;
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Eko Services
      </Heading>

      <HStack gap={4} flexWrap={"wrap"}>
        {user?.eko_user_code ? (
          <></>
        ) : (
          <Box
            p={4}
            bgColor={"#FFF"}
            boxShadow={"lg"}
            rounded={4}
            boxSize={52}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <Image src="/assets/images/logos/eko_logo.svg" w={16} />
            <Text fontSize={"xs"} color={"#333"} textAlign={"center"}>
              Please start the onboarding process to use services
            </Text>
            <CustomButton size={"sm"} rounded={"full"}>
              Start Now
            </CustomButton>
          </Box>
        )}
      </HStack>

      <br />
      <br />
      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Paysprint Services
      </Heading>


      <HStack gap={4} flexWrap={"wrap"}>
        {user?.paysprint_merchant_id ? (
          <></>
        ) : (
          <Box
            p={4}
            bgColor={"#FFF"}
            boxShadow={"lg"}
            rounded={4}
            boxSize={52}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <Image src="/assets/images/logos/paysprint_logo.svg" w={16} />
            <Text fontSize={"xs"} color={"#333"} textAlign={"center"}>
              Please start the onboarding process to use services
            </Text>
            <CustomButton size={"sm"} rounded={"full"}>
              Start Now
            </CustomButton>
          </Box>
        )}
      </HStack>
    </>
  );
};

export default page;
