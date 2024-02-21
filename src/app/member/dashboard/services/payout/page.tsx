"use client";
import PinDrawer from "@/components/dashboard/misc/PinDrawer";
import RecentPayouts from "@/components/dashboard/services/RecentPayouts";
import CustomTabs from "@/components/misc/CustomTabs";
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

const page = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const [provider, setProvider] = useState("razorpay");
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
      <Stack direction={["column", "row"]} justifyContent={"space-between"} mb={8}>
        <Heading as={"h1"} fontSize={"xl"}>
          Payout
        </Heading>

        <CustomTabs
          tabList={[
            { id: "razorpay", label: "razorpay", isDisabled: true },
            { id: "paydeer", label: "paydeer" },
          ]}
          onChange={(value) => setProvider(value)}
        />
      </Stack>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            beneficiary_name: "",
            account_number: "",
            confirm_account_number: "",
            ifsc: "",
            amount: "",
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
                    name="beneficiary_name"
                    onChange={handleChange}
                    value={values?.beneficiary_name}
                    placeholder=" "
                  />
                  <FormLabel>Beneficiary Name</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="account_number"
                    onChange={handleChange}
                    value={values?.account_number}
                    placeholder=" "
                  />
                  <FormLabel>Account Number</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="confirm_account_number"
                    onChange={handleChange}
                    value={values?.confirm_account_number}
                    placeholder=" "
                  />
                  <FormLabel>Confirm Account Number</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="ifsc"
                    onChange={handleChange}
                    value={values?.ifsc}
                    placeholder=" "
                  />
                  <FormLabel>IFSC</FormLabel>
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <NumberInput min={50}>
                    <NumberInputField
                      name="amount"
                      onChange={handleChange}
                      value={values?.amount}
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

      <br />
      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Recent Payouts
      </Heading>
      <RecentPayouts />

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
