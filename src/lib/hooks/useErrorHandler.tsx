"use client";
import { useToast } from "@chakra-ui/react";
import React, { FC } from "react";

interface HandleErrorParams {
  title: string;
  description?: string;
  error?: any;
}

const useErrorHandler = () => {
  const Toast = useToast();

  const handleError = ({ title, description, error }: HandleErrorParams) => {
    Toast({
      title: title,
      description:
        description || error?.message || "Error while processing request",
    });
  };

  return {
    handleError,
  };
};

export default useErrorHandler;
