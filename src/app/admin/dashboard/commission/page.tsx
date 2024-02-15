"use client";
import CommissionSetup from "@/components/dashboard/commission/CommissionSetup";
import Packages from "@/components/dashboard/commission/Packages";
import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface PackageProps {
  id: string | number;
  name: string;
}

const page = () => {
  const [targetPackage, setTargetPackage] = useState<string | number>("");
  const [packageInfo, setPackageInfo] = useState<PackageProps>();

  return (
    <>
      <HStack mb={8} justifyContent={"space-between"}>
        <Heading as={"h1"} fontSize={"xl"}>
          Packages
        </Heading>
        <Button
          bgColor={"brand.primary"}
          _hover={{
            bgColor: "brand.hover",
          }}
          color={"#FFF"}
          fontWeight={"medium"}
          leftIcon={<FaPlus />}
          rounded={"full"}
          size={["sm", "md"]}
        >
          Create Package
        </Button>
      </HStack>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Packages onEditButtonClick={(id) => setTargetPackage(id)} />
      </Box>
      <br />
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Commission Setup {packageInfo ? `- ${packageInfo?.name}` : ""}
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        {targetPackage ? (
          <CommissionSetup packageId={targetPackage} />
        ) : (
          <Text fontSize={"sm"}>Please select a package</Text>
        )}
      </Box>
    </>
  );
};

export default page;
