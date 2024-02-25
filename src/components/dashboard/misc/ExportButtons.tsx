"use client";
import BackendAxios from "@/lib/utils/axios";
import {
  Button,
  HStack,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import fileDownload from "js-file-download";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";

const ExportButtons = ({ keyword, query, body, fileName }: any) => {
  const Toast = useToast({ position: "top-right" });
  const [isLoading, setIsLoading] = useState(false);

  function handleExport(extension: string) {
    setIsLoading(true);
    BackendAxios.post(
      `/api/${localStorage.getItem("role")}/print-report/${keyword}${
        query
          ? `?${Object.keys(query)
              .map(
                (key) =>
                  encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
              )
              .join("&")}`
          : ""
      }`,
      { ...body, extension: extension },
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
      <HStack justifyContent={"flex-start"} gap={4}>
        <Tooltip label={"Excel Export"} placement="top">
          <IconButton
            size={"sm"}
            variant={"ghost"}
            colorScheme="whatsapp"
            aria-label="Excel"
            icon={<SiMicrosoftexcel />}
            bgColor={"gray.50"}
            rounded={"full"}
            onClick={() => handleExport("xlsx")}
            isLoading={isLoading}
          />
        </Tooltip>

        <Tooltip label={"PDF Export"} placement="top">
          <IconButton
            size={"sm"}
            variant={"ghost"}
            colorScheme="red"
            aria-label="Excel"
            icon={<FaFilePdf />}
            bgColor={"gray.50"}
            rounded={"full"}
            onClick={() => handleExport("pdf")}
            isLoading={isLoading}
          />
        </Tooltip>
      </HStack>
    </>
  );
};

export default ExportButtons;
