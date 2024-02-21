"use client";
import CustomModal from "@/components/misc/CustomModal";
import { API } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Avatar,
  HStack,
  IconButton,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaClock } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const RecentFundRequests = () => {
  const { user } = useAuth();
  const { handleError } = useErrorHandler();

  const [data, setData] = useState([]);
  const [adminRemarks, setAdminRemarks] = useState("");
  const [targetRequestId, setTargetRequestId] = useState<
    string | number | null
  >("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.roles) {
      if (user?.roles == "admin") {
        getPendingRequests();
      } else {
        getMyRequests();
      }
    }
  }, [user?.roles]);

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

  async function approveRequest(id: string | number) {
    try {
      await API.adminApproveFundRequest(id);
      await getPendingRequests()
    } catch (error) {
      handleError({ title: "Couldn't update fund request", error: error });
    }
  }

  async function rejectRequest() {
    try {
      await API.adminRejectFundRequest(targetRequestId, adminRemarks);
      await getPendingRequests()
      setTargetRequestId(null);
    } catch (error) {
      handleError({ title: "Couldn't update fund request", error: error });
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
                {user?.roles == "admin" ? "User" : "Admin"}
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
                  {user?.roles == "admin" ? (
                    <HStack alignItems={"flex-start"}>
                      <Avatar size={"xs"} name={item?.user?.name} />
                      <Text>
                        {item?.user?.name}({item?.user?.wallet_id})
                      </Text>
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
                  {user?.roles == "admin" ? (
                    <HStack gap={4} w={"full"} justifyContent={"center"}>
                      <IconButton
                        aria-label="approve"
                        size={"xs"}
                        rounded={"full"}
                        icon={<FaCheck />}
                        colorScheme="whatsapp"
                        onClick={() => approveRequest(item?.id)}
                        isLoading={isLoading}
                      />
                      <IconButton
                        aria-label="reject"
                        size={"xs"}
                        rounded={"full"}
                        icon={<FaXmark />}
                        colorScheme="red"
                        onClick={() => setTargetRequestId(item?.id)}
                        isLoading={isLoading}
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
                        />
                      ) : null}
                    </HStack>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <CustomModal
        title={"Enter Remarks"}
        isOpen={Boolean(targetRequestId)}
        onClose={() => setTargetRequestId(null)}
        onSubmit={() => rejectRequest()}
      >
        <Input onChange={(e) => setAdminRemarks(e.target.value)} />
      </CustomModal>
    </>
  );
};

export default RecentFundRequests;
