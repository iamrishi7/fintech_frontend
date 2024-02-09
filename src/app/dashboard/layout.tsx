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
// Here we have used react-icons package for the icons
import { FaBell, FaHandHoldingHeart, FaSatelliteDish } from "react-icons/fa";
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
import { FaMoneyBillTransfer } from "react-icons/fa6";
import ServerStatus from "@/components/dashboard/main/ServerStatus";
import MessageRibbon from "@/components/dashboard/main/MessageRibbon";
import { FC, ReactNode } from "react";
import Wallet from "@/components/dashboard/main/Wallet";

interface LayoutProps {
  children: ReactNode;
}


const Index: FC<LayoutProps> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
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

const SidebarContent = ({ ...props }: BoxProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    p={[4, "8"]}
    pr={[4, "0"]}
    overflowX="hidden"
    overflowY="auto"
    w={["full", "18%"]}
    {...props}
  >
    <Flex
      as={"a"}
      href="/dashboard"
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
        Pesa24
      </Text>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="md"
      color="gray.600"
      aria-label="Main Navigation"
    >
      <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
      <NavItem icon={AiOutlineTeam}>Team</NavItem>
      <NavItem icon={BsGear}>Profile</NavItem>
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
      <NavItem icon={IoFingerPrint}>AePS</NavItem>
      <NavItem icon={FaSatelliteDish}>Bill Pay</NavItem>
      <NavItem icon={SiRazorpay}>Payout</NavItem>
      <NavItem icon={IoPhonePortraitOutline}>Recharge</NavItem>
      <NavItem icon={GiTakeMyMoney}>CMS Deposit</NavItem>
      <NavItem icon={FaHandHoldingHeart}>LIC</NavItem>
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
      <NavItem icon={GiReceiveMoney}>Fund Request</NavItem>
      <NavItem icon={IoWallet}>Wallet Transfer</NavItem>
      <NavItem icon={FaMoneyBillTransfer}>Cashflow</NavItem>
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
      <NavItem icon={BsClipboardDataFill}>Ledger</NavItem>
      <NavItem icon={BsCalendar2CheckFill}>Daily Sales</NavItem>
      <NavItem icon={IoFingerPrint}>AePS</NavItem>
      <NavItem icon={FaSatelliteDish}>Bill Pay</NavItem>
      <NavItem icon={SiRazorpay}>Payout</NavItem>
      <NavItem icon={IoPhonePortraitOutline}>Recharge</NavItem>
      <NavItem icon={GiTakeMyMoney}>CMS Deposit</NavItem>
      <NavItem icon={FaHandHoldingHeart}>LIC</NavItem>
    </Flex>
  </Box>
);

const NavItem = (props: any) => {
  const color = useColorModeValue("gray.600", "gray.300");

  const { icon, children } = props;
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
      _hover={{
        bg: "white",
      }}
    >
      {icon && (
        <Box
          mr="4"
          bgColor={"#FFF"}
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
