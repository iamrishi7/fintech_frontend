"use client";
import ExportButtons from "@/components/dashboard/misc/ExportButtons";
import ReceiptButton from "@/components/dashboard/misc/ReceiptButton";
import Pagination from "@/components/misc/Pagination";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const page = () => {
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
  ]);

  async function fetchTransaction(values: any) {
    setIsLoading(true);
    try {
      setIsLoading(false);
    } catch (error) {
      handleError({ title: "Error while fetching transactions", error: error });
      setIsLoading(false);
    }
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Payout Report
      </Heading>

      <Box p={6} bgColor={"#FFF"} rounded={4} boxShadow={"base"} mb={8}>
        <Formik
          initialValues={{
            from: "",
            to: "",
            transaction_id: "",
            account_number: "",
          }}
          onSubmit={(values) => {
            fetchTransaction(values);
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
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>From</FormLabel>
                  <Input
                    name="from"
                    onChange={handleChange}
                    type="date"
                    value={values?.from}
                    placeholder=" "
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>To</FormLabel>
                  <Input
                    name="to"
                    type="date"
                    onChange={handleChange}
                    value={values?.to}
                    placeholder=" "
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>Account Number</FormLabel>
                  <Input
                    name="account_number"
                    onChange={handleChange}
                    value={values?.account_number}
                    placeholder=" "
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>Transaction ID</FormLabel>
                  <Input
                    name="transaction_id"
                    onChange={handleChange}
                    value={values?.transaction_id}
                    placeholder=" "
                  />
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
                  Search
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>

      <Box p={6} bgColor={"#FFF"} rounded={4} boxShadow={"base"}>
        <Stack
          w={"full"}
          direction={["column", "row"]}
          alignItems={"center"}
          justifyContent={["center", "space-between"]}
        >
          <ExportButtons />
          <Pagination />
        </Stack>
        <br />
        <TableContainer maxH={"lg"} overflowY={"scroll"}>
          <Table size={"md"} variant={"striped"}>
            <Thead>
              <Tr>
                <Th color={"gray.600"}>ID</Th>
                <Th color={"gray.600"}>Amount</Th>
                <Th color={"gray.600"}>Beneficiary</Th>
                <Th color={"gray.600"}>Status</Th>
                <Th color={"gray.600"}>Created At</Th>
                <Th color={"gray.600"}>Updated At</Th>
                <Th color={"gray.600"}>Provider</Th>
                <Th color={"gray.600"}>Admin Remarks</Th>
                <Th color={"gray.600"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"xs"}>
              {data?.map((item, key) => (
                <Tr key={key}>
                  <Td borderBottom={0}>RZPPYT234</Td>
                  <Td borderBottom={0}>
                    ₹{Number(50000)?.toLocaleString("en-IN") ?? 0}
                  </Td>
                  <Td>
                    <Text>Sangam Kumar</Text>
                    <Text>39488734970</Text>
                    <Text>SBIN0032284</Text>
                  </Td>
                  <Td>
                    <Badge colorScheme="whatsapp">SUCCESS</Badge>
                  </Td>

                  <Td borderBottom={0}>13-02-2024 19:34</Td>
                  <Td borderBottom={0}>13-02-2024 19:54</Td>
                  <Td borderBottom={0}>Razorpay</Td>
                  <Td borderBottom={0}>-</Td>
                  <Td borderBottom={0}>
                    <HStack gap={4} w={"full"} justifyContent={"center"}>
                      <ReceiptButton />
                      {/* <IconButton
                          aria-label="reject"
                          size={"xs"}
                          rounded={"full"}
                          icon={<FaXmark />}
                          colorScheme="red"
                        /> */}
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <br />
        <Pagination />
      </Box>
    </>
  );
};

export default page;
