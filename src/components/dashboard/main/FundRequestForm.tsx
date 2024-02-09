"use client";
import FileDropzone from "@/components/misc/FileDropzone";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { FC, useState } from "react";

interface FormProps {
  onClose: () => void;
}

const FundRequestForm: FC<FormProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: object) {
    setIsLoading(true);
    try {
      // TODO: Send request to server and handle response.
      setIsLoading(false);
      onClose();
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <>
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
                <Input name="amount" type="number" placeholder="₹" />
                <FormLabel>Amount</FormLabel>
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
              <Box w={["full"]} h={"32"}>
                <FileDropzone
                  onUpload={(files) => console.log(files)}
                  accept="image/*,application/pdf"
                  label="Upload payment receipt"
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
              <Button onClick={onClose}>Cancel</Button>
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
    </>
  );
};

export default FundRequestForm;
