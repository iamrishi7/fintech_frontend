"use client";
import BackendAxios from "@/lib/utils/axios";
import { Button, HStack, useToast } from "@chakra-ui/react";
import fileDownload from "js-file-download";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

const ExportButtons = ({ keyword, queryParams, bodyParams, fileName }: any) => {
  const Toast = useToast({ position: "top-right" });
  const [isLoading, setIsLoading] = useState(false);

  function handleExport(extension: string) {
    setIsLoading(true);
    BackendAxios.post(
      `/api/admin/print-reports/${keyword}${
        queryParams ? `?${queryParams}` : ""
      }`,
      { ...bodyParams, extension: extension },
      { responseType: "blob" }
    )
      .then((res) => {
        fileDownload(res.data, `${fileName}.${extension}`);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        Toast({
          status: "error",
          title: "Err while downloading file",
          description:
            err?.response?.data?.message || err?.response?.data || err?.message,
        });
      });
  }

  return (
    <>
      <HStack justifyContent={"flex-start"}>
        <Button
          size={"sm"}
          colorScheme="red"
          onClick={() => handleExport("pdf")}
          isLoading={isLoading}
          leftIcon={<FaFilePdf />}
        >
          PDF
        </Button>
        <Button
          size={"sm"}
          colorScheme="whatsapp"
          onClick={() => handleExport("xlsx")}
          isLoading={isLoading}
          leftIcon={<PiMicrosoftExcelLogo />}
        >
          Excel
        </Button>
      </HStack>
    </>
  );
};

export default ExportButtons;
