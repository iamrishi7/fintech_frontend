"use client";
import { Image } from "@chakra-ui/react";
import React from "react";

const loading = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src="/assets/images/loading/layout1.gif" w={16} />
        <br />
        <p style={{ textAlign: "center" }}>Loading, please wait...</p>
      </div>
    </>
  );
};

export default loading;
