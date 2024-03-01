"use client";
import CustomButton from "@/components/misc/CustomButton";
import CustomEditableInput from "@/components/misc/CustomEditableInput";
import DateFormatter from "@/components/misc/DateFormatter";
import { API } from "@/lib/api";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Badge,
  Button,
  HStack,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

interface PackagesProps {
  onEditButtonClick: (id: string | number) => void;
}

const Packages = ({ onEditButtonClick }: PackagesProps) => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();
  const Toast = useToast();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      fetchData();
    }
  }, []);

  async function fetchData() {
    try {
      const res = await API.adminGetPlans();
      setData(res.data);
    } catch (error) {
      handleError({
        title: "Error while getting plans",
        error: error,
      });
    }
  }

  async function updatePlan(id: number, data: object) {
    try {
      await API.adminUpdatePlan(id, data);
      Toast({
        status: "success",
        description: "Status updated successfully",
      });
      fetchData();
    } catch (error) {
      handleError({
        title: "Error while getting plans",
        error: error,
      });
    }
  }

  return (
    <>
      <HStack w={"full"} justifyContent={"flex-end"} mb={4}>
        <CustomButton size={"sm"} rounded={"full"} leftIcon={<FaPlus />}>
          Create New
        </CustomButton>
      </HStack>
      <TableContainer maxH={"sm"} overflowY={"scroll"}>
        <Table size={"md"} variant={"striped"}>
          <Thead>
            <Tr color={"gray.600"}>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Is Default</Th>
              <Th>Created By</Th>
              <Th>Created At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={"xs"}>
            {data?.map((item: any, key) => (
              <Tr key={key}>
                <Td>{key + 1}</Td>
                <Td>
                  <CustomEditableInput defaultValue={item?.name} />
                </Td>
                <Td textAlign={"center"}>
                  <Switch
                    isChecked={Boolean(item?.default)}
                    onChange={(e) => {
                      updatePlan(item?.id, {
                        default: e.target.checked ? 1 : 0,
                      });
                    }}
                  />
                </Td>
                <Td>{item?.user?.name}</Td>

                <Td borderBottom={0}>
                  <DateFormatter>{item?.created_at}</DateFormatter>
                </Td>
                <Td borderBottom={0}>
                  <HStack gap={4} w={"full"} justifyContent={"center"}>
                    <Button
                      colorScheme="twitter"
                      size={"xs"}
                      rounded={"full"}
                      onClick={() => onEditButtonClick(item?.id)}
                    >
                      Edit Commission
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Packages;
