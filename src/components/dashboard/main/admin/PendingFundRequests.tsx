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

const PendingFundRequests = () => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();

  const [data, setData] = useState([]);
  const [adminRemarks, setAdminRemarks] = useState("");
  const [targetRequestId, setTargetRequestId] = useState<
    string | number | null
  >("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      getPendingRequests();
    }
  }, []);

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
      setIsLoading(true);
      await API.adminApproveFundRequest(id);
      await getPendingRequests();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      handleError({ title: "Couldn't update fund request", error: error });
    }
  }

  async function rejectRequest() {
    setIsLoading(true);
    try {
      await API.adminRejectFundRequest(targetRequestId, adminRemarks);
      await getPendingRequests();
      setTargetRequestId(null);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
              <Th color={"gray.600"}>User</Th>
              <Th color={"gray.600"}>Req. At</Th>
              <Th color={"gray.600"}>Status</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={"xs"}>
            {data?.map((item: any, key) => (
              <Tr key={key}>
                <Td borderBottom={0}>{item?.id}</Td>
                <Td borderBottom={0}>
                  ₹{Number(item?.amount)?.toLocaleString("en-IN") ?? 0}
                </Td>
                <Td>
                  <HStack alignItems={"flex-start"}>
                    <Avatar size={"xs"} name={item?.user?.name} />
                    <Text>
                      {item?.user?.name}({item?.user?.wallet_id})
                    </Text>
                  </HStack>
                </Td>
                <Td borderBottom={0}>
                  {new Date(item?.created_at)?.toLocaleString("en-GB")}
                </Td>
                <Td borderBottom={0}>
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

export default PendingFundRequests;
