import Loader from "@/components/global/Loader";
import CustomButton from "@/components/misc/CustomButton";
import useTransactionHandler from "@/lib/hooks/useTransactionHandler";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Hide,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Receipt from "./receipt/Receipt";

interface PinInputParams {
  type:
    | "cw"
    | "ms"
    | "be"
    | "bbps"
    | "dmt"
    | "payout"
    | "recharge"
    | "lic"
    | "cms"
    | "pan"
    | "upi"
    | "";
  formData?: object | null;
  isOpen: boolean;
  onClose: () => void;
}

const PinModal = ({ isOpen, onClose, type, formData }: PinInputParams) => {
  const { processTransaction, isLoading, setPin, receiptData, setReceiptData } =
    useTransactionHandler();

    useEffect(() => {
      if(isLoading || Boolean(receiptData)) onClose()
    }, [receiptData, isLoading])

  return (
    <>
      {isLoading ? <Loader text={"Processing transaction..."} /> : null}

      <Hide below="md">
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Your PIN</ModalHeader>
            <ModalBody>
              <HStack w={"full"} justifyContent={"center"} gap={4}>
                <PinInput otp onComplete={(value) => setPin(value)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </ModalBody>
            <ModalFooter>
              <HStack w={"full"} justifyContent={"flex-end"} gap={4}>
                <Button onClick={onClose}>Cancel</Button>
                <CustomButton
                  onClick={() =>
                    processTransaction({ type: type, formData: formData })
                  }
                >
                  Submit
                </CustomButton>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Hide>

      <Hide above="md">
        <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Enter Your PIN</DrawerHeader>
            <DrawerBody>
              <HStack w={"full"} justifyContent={"center"} gap={4}>
                <PinInput otp onComplete={(value) => setPin(value)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </DrawerBody>
            <DrawerFooter>
              <HStack w={"full"} justifyContent={"flex-end"} gap={4}>
                <Button onClick={onClose}>Cancel</Button>
                <CustomButton
                  onClick={() =>
                    processTransaction({ type: type, formData: formData })
                  }
                >
                  Submit
                </CustomButton>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Hide>

      <Receipt
        isOpen={Boolean(receiptData)}
        onClose={() => setReceiptData(null)}
        data={receiptData}
      />
    </>
  );
};

export default PinModal
