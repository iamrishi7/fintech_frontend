"use client";
import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";

interface FormSubheadingProps {
  title: string;
  mt?: BoxProps["mt"];
  mb?: BoxProps["mb"];
}

const FormSubheading = ({ title, mt, mb }: FormSubheadingProps) => {
  return (
    <Text
      fontSize={"sm"}
      fontWeight={"medium"}
      color={"gray.700"}
      mt={mt ?? 16}
      mb={mb ?? 8}
      textTransform={"capitalize"}
    >
      {title}
    </Text>
  );
};

const page = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleEkoUpdate(values: object) {
    setIsLoading(true);
    try {
    } catch (error) {
      setIsLoading(false);
    }
  }

  async function handlePaysprintUpdate(values: object) {
    setIsLoading(true);
    try {
    } catch (error) {
      setIsLoading(false);
    }
  }

  async function handleOtherServicesUpdate(values: object) {
    setIsLoading(true);
    try {
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Portal Settings
      </Heading>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <VStack w={"full"} gap={6} alignItems={"flex-start"}>
          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Signup</Text>
            <Switch />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Fund Requests</Text>
            <Switch />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Wallet Transfers</Text>
            <Switch />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Fund Transfers</Text>
            <Switch />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Chat Support</Text>
            <Switch />
          </HStack>
        </VStack>

        <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={4}>
          <Button
            bgColor={"brand.primary"}
            _hover={{
              bgColor: "brand.hover",
            }}
            color={"#FFF"}
            isLoading={isLoading}
            onClick={() => console.log("clicked")}
          >
            Save
          </Button>
        </HStack>
      </Box>

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Eko Services Settings
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            eko_initiator_id: "",
          }}
          onSubmit={(values) => handleEkoUpdate(values)}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormSubheading title="API Configuration" mt={0} />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                flexWrap={"wrap"}
              >
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="eko_initiator_id" type="text" placeholder=" " />
                  <FormLabel>Eko Initiator ID</FormLabel>
                </FormControl>
              </Stack>

              <FormSubheading title="Services Status" />
              <VStack w={"full"} gap={6} alignItems={"flex-start"}>
                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Eko API Status</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>AePS Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Bill Pay Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>DMT Services</Text>
                  <Switch />
                </HStack>

              </VStack>

              <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={4}>
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

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Paysprint Services Settings
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            paysprint_partner_id: "",
          }}
          onSubmit={(values) => handlePaysprintUpdate(values)}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormSubheading title="API Configuration" mt={0} />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                flexWrap={"wrap"}
              >
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="paysprint_partner_id" type="text" placeholder=" " />
                  <FormLabel>Paysprint Partner ID</FormLabel>
                </FormControl>
              </Stack>

              <FormSubheading title="Services Status" />
              <VStack w={"full"} gap={6} alignItems={"flex-start"}>
                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Paysprint API Status</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>AePS Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Bill Pay Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>CMS Deposit Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>DMT Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Recharge Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>LIC Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Fastag Services</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>PAN Card Services</Text>
                  <Switch />
                </HStack>

              </VStack>

              <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={4}>
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

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Other Services Settings
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            razorpay_payout_status: "",
            paydeer_payout_status: "",
          }}
          onSubmit={(values) => handleOtherServicesUpdate(values)}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <VStack w={"full"} gap={6} alignItems={"flex-start"}>
                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Razorpay Payouts Status</Text>
                  <Switch />
                </HStack>

                <HStack w={["full", "sm"]} justifyContent={"space-between"}>
                  <Text>Paydeer Payouts Status</Text>
                  <Switch />
                </HStack>

              </VStack>

              <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={4}>
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

export default page;
