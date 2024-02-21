"use client";
import { useToast } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { API } from "../api";

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
    } else {
      handleLogout();
    }
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
      setUser(null);
      await API.logout();
      window.location.replace("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    handleLogout,
  };
};

export default useAuth;
