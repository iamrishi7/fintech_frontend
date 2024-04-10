"use client";
import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  SimpleGrid,
  Container,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import RecentFundRequests from "@/components/dashboard/main/RecentFundRequests";
import RecentTransactions from "@/components/dashboard/main/RecentTransactions";
import CustomTabs from "@/components/misc/CustomTabs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import useAuth from "@/lib/hooks/useAuth";
import PendingFundRequests from "@/components/dashboard/main/admin/PendingFundRequests";

interface StatData {
  id: number;
  label: string;
  score: string | number;
  icon: any;
  percentage: string;
}

const statData: StatData[] = [
  {
    id: 1,
    label: "Fund Requests",
    score: "₹1730",
    icon: FaWallet,
    percentage: "10%",
  },
  {
    id: 2,
    label: "Payouts",
    score: "₹3245",
    icon: MdOutlineAttachMoney,
    percentage: "30%",
  },
  {
    id: 3,
    label: "Cashflow",
    score: "₹100",
    icon: FaMoneyBillTransfer,
    percentage: "30%",
  },
  {
    id: 4,
    label: "Wallet Transfers",
    score: "₹100",
    icon: BiTransferAlt,
    percentage: "30%",
  },
];

const tabList = [
  {
    id: "today",
    label: "Today",
  },
  {
    id: "month",
    label: "This Month",
  },
  {
    id: "year",
    label: "This Year",
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={8}
      >
        <Text fontSize={["sm", "md"]} fontWeight={"medium"} color={"gray.700"}>
          Good afternoon,{" "}
          {user?.name ? user?.name?.toUpperCase() : user?.roles?.toUpperCase()}!
        </Text>
        <CustomTabs
          tabList={tabList}
          onChange={(value) => console.log(value)}
          size={["sm", "sm"]}
        />
      </Stack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5} mb={4}>
        {statData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
      <Stack direction={["column", "row"]} gap={6}>
        <Box flex={4} p={6} bgColor={"#FFF"} rounded={8} boxShadow={"sm"}>
          <Text color={"gray.700"} fontWeight={"semibold"}>
            Pending Fund Requests
          </Text>
          <Text
            color={"gray.500"}
            fontSize={"xs"}
            as={"a"}
            href={"/admin/dashboard/manage/fund-request"}
            pb={4}
          >
            View All
          </Text>
          <PendingFundRequests showPagination={false} />
        </Box>
        {/* <Box flex={3} p={6} bgColor={"#FFF"} rounded={8} boxShadow={"sm"}>
          <Text color={"gray.700"} fontWeight={"semibold"}>
            Recent Transactions
          </Text>
          <Text
            color={"gray.500"}
            fontSize={"xs"}
            as={"a"}
            href={"/admin/dashboard/reports/ledger"}
            pb={4}
          >
            View All
          </Text>
          <RecentTransactions />
        </Box> */}
      </Stack>
    </>
  );
};

const Card = ({ data }: { data: StatData }) => {
  return (
    <Stack
      direction="column"
      rounded="8"
      boxShadow={"sm"}
      w="100%"
      textAlign="left"
      align="start"
      spacing={0}
      role="group"
      overflow="hidden"
    >
      <HStack
        py={6}
        px={5}
        spacing={4}
        bgColor={"#FFF"}
        w="100%"
        justifyContent={"space-between"}
      >
        <VStack spacing={0} align="start" maxW="lg" h="100%">
          <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
            {data.label}
          </Text>
          <HStack spacing={2}>
            <Text as="h2" fontSize="lg" fontWeight="extrabold">
              {data.score}
            </Text>
          </HStack>
        </VStack>
        <Flex
          justifyContent="center"
          alignItems="center"
          rounded="lg"
          p={2}
          bg="brand.primary"
          position="relative"
          w={12}
          h={12}
          overflow="hidden"
          lineHeight={0}
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
        >
          <Icon as={data.icon} w={6} h={6} color="white" />
        </Flex>
      </HStack>
    </Stack>
  );
};

export default Dashboard;
