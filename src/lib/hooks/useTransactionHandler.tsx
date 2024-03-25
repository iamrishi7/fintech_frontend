"use client";
import CustomButton from "@/components/misc/CustomButton";
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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { API } from "../api";
import useErrorHandler from "./useErrorHandler";
import Receipt from "@/components/dashboard/misc/receipt/Receipt";
import Loader from "@/components/global/Loader";

interface TransactionHandlerParams {
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
}

const useTransactionHandler = () => {
  const { handleError } = useErrorHandler();

  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [receiptData, setReceiptData] = useState<any>(null);

  async function processTransaction({
    type,
    formData,
  }: TransactionHandlerParams) {
    if (type == "payout") {
      try {
        setIsLoading(true);
        const res = await API.doPayout({ ...formData, pin: pin });
        setIsLoading(false);
        setReceiptData(res?.data);
      } catch (error) {
        setIsLoading(false);
        handleError({
          title: "Error while processing payout",
          error: error,
        });
      }
    }
  }
  return {
    processTransaction,
    isLoading,
    receiptData,
    setPin,
    setReceiptData
  };
};

export default useTransactionHandler;
