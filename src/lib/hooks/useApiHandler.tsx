"use client";
import React, { useEffect, useState } from "react";
import { FormAxios } from "@/lib/utils/axios";
import { useToast } from "@chakra-ui/react";

interface UploadMediaProps {
  file: File;
  type: string;
  userId: string;
}

const useApiHandler = () => {
  const Toast = useToast();

  const adminUploadMedia = async ({ file, type, userId }: UploadMediaProps) => {
    await FormAxios.post(
      `/admin/manage-user/document/${userId}`,
      {
        file: file,
        document_type: type,
      }
    )
      .then((res) => {
        return true;
      })
      .catch((err) => {
        Toast({
          status: "error",
          title: `Could not upload ${type}`,
          description:
            err?.response?.data?.message || err?.response?.data || err?.message,
        });
      });
  };

  return {
    adminUploadMedia,
  };
};

export default useApiHandler;
