"use client";
import ExportButtons from "@/components/dashboard/misc/ExportButtons";
import ReceiptButton from "@/components/dashboard/misc/ReceiptButton";
import SelectPlan from "@/components/dashboard/misc/SelectPlan";
import CustomButton from "@/components/misc/CustomButton";
import CustomModal from "@/components/misc/CustomModal";
import CustomTabs from "@/components/misc/CustomTabs";
import Pagination from "@/components/misc/Pagination";
import { API } from "@/lib/api";
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
  Spacer,
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

const page = () => {
  const { handleError } = useErrorHandler();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const ref = useRef(true);
  const Toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("retailer");

  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [pages, setPages] = useState([]);

  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      fetchData({});
    }
  }, []);

  useEffect(() => {
    if (url) {
      fetchData({});
    }
  }, [url]);

  async function fetchData(values: any) {
    setIsLoading(true);
    try {
      const res = await API.adminGetUsers({ role: role, ...values }, url);
      setData(res.data);
      setPages(res.links);
      setIsLoading(false);
    } catch (error) {
      handleError({ title: "Error while fetching transactions", error: error });
      setIsLoading(false);
    }
  }

  async function sendPassword(id: string) {
    try {
      Toast({
        description: "Please wait, sending new Password to user.",
      });
      await API.adminSendCredentials(id, {
        credential_type: "password",
        channel: "email",
      });
      Toast({
        status: "success",
        description: "Password was successfully sent to the user!",
      });
    } catch (error) {
      handleError({ title: "Error while sending password", error: error });
    }
  }

  async function sendPin(id: string) {
    try {
      Toast({
        description: "Please wait, sending new PIN to user.",
      });
      await API.adminSendCredentials(id, {
        credential_type: "pin",
        channel: "email",
      });
      Toast({
        status: "success",
        description: "PIN was successfully sent to the user!",
      });
    } catch (error) {
      handleError({ title: "Error while sending PIN", error: error });
    }
  }

  async function blockUser(id: string) {
    try {
      await API.adminBlockUser(id);
      await fetchData({});
      Toast({
        status: "success",
        description: "User was blocked successfully!",
      });
    } catch (error) {
      handleError({ title: "Error while blocking user", error: error });
    }
  }

  async function unblockUser(id: string) {
    try {
      await API.adminUnblockUser(id);
      await fetchData({});
      Toast({
        status: "success",
        description: "User was un-blocked successfully!",
      });
    } catch (error) {
      handleError({ title: "Error while un-blocking user", error: error });
    }
  }

  async function addRemarks(id: string, data: object) {
    try {
      await API.adminUpdateUser(id, data);
      onClose();
      Toast({
        status: "success",
        description: "Remarks were added successfully",
      });
    } catch (error) {
      handleError({ title: "Error while updating user", error: error });
    }
  }

  return (
    <>
      <Stack direction={["column", "row"]} alignItems={"center"} mb={8}>
        <HStack gap={4}>
          <Heading as={"h1"} fontSize={"xl"}>
            Users List
          </Heading>
          <Link href="/admin/dashboard/users/create">
            <CustomButton size={"sm"} rounded={"full"} leftIcon={<FaPlus />}>
              Create New
            </CustomButton>
          </Link>
        </HStack>
        <Spacer />
        <CustomTabs
          tabList={[
            {
              id: "retailer",
              label: "retailer",
            },
            {
              id: "distributor",
              label: "distributor",
            },
            {
              id: "admin",
              label: "admin",
            },
          ]}
          onChange={(value) => setRole(value)}
          size={"sm"}
        />
      </Stack>
      <br />

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
                <SelectPlan
                  variant="none"
                  onChange={handleChange}
                  name="commission_package"
                />
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
                  onClick={() => fetchData(values)}
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
          <Pagination pages={pages} onClick={(url) => setUrl(url)} />
        </Stack>
        <br />
        <TableContainer maxH={"lg"} overflowY={"scroll"}>
          <Table size={"md"} variant={"striped"}>
            <Thead>
              <Tr>
                <Th color={"gray.600"}>Wallet No.</Th>
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
              {data?.map((item: any, key) => (
                <Tr key={key}>
                  <Td borderBottom={0}>{item?.wallet_id}</Td>
                  <Td>
                    <Text>
                      {item?.name ||
                        item?.first_name + item?.middle_name + item?.last_name}
                    </Text>
                    <Text>{item?.email}</Text>
                    <Text>{item?.phone_number}</Text>
                  </Td>
                  <Td>
                    <Text>{item?.aadhaar_number}</Text>
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
                    <Text>{item?.pan_number}</Text>
                    <Button size={"xs"} rounded={"full"} colorScheme="twitter">
                      PAN Card
                    </Button>
                  </Td>
                  <Td borderBottom={0}>
                    <Text>
                      <strong>Package Name: </strong>
                      {item?.plan?.name}
                    </Text>
                    <Text>
                      <strong>Wallet Balance: </strong>₹
                      {Number(item?.wallet)?.toLocaleString("en-IN") ?? 0}
                    </Text>
                    <Text>
                      <strong>Min. Balance: </strong>₹
                      {Number(2000)?.toLocaleString("en-IN") ?? 0}
                    </Text>
                  </Td>
                  <Td borderBottom={0}>
                    {new Date(item?.created_at).toLocaleString("en-GB")}
                  </Td>
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
                              <Text>
                                {Boolean(item?.deleted_at)
                                  ? "Un-block User"
                                  : "Block User"}
                              </Text>
                              <Switch
                                isChecked={!Boolean(item?.deleted_at)}
                                onChange={async (e) => {
                                  if (e.target.checked) {
                                    await unblockUser(item?.id);
                                  } else {
                                    await blockUser(item?.id);
                                  }
                                }}
                              />
                            </HStack>
                          </MenuItem>
                          <MenuItem
                            as={"a"}
                            href={`/admin/dashboard/users/edit/${item?.id}`}
                          >
                            Edit Details
                          </MenuItem>
                          <MenuItem onClick={() => sendPassword(item?.id)}>
                            Send Password
                          </MenuItem>
                          <MenuItem onClick={() => sendPin(item?.id)}>
                            Send PIN
                          </MenuItem>
                          <MenuItem>Add Remarks</MenuItem>
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
        <Pagination pages={pages} onClick={(url) => setUrl(url)} />
      </Box>

      {/* Add Admin Remarks To User */}
      <CustomModal title={"Add Remarks"} isOpen={isOpen} onClose={onClose}>
        <Input value={remarks} onChange={(e) => setRemarks(e.target.value)} />
      </CustomModal>
    </>
  );
};

export default page;
