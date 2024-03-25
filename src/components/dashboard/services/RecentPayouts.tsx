"use client";
import {
  Badge,
  HStack,
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
import ReceiptButton from "../misc/ReceiptButton";

const RecentPayouts = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
  ]);
  return (
    <>
      <TableContainer maxH={"sm"} overflowY={"scroll"}>
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
                    <ReceiptButton data={item} />
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
    </>
  );
};

export default RecentPayouts;
