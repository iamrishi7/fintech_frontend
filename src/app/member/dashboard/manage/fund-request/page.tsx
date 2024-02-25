"use client";
import RecentFundRequests from "@/components/dashboard/main/RecentFundRequests";
import FileDropzone from "@/components/misc/FileDropzone";
import { FormAxios } from "@/lib/utils/axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { FC, useState } from "react";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: object) {
    setIsLoading(true);
    try {
      await FormAxios.post("/user/fund-requests", values);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Heading as={"h1"} fontSize={"xl"} mb={8}>
          Fund Request
        </Heading>
        <Formik
          initialValues={{
            amount: "",
            transaction_id: "",
            transaction_date: "",
            requested_bank: "",
            member_remarks: "",
            receipt: null,
            channel: "",
          }}
          onSubmit={console.log}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Stack direction={["column", "row"]} gap={8} mb={8}>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <NumberInput>
                    <NumberInputField
                      min={10}
                      max={500000}
                      name="amount"
                      onChange={handleChange}
                      placeholder="₹"
                    />
                    <FormLabel>Amount</FormLabel>
                  </NumberInput>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input name="transaction_id" type="text" placeholder=" " />
                  <FormLabel>Transaction ID</FormLabel>
                </FormControl>
              </Stack>
              <Stack direction={["column", "row"]} gap={8} mb={8}>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel fontSize={"xs"}>Transaction Date</FormLabel>
                  <Input
                    name="transaction_date"
                    type="date"
                    placeholder="Transaction Date"
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel fontSize={"xs"}>Requested Bank</FormLabel>
                  <Select name="requested_bank" placeholder="Please select">
                    <option value="SBI">State Bank of India</option>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction={["column", "row"]} gap={8} mb={8}>
                <Box w={["full", "xs"]}>
                  <FileDropzone
                    onUpload={(files) => console.log(files)}
                    accept="image/*,application/pdf"
                    label="Upload payment receipt"
                    height={32}
                  />
                </Box>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Textarea
                    name="transaction_date"
                    resize={"none"}
                    w={"full"}
                    h={"32"}
                    placeholder=" "
                  />
                  <FormLabel>Remarks</FormLabel>
                </FormControl>
              </Stack>
              <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={16}>
                <Button
                  bgColor={"brand.primary"}
                  _hover={{
                    bgColor: "brand.hover",
                  }}
                  color={"#FFF"}
                  isLoading={isLoading}
                  onClick={() => onSubmit(values)}
                >
                  Send
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>

      <Box my={4} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Heading as={"h1"} fontSize={"lg"} mb={8}>
          Recent Fund Requests
        </Heading>

        <RecentFundRequests />
      </Box>
    </>
  );
};

export default page;
