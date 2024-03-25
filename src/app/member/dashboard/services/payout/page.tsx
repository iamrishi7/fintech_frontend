"use client";
import PinModal from "@/components/dashboard/misc/PinModal";
import PinDrawer from "@/components/dashboard/misc/PinModal";
import RecentPayouts from "@/components/dashboard/services/RecentPayouts";
import CustomTabs from "@/components/misc/CustomTabs";
import useTransactionHandler from "@/lib/hooks/useTransactionHandler";
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
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const ref = useRef(true);
  const Toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState<any>(null);
  const [provider, setProvider] = useState<string | number | boolean>(
    "razorpay"
  );
  const [availableProviders, setAvailableProviders] = useState<any>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      const data = JSON.parse(localStorage.getItem("services"));
      if (data) {
        setAvailableProviders(data);
      }
    }
  }, []);

  function handleFormSubmit(values: any) {
    if (values?.account_number != values?.confirm_account_number) {
      Toast({
        description: "Account numbers don't match",
      });
      return;
    }
    setFormData({ ...values, provider: provider });
    onOpen();
  }

  return (
    <>
      <Stack
        direction={["column", "row"]}
        justifyContent={"space-between"}
        mb={8}
      >
        <Heading as={"h1"} fontSize={"xl"}>
          Payout
        </Heading>

        <CustomTabs
          defaultValue={
            availableProviders?.razorpay_payout ? "razorpay" : "paydeer"
          }
          tabList={[
            {
              id: "razorpay",
              label: "razorpay",
              isDisabled: !availableProviders?.razorpay_payout,
            },
            {
              id: "paydeer",
              label: "paydeer",
              isDisabled: !availableProviders?.paydeer_payout,
            },
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
            provider: provider,
          }}
          onSubmit={console.log}
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
                  onClick={() => handleFormSubmit(values)}
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

      <PinModal
        isOpen={isOpen}
        onClose={onClose}
        type="payout"
        formData={formData}
      />
    </>
  );
};

export default page;
