"use client";
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { FC } from "react";
import Layout1 from "./Layout1";

interface ReceiptProps {
  amount: number;
  showLogo?: boolean;
  showFooter?: boolean;
  footerMessage?: string;
  timestamp: string;
  status: string | boolean;
}

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: ReceiptProps;
}

const Receipt: FC<ReceiptModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent bg={"transparent"} boxShadow={'none'}>
          <ModalBody p={0} boxShadow={'md'}>
            <Layout1 {...data} />
          </ModalBody>
          <ModalFooter>
            <HStack w={'full'} justifyContent={"center"}>
              <Button
                onClick={() => console.log("Download")}
                bgColor={"brand.primary"}
                _hover={{
                  bgColor: "brand.hover",
                }}
                size={"xs"}
                rounded={"full"}
                color={'#FFF'}
              >
                Download
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Receipt;
