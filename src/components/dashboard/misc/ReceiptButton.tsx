"use client";
import { ButtonProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface ReceiptButtonProps {
  size: ButtonProps["size"];
  data: object | undefined;
}

interface ReceiptProps {
  amount: number;
  showLogo?: boolean;
  showFooter?: boolean;
  footerMessage?: string;
  timestamp: string;
  status: string | boolean;
}

const Layout1: FC<ReceiptProps> = ({
  amount,
  showLogo = true,
  showFooter = true,
  footerMessage,
  timestamp,
  status,
}) => {
  return <></>;
};

const ReceiptButton: FC<ReceiptButtonProps> = ({ size, data }) => {
  return <></>;
};

export default ReceiptButton;
