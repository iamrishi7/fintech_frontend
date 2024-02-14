"use client";
import ExportButtons from "@/components/dashboard/misc/ExportButtons";
import ReceiptButton from "@/components/dashboard/misc/ReceiptButton";
import CustomTabs from "@/components/misc/CustomTabs";
import Pagination from "@/components/misc/Pagination";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Switch,
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
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading as={"h1"} fontSize={"xl"} mb={8}>
          Users List
        </Heading>

        <CustomTabs tabList={[
            {
                id: 'member',
                label: 'member'
            },
            {
                id: 'distributor',
                label: 'distributor'
            },
            {
                id: 'super_distributor',
                label: 'super distributor'
            },
            {
                id: 'admin',
                label: 'admin'
            },
        ]} onChange={console.log} size={'sm'} />
      </Stack>

      <Box p={6} bgColor={"#FFF"} rounded={4} boxShadow={"base"} mb={8}>
        <Formik
          initialValues={{
            created_at: "",
            to: "",
            transaction_id: "",
            account_number: "",
            name: "",
            user_id: "",
            commission_package: "",
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
                  <FormLabel>User ID</FormLabel>
                  <Input
                    name="user_id"
                    onChange={handleChange}
                    value={values?.user_id}
                    placeholder=" "
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    onChange={handleChange}
                    value={values?.name}
                    placeholder=" "
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>Registered On</FormLabel>
                  <Input
                    name="created_at"
                    onChange={handleChange}
                    type="date"
                    value={values?.created_at}
                    placeholder=" "
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>Package</FormLabel>
                  <Select
                    name="commission_package"
                    onChange={handleChange}
                    value={values?.commission_package}
                    placeholder="Select Package"
                  >
                    <option value="1">Basic</option>
                  </Select>
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
                <Th color={"gray.600"}>Basic Details</Th>
                <Th color={"gray.600"}>Aadhaar</Th>
                <Th color={"gray.600"}>PAN</Th>
                <Th color={"gray.600"}>Plan Details</Th>
                <Th color={"gray.600"}>Created At</Th>
                <Th color={"gray.600"}>Admin Remarks</Th>
                <Th color={"gray.600"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"xs"}>
              {data?.map((item, key) => (
                <Tr key={key}>
                  <Td borderBottom={0}>MEMUSR543</Td>
                  <Td>
                    <Text>Sangam Kumar</Text>
                    <Text>sangam4742@gmail.com</Text>
                    <Text>+91 78380 74742</Text>
                  </Td>
                  <Td>
                    <Text>1234 5678 9101 1121</Text>
                    <HStack w={"full"}>
                      <Button
                        size={"xs"}
                        rounded={"full"}
                        colorScheme="twitter"
                      >
                        Front
                      </Button>
                      <Button
                        size={"xs"}
                        rounded={"full"}
                        colorScheme="twitter"
                      >
                        Back
                      </Button>
                    </HStack>
                  </Td>
                  <Td>
                    <Text>JNPPK1235G</Text>
                    <Button size={"xs"} rounded={"full"} colorScheme="twitter">
                      PAN Card
                    </Button>
                  </Td>
                  <Td borderBottom={0}>
                    <Text>
                      <strong>Package Name: </strong>Basic
                    </Text>
                    <Text>
                      <strong>Wallet Balance: </strong>₹
                      {Number(50000)?.toLocaleString("en-IN") ?? 0}
                    </Text>
                    <Text>
                      <strong>Min. Balance: </strong>₹
                      {Number(2000)?.toLocaleString("en-IN") ?? 0}
                    </Text>
                  </Td>
                  <Td borderBottom={0}>13-02-2024 19:54</Td>
                  <Td borderBottom={0}>-</Td>
                  <Td borderBottom={0}>
                    <HStack gap={4} w={"full"} justifyContent={"center"}>
                      <Menu closeOnSelect={false}>
                        <MenuButton
                          as={Button}
                          rightIcon={<ChevronDownIcon />}
                          size={"sm"}
                          bgColor={"brand.primary"}
                          _hover={{
                            bgColor: "brand.hover",
                          }}
                          color={"#FFF"}
                          fontWeight={"medium"}
                        >
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <HStack w={"full"} justifyContent={"space-between"}>
                              <Text>Block User</Text>
                              <Switch />
                            </HStack>
                          </MenuItem>
                          <MenuItem>Edit Details</MenuItem>
                          <MenuItem>Change Package</MenuItem>
                          <MenuItem>Send Password</MenuItem>
                          <MenuItem>Send PIN</MenuItem>
                          <MenuItem>View Ledger</MenuItem>
                        </MenuList>
                      </Menu>
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
