"use client";
import CustomEditableInput from "@/components/misc/CustomEditableInput";
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
} from "@chakra-ui/react";
import React, { useState } from "react";

interface PackagesProps {
  onEditButtonClick: (id: string | number) => void;
}

const Packages = ({ onEditButtonClick }: PackagesProps) => {
  const [data, setData] = useState([{ id: 1, name: "John Doe", amount: "50" }]);
  return (
    <>
      <TableContainer maxH={"sm"} overflowY={"scroll"}>
        <Table size={"md"} variant={"striped"}>
          <Thead>
            <Tr color={"gray.600"}>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Is Default</Th>
              <Th>Created By</Th>
              <Th>Created At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={"xs"}>
            {data?.map((item, key) => (
              <Tr key={key}>
                <Td>2</Td>
                <Td>
                  <CustomEditableInput defaultValue="Basic package" />
                </Td>
                <Td>
                  <CustomEditableInput defaultValue="Basic package given to retailers" />
                </Td>
                <Td>
                  <Switch />
                </Td>
                <Td>
                  <Switch />
                </Td>
                <Td>Sangam Kumar</Td>

                <Td borderBottom={0}>13-02-2024 19:34</Td>
                <Td borderBottom={0}>
                  <HStack gap={4} w={"full"} justifyContent={"center"}>
                    <Button
                      bgColor={"brand.primary"}
                      _hover={{
                        bgColor: "brand.hover",
                      }}
                      color={"#FFF"}
                      size={"sm"}
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
