"use client";
import PinDrawer from "@/components/dashboard/misc/PinDrawer";
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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";

interface PayoutDataParams {
  account_number?: string | number;
  confirm_account_number?: string | number;
  ifsc?: string;
  amount?: number;
}

const page = ({
  account_number,
  confirm_account_number,
  ifsc,
  amount,
}: PayoutDataParams) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<null | object>(null);

  async function handleFormSubmit() {
    setIsLoading(true);
    try {
      setIsLoading(false);
    } catch (error) {}
    setIsLoading(false);
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Payout
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            account_number: account_number,
            confirm_account_number: confirm_account_number,
            ifsc: ifsc,
            amount: amount,
          }}
          onSubmit={(values) => {
            setFormData(values);
            onOpen();
          }}
        >
          {({ values, handleChange, handleSubmit, handleReset, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Stack
                direction={["column", "row"]}
                spacing={8}
                flexWrap={"wrap"}
                my={4}
              >
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="account_number"
                    onChange={handleChange}
                    value={account_number}
                    placeholder=" "
                  />
                  <FormLabel>Account Number</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="confirm_account_number"
                    onChange={handleChange}
                    value={confirm_account_number}
                    placeholder=" "
                  />
                  <FormLabel>Confirm Account Number</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="ifsc"
                    onChange={handleChange}
                    value={ifsc}
                    placeholder=" "
                  />
                  <FormLabel>IFSC</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <NumberInput min={50}>
                    <NumberInputField
                      name="amount"
                      onChange={handleChange}
                      value={amount}
                      placeholder="₹"
                    />
                    <FormLabel>Amount (₹)</FormLabel>
                  </NumberInput>
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
                  type="submit"
                >
                  Submit
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>

      <PinDrawer
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleFormSubmit}
        isLoading={isLoading}
      />
    </>
  );
};

export default page;
