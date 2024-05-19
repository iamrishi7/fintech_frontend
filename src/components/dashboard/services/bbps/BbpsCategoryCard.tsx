"use client";
import CustomButton from "@/components/misc/CustomButton";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CardIcon from "./CardIcon";

interface BbpsCategoryCardProps {
  name: string;
  id: string | number;
  onClick: (value: any) => void;
  selected?: boolean;
}

const BbpsCategoryCard = ({
  name,
  id,
  onClick,
  selected,
}: BbpsCategoryCardProps) => {
  return (
    <>
      <Box
        w={["45%", "48"]}
        h={["48"]}
        border={"1px solid"}
        borderColor={"gray.300"}
        rounded={6}
        p={4}
        pt={8}
        onClick={onClick}
        transition={"all .3s ease"}
        _hover={{
          bgColor: "gray.100",
        }}
      >
        <VStack
          w={"full"}
          h={"full"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <VStack h={"40%"} justifyContent={"flex-start"}>
            <CardIcon name={name} />
          </VStack>
          <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>
            {name}
          </Text>
          <CustomButton
            variant={selected ? "solid" : "outline"}
            rounded={"full"}
            size={"sm"}
            onClick={() => onClick(id)}
          >
            {selected ? "Unselect" : "Select"}
          </CustomButton>
        </VStack>
      </Box>
    </>
  );
};

export default BbpsCategoryCard;
