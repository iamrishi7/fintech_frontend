"use client";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  BoxProps,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  Input,
  HStack,
  Tooltip,
} from "@chakra-ui/react";

import {
  FaBell,
  FaHandHoldingHeart,
  FaSatelliteDish,
  FaUser,
} from "react-icons/fa";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import {
  BsGear,
  BsClipboardDataFill,
  BsCalendar2CheckFill,
} from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";
import {
  IoFingerPrint,
  IoPhonePortraitOutline,
  IoWallet,
} from "react-icons/io5";
import { SiRazorpay } from "react-icons/si";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { FaIndianRupeeSign, FaMoneyBillTransfer } from "react-icons/fa6";
import ServerStatus from "@/components/dashboard/main/ServerStatus";
import MessageRibbon from "@/components/dashboard/main/MessageRibbon";
import { FC, ReactNode, useEffect, useState } from "react";
import Wallet from "@/components/dashboard/main/Wallet";
import { IoMdLogOut } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { PiGearSix } from "react-icons/pi";
import useAuth from "@/lib/hooks/useAuth";

interface LayoutProps {
  children: ReactNode;
}

const Index: FC<LayoutProps> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [role, setRole] = useState("admin");

  return (
    <>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <MemberSidebarContent display={{ base: "none", md: "unset" }} />

        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <MemberSidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: "20%" }} transition=".3s ease">
          <MessageRibbon />

          <Flex
            as="header"
            align="center"
            justifyContent={{ base: "space-between", md: "space-between" }}
            w="full"
            px="4"
            py={8}
            gap={4}
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={onOpen}
              icon={<FiMenu />}
              size="md"
            />

            <Input
              rounded={"full"}
              bgColor={"#FFF"}
              maxW={"xs"}
              placeholder="Search..."
              display={["none", "inline"]}
            />

            <Flex align="center" gap={4}>
              <Box
                p={3}
                rounded={"full"}
                bgColor={"#FFF"}
                display={"grid"}
                placeContent={"center"}
                boxShadow={"md"}
                cursor="pointer"
              >
                <Icon color="gray.500" as={FaBell} fontSize={20} />
              </Box>

              <Wallet />
            </Flex>
          </Flex>

          <Box
            as="main"
            p={4}
            w={"full"}
            minH="100vh"
            bg={useColorModeValue("auto", "gray.800")}
          >
            {children}
          </Box>
          <ServerStatus />
        </Box>
      </Box>
    </>
  );
};

