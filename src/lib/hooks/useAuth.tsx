"use client";
import { useToast } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";

interface HandleErrorParams {
  title: string;
  description?: string;
  error?: any;
}

const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const me = JSON.parse(localStorage.getItem("user"));
    if (me) {
      setUser(me);
    }
  }, []);

  return {
    user,
  };
};

export default useAuth;
