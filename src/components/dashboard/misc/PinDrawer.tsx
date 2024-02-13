"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomPinInput from "./CustomPinInput";

interface PinDrawerProps {
  description?: string;
  isOpen: boolean;
  isLoading: boolean;
  onSubmit: (value: string | number) => void;
  onClose: () => void;
}

const PinDrawer = ({
  description,
  isOpen,
  onClose,
  onSubmit,
  isLoading
}: PinDrawerProps) => {
  const Toast = useToast()
  const [pin, setPin] = useState("");

  function handleSubmit(){
    if(!pin){
      Toast({
        description: "Please enter your 4-digit PIN"
      })
      return
    }
    onSubmit(pin)
  }
  return (
    <>
      <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign={"center"}>Enter your PIN</DrawerHeader>
          <DrawerBody>
            <Text textAlign={"center"}>{description}</Text>
            <br />
            <CustomPinInput
              onComplete={(value) => setPin(value)}
              justifyContent={"center"}
            />
          </DrawerBody>
          <DrawerFooter>
            <HStack justifyContent={["center", "flex-end"]} gap={6}>
              <Button onClick={onClose} isLoading={isLoading}>Cancel</Button>
              <Button
                bgColor={"brand.primary"}
                _hover={{
                  bgColor: "brand.hover",
                }}
                color={"#FFF"}
                isLoading={isLoading}
                onClick={handleSubmit}
              >
                Confirm
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PinDrawer;
