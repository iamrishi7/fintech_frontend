"use client";
import PendingFundRequests from "@/components/dashboard/main/admin/PendingFundRequests";
import SelectPortalBank from "@/components/dashboard/misc/SelectPortalBank";
import CustomButton from "@/components/misc/CustomButton";
import { API } from "@/lib/api";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      getPendingRequests();
    }
  }, []);

  async function getPendingRequests(query?: object) {
    try {
      setIsLoading(true);
      const res = await API.adminPendingFundRequests(query);
      setData(res);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      handleError({ title: "Couldn't fetch fund requests", error: error });
    }
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Pending Fund Requests
      </Heading>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            request_id: "",
            transaction_id: "",
            requested_bank: "",
          }}
          onSubmit={console.log}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Stack direction={["column", "row"]} gap={8} mb={8}>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="transaction_id"
                    type="text"
                    placeholder=" "
                    onChange={handleChange}
                  />
                  <FormLabel>Transaction ID</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="request_id"
                    type="text"
                    placeholder=" "
                    onChange={handleChange}
                  />
                  <FormLabel>Request ID</FormLabel>
                </FormControl>
                <SelectPortalBank
                  name="requested_bank"
                  onChange={handleChange}
                />
              </Stack>
              <HStack justifyContent={"flex-end"}>
                <CustomButton onClick={() => getPendingRequests(values)}>
                  Search
                </CustomButton>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>

      <br />
      <br />

      <Box my={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        {isLoading ? (
          <Text fontSize={"sm"} textAlign={"center"}>
            Loading...
          </Text>
        ) : (
          <PendingFundRequests parentData={data} />
        )}
      </Box>
    </>
  );
};

export default page;
