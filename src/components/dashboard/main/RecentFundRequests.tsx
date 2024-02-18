"use client";
import { API } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Avatar,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaClock } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const RecentFundRequests = () => {
  const ref = useRef(true);
  const { user } = useAuth();
  const { handleError } = useErrorHandler();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      if (user?.role == "admin") {
        getPendingRequests();
      } else {
        getMyRequests();
      }
    }
  }, [user?.role]);

  async function getMyRequests() {
    try {
      const res = await API.fundRequests();
      setData(res?.data);
    } catch (error) {
      handleError({ title: "Couldn't fetch fund requests", error: error });
    }
  }

  async function getPendingRequests() {
    try {
      const res = await API.adminPendingFundRequests();
      setData(res?.data);
    } catch (error) {
      handleError({ title: "Couldn't fetch fund requests", error: error });
    }
  }

  return (
    <>
      <TableContainer maxH={"sm"} overflowY={"scroll"}>
        <Table size={"md"} variant={"striped"}>
          <Thead>
            <Tr>
              <Th color={"gray.600"}>ID</Th>
              <Th color={"gray.600"}>Amount</Th>
              <Th color={"gray.600"}>
                {user?.role == "admin" ? "User" : "Admin"}
              </Th>
              <Th color={"gray.600"}>Req. At</Th>
              <Th color={"gray.600"}>Status</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={"xs"}>
            {data?.map((item, key) => (
              <Tr key={key}>
                <Td borderBottom={0}>{item?.id}</Td>
                <Td borderBottom={0}>
                  ₹{Number(item?.amount)?.toLocaleString("en-IN") ?? 0}
                </Td>
                <Td>
                  {user?.role == "admin" ? (
                    <HStack alignItems={"flex-start"}>
                      <Avatar size={"xs"} name={item?.user?.name} />
                      <Text>{item?.user?.name}</Text>
                    </HStack>
                  ) : item?.approved_by ? (
                    <HStack alignItems={"flex-start"}>
                      <Avatar size={"xs"} name={item?.approved_by?.name} />
                      <Text>{item?.approved_by?.name}</Text>
                    </HStack>
                  ) : null}
                </Td>
                <Td borderBottom={0}>
                  {new Date(item?.created_at)?.toLocaleString("en-GB")}
                </Td>
                <Td borderBottom={0}>
                  {user?.role == "admin" ? (
                    <HStack gap={4} w={"full"} justifyContent={"center"}>
                      <IconButton
                        aria-label="approve"
                        size={"xs"}
                        rounded={"full"}
                        icon={<FaCheck />}
                        colorScheme="whatsapp"
                      />
                      <IconButton
                        aria-label="reject"
                        size={"xs"}
                        rounded={"full"}
                        icon={<FaXmark />}
                        colorScheme="red"
                      />
                    </HStack>
                  ) : (
                    <HStack gap={4} w={"full"} justifyContent={"center"}>
                      {item?.status == "approved" ? (
                        <IconButton
                          aria-label="approve"
                          size={"xs"}
                          rounded={"full"}
                          icon={<FaCheck />}
                          colorScheme="whatsapp"
                        />
                      ) : item?.status == "rejected" ? (
                        <IconButton
                          aria-label="reject"
                          size={"xs"}
                          rounded={"full"}
                          icon={<FaXmark />}
                          colorScheme="red"
                        />
                      ) : item?.status == "pending" ? (
                        <IconButton
                          aria-label="reject"
                          size={"xs"}
                          rounded={"full"}
                          icon={<FaClock />}
                          colorScheme="twitter"
                        />) : null}
                    </HStack>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentFundRequests;
