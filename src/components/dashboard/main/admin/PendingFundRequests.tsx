"use client";
import CustomModal from "@/components/misc/CustomModal";
import Pagination from "@/components/misc/Pagination";
import { API } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import { API_BASE_URL } from "@/lib/utils/constants";
import {
  Avatar,
  Badge,
  BoxProps,
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
import { IoReceipt } from "react-icons/io5";
import StatusBadge from "../../reports/StatusBadge";

interface PendingFundRequestProps {
  maxH?: BoxProps["maxH"];
  parentData?: Array<any>;
  query?: object | null | undefined;
  showPagination?: boolean;
  status?: "pending" | "approved" | "rejected";
}

const PendingFundRequests = ({
  maxH,
  showPagination = true,
}: PendingFundRequestProps) => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();

  const [data, setData] = useState<any>([]);
  const [pages, setPages] = useState<any>([]);
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

  async function getPendingRequests(url?: string, query?: object) {
    try {
      const res = await API.adminPendingFundRequests(url, {
        ...query,
      });
      setData(res?.data);
      setPages(res?.meta?.links)
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
      {showPagination ? (
        <HStack
          w={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={8}
          overflowX={"scroll"}
          className="hide-scrollbar"
        >
          <Pagination
            pages={pages}
            onClick={(value: string) => getPendingRequests(value, {})}
          />
        </HStack>
      ) : null}
      <TableContainer maxH={maxH || "sm"} overflowY={"scroll"}>
        <Table size={"md"} variant={"striped"}>
          <Thead>
            <Tr>
              <Th color={"gray.600"}>Trnxn ID</Th>
              <Th color={"gray.600"}>Amount</Th>
              <Th color={"gray.600"}>Status</Th>
              <Th color={"gray.600"}>Updated By</Th>
              <Th color={"gray.600"}>User</Th>
              <Th color={"gray.600"}>Req. At</Th>
              <Th color={"gray.600"}>Action</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={"xs"}>
            {data?.map((item: any, key: number) => (
              <Tr key={key}>
                <Td borderBottom={0}>{item?.transaction_id}</Td>
                <Td borderBottom={0}>
                  ₹{Number(item?.amount)?.toLocaleString("en-IN") ?? 0}
                </Td>
                <Td>
                  <Badge textTransform={"uppercase"}>{item?.status}</Badge>
                </Td>
                <Td>
                  <HStack alignItems={"flex-start"}>
                    <Avatar size={"xs"} name={item?.user?.name} />
                    <Text>
                      {item?.user?.name} ({item?.user?.wallet_id})
                    </Text>
                  </HStack>
                </Td>
                <Td>
                  <HStack alignItems={"flex-start"}>
                    <Avatar size={"xs"} name={item?.reviewer?.name} />
                    <Text>{item?.reviewer?.name}</Text>
                  </HStack>
                </Td>
                <Td borderBottom={0}>
                  {new Date(item?.created_at)?.toLocaleString("en-GB")}
                </Td>
                <Td borderBottom={0} textAlign={"center"}>
                  {item?.status == "pending" ? (
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
                  ) : null}
                  <IconButton
                    aria-label="view-receipt"
                    size={"xs"}
                    rounded={"full"}
                    icon={<IoReceipt />}
                    colorScheme="twitter"
                    onClick={() =>
                      window.open(
                        `${API_BASE_URL.replace("api", "storage")}+${
                          item?.receipt
                        }`,
                        "_blank"
                      )
                    }
                    isLoading={isLoading}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {showPagination ? (
        <HStack
          w={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={8}
          overflowX={"scroll"}
          className="hide-scrollbar"
        >
          <Pagination
            pages={pages}
            onClick={(value: string) => getPendingRequests(value, {})}
          />
        </HStack>
      ) : null}

      <CustomModal
        title={"Enter Remarks"}
        isOpen={Boolean(targetRequestId)}
        onClose={() => setTargetRequestId(null)}
        onSubmit={() => rejectRequest()}
        isLoading={isLoading}
      >
        <Input onChange={(e) => setAdminRemarks(e.target.value)} />
      </CustomModal>
    </>
  );
};

export default PendingFundRequests;
