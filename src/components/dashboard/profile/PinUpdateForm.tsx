"use client";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import CustomPinInput from "../misc/CustomPinInput";

const PinUpdateForm = () => {
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);

  async function handlePinChange(values: object) {
    setIsLoading(true);
    try {
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      handleError({ title: "Couldn't change your PIN", error: error });
    }
  }
  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Change Your PIN
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            old_pin: "",
            new_pin: "",
            confirm_pin: "",
          }}
          onSubmit={(values) => handlePinChange(values)}
        >
          {({ values, handleChange, handleSubmit, errors, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                mt={4}
              >
                <Box w={["full", "xs"]}>
                  <FormLabel>Old PIN</FormLabel>
                  <CustomPinInput
                    justifyContent={"flex-start"}
                    onComplete={(value) => setFieldValue("old_pin", value)}
                  />
                </Box>

                <Box w={["full", "xs"]}>
                  <FormLabel>New PIN</FormLabel>
                  <CustomPinInput
                    justifyContent={"flex-start"}
                    onComplete={(value) => setFieldValue("new_pin", value)}
                  />
                </Box>

                <Box w={["full", "xs"]}>
                  <FormLabel>Confirm New PIN</FormLabel>
                  <CustomPinInput
                    justifyContent={"flex-start"}
                    onComplete={(value) => setFieldValue("confirm_pin", value)}
                  />
                </Box>
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
                  Save
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default PinUpdateForm;
