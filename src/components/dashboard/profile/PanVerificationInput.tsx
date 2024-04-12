"use client";
import { FormControl, Input, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";

interface PanVerificationInputProps {
  onSuccess?: (data: any) => void;
  value?: string;
}

const PanVerificationInput = ({
  onSuccess,
  value,
}: PanVerificationInputProps) => {
  const Toast = useToast();
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <>
      <FormControl w={["full", "xs"]}>
        <Input
          value={value}
          isDisabled={Boolean(value)}
          onClick={() => {
            if (value) {
              Toast({
                title: "Pan Number already verified.",
                description: "Please contact admin if you want to change it",
              });
            } else onOpen();
          }}
          placeholder="Click to verify PAN"
        />
      </FormControl>
    </>
  );
};

export default PanVerificationInput;