const MemberSidebarContent = ({ ...props }: BoxProps) => {
  const pathname = usePathname();
  const { handleLogout } = useAuth();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      p={[4, "8"]}
      overflowX="hidden"
      overflowY="auto"
      w={["full", "18%", "18%", "18%"]}
      {...props}
    >
      <Flex
        as={"a"}
        href="/member/dashboard"
        px="4"
        pb={6}
        mb={4}
        align="center"
        borderBottom={"0.5px solid"}
        borderBottomColor={"gray.300"}
      >
        <Icon as={RiFlashlightFill} h={8} w={8} />
        <Text
          fontSize="xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          NXGENIUS
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem
          icon={AiOutlineHome}
          isActive={pathname == "/member/dashboard"}
          link={"/member/dashboard"}
        >
          Dashboard
        </NavItem>
        <NavItem
          icon={AiOutlineTeam}
          isActive={pathname?.split("/")?.includes("team")}
          link={"/member/dashboard/team"}
        >
          Team
        </NavItem>
        <NavItem
          icon={FaUser}
          isActive={pathname?.split("/")?.includes("profile")}
          link={"/member/dashboard/profile"}
        >
          Profile
        </NavItem>
        <br />
        <Text
          fontWeight={"semibold"}
          fontSize={"sm"}
          pb={2}
          mb={4}
          borderBottom={"0.5px solid"}
          borderBottomColor={"gray.300"}
        >
          SERVICES
        </Text>
        <NavItem
          icon={IoFingerPrint}
          isActive={
            pathname?.split("/")?.includes("aeps") &&
            pathname?.split("/")?.includes("services")
          }
          link={"/member/dashboard/services/aeps"}
        >
          AePS
        </NavItem>
        <NavItem
          icon={FaSatelliteDish}
          isActive={
            pathname?.split("/")?.includes("bill-pay") &&
            pathname?.split("/")?.includes("services")
          }
          link={"/member/dashboard/services/bill-pay"}
        >
          Bill Pay
        </NavItem>
        <NavItem
          icon={SiRazorpay}
          isActive={
            pathname?.split("/")?.includes("payout") &&
            pathname?.split("/")?.includes("services")
          }
          link={"/member/dashboard/services/payout"}
        >
          Payout
        </NavItem>
        <NavItem
          icon={IoPhonePortraitOutline}
          isActive={
            pathname?.split("/")?.includes("recharge") &&
            pathname?.split("/")?.includes("services")
          }
          link={"/member/dashboard/services/recharge"}
        >
          Recharge
        </NavItem>
        <NavItem
          icon={GiTakeMyMoney}
          isActive={
            pathname?.split("/")?.includes("cms-deposit") &&
            pathname?.split("/")?.includes("services")
          }
          link={"/member/dashboard/services/cms-deposit"}
        >
          CMS Deposit
        </NavItem>
        <NavItem
          icon={FaHandHoldingHeart}
          isActive={
            pathname?.split("/")?.includes("lic") &&
            pathname?.split("/")?.includes("services")
          }
          link={"/member/dashboard/services/lic"}
        >
          LIC
        </NavItem>
        <br />
        <Text
          fontWeight={"semibold"}
          fontSize={"sm"}
          pb={2}
          mb={4}
          borderBottom={"0.5px solid"}
          borderBottomColor={"gray.300"}
        >
          MONEY
        </Text>
        <NavItem
          icon={GiReceiveMoney}
          isActive={
            pathname?.split("/")?.includes("fund-request") &&
            pathname?.split("/")?.includes("manage")
          }
          link={"/member/dashboard/manage/fund-request"}
        >
          Fund Request
        </NavItem>
        <NavItem
          icon={IoWallet}
          isActive={
            pathname?.split("/")?.includes("wallet-transfer") &&
            pathname?.split("/")?.includes("manage")
          }
          link={"/member/dashboard/manage/wallet-transfer"}
        >
          Wallet Transfer
        </NavItem>
        <br />
        <Text
          fontWeight={"semibold"}
          fontSize={"sm"}
          pb={2}
          mb={4}
          borderBottom={"0.5px solid"}
          borderBottomColor={"gray.300"}
        >
          REPORTS
        </Text>
        <NavItem
          icon={BsClipboardDataFill}
          isActive={
            pathname?.split("/")?.includes("ledger") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/ledger"}
        >
          Ledger
        </NavItem>
        <NavItem
          icon={BsCalendar2CheckFill}
          isActive={
            pathname?.split("/")?.includes("daily-sales") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/daily-sales"}
        >
          Daily Sales
        </NavItem>
        <NavItem
          icon={FaMoneyBillTransfer}
          isActive={
            pathname?.split("/")?.includes("fund-flow") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/fund-flow"}
        >
          Fund Flow
        </NavItem>
        <NavItem
          icon={IoFingerPrint}
          isActive={
            pathname?.split("/")?.includes("aeps") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/aeps"}
        >
          AePS
        </NavItem>
        <NavItem
          icon={FaSatelliteDish}
          isActive={
            pathname?.split("/")?.includes("bill-pay") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/bill-pay"}
        >
          Bill Pay
        </NavItem>
        <NavItem
          icon={SiRazorpay}
          isActive={
            pathname?.split("/")?.includes("payout") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/payout"}
        >
          Payout
        </NavItem>
        <NavItem
          icon={IoPhonePortraitOutline}
          isActive={
            pathname?.split("/")?.includes("recharge") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/recharge"}
        >
          Recharge
        </NavItem>
        <NavItem
          icon={GiTakeMyMoney}
          isActive={
            pathname?.split("/")?.includes("cms-deposit") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/cms-deposit"}
        >
          CMS Deposit
        </NavItem>
        <NavItem
          icon={FaHandHoldingHeart}
          isActive={
            pathname?.split("/")?.includes("lic") &&
            pathname?.split("/")?.includes("reports")
          }
          link={"/member/dashboard/reports/lic"}
        >
          LIC
        </NavItem>

        <br />
        <br />
        <br />
        <HStack
          px={4}
          py={2}
          w={"full"}
          rounded={8}
          alignItems={"center"}
          justifyContent={"center"}
          transition={"all .3s ease"}
          cursor={"pointer"}
          _hover={{ bgColor: "gray.200" }}
          color={"red.400"}
          onClick={handleLogout}
        >
          <Icon as={IoMdLogOut} boxSize={6} />
          <Text>Logout</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

const NavItem = (props: any) => {
  const color = useColorModeValue("gray.600", "gray.300");

  const { icon, children, isActive = false, link } = props;
  return (
    <Flex
      align="center"
      px="4"
      py="2"
      mb={4}
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue("inherit", "gray.400")}
      rounded={4}
      boxShadow={isActive ? "base" : "none"}
      bgColor={isActive ? "#FFF" : "transparent"}
      _hover={{
        bg: "white",
      }}
      as={"a"}
      href={link ?? "#"}
    >
      {icon && (
        <Box
          mr="4"
          bgColor={isActive ? "brand.primary" : "#FFF"}
          p={2}
          rounded={4}
          display={"grid"}
          placeContent={"center"}
          _groupHover={{
            bgColor: "brand.primary",
          }}
          transition={"all .3s ease"}
        >
          <Icon
            fontSize={"lg"}
            color={isActive ? "#FFF" : "auto"}
            _groupHover={{
              color: "#FFF",
            }}
            as={icon}
          />
        </Box>
      )}
      {children}
    </Flex>
  );
};

export default Index;
