'use client'
import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const PaysprintBbpsForm = () => {
  const [providerId, setProviderId] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("services"));
    if (data) {
      setProviderId(
        data?.find(
          (item: any) => item?.name == "bbps" && item?.provider == "eko"
        )?.id
      );
    }
  }, []);

  return (
    <>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>

      </Box>
    </>
  );
}

export default PaysprintBbpsForm