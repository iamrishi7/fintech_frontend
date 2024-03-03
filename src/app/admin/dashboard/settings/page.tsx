"use client";
import ManageAdminPermissions from "@/components/dashboard/admin/ManageAdminPermissions";
import ManageMemberPermissions from "@/components/dashboard/admin/ManageMemberPermissions";
import PortalBanks from "@/components/dashboard/main/admin/PortalBanks";
import CustomTabs from "@/components/misc/CustomTabs";
import { API } from "@/lib/api";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";

interface FormSubheadingProps {
  title: string;
  mt?: BoxProps["mt"];
  mb?: BoxProps["mb"];
}

const FormSubheading = ({ title, mt, mb }: FormSubheadingProps) => {
  return (
    <Text
      fontSize={"sm"}
      fontWeight={"medium"}
      color={"gray.700"}
      mt={mt ?? 16}
      mb={mb ?? 8}
      textTransform={"capitalize"}
    >
      {title}
    </Text>
  );
};

const page = () => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();

  const [data, setData] = useState<any>(null);
  const [rawData, setRawData] = useState<any>(null);

  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      getSettings();
      getRoles();
    }
  }, []);

  async function handleStatusUpdate(id: string | number, data: object) {
    try {
      await API.adminUpdateService(id, data);
      getSettings();
    } catch (error) {
      handleError({
        title: "Error while upating status",
        error: error,
      });
    }
  }

  async function getSettings() {
    try {
      let services: { [key: string]: boolean } = {};
      const res = await API.getServices();
      setRawData(res.data);

      if (res.data?.length) {
        res.data?.forEach((item: any) => {
          services[item?.name] = Boolean(item?.active);
        });
      }

      setData(services);
      localStorage.setItem("services", JSON.stringify(services));
    } catch (error) {
      handleError({
        title: "Error while getting settings",
        error: error,
      });
    }
  }

  async function getRoles() {
    try {
      const res = await API.adminGetAllRoles();
      setRoles(res.data);
    } catch (error) {
      handleError({
        title: "Error while getting roles",
        error: error,
      });
    }
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Portal Settings
      </Heading>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <VStack w={"full"} gap={6} alignItems={"flex-start"}>
          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Signup</Text>
            <Switch
              isChecked={data?.allow_signup}
              name="allow_signup"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Fund Requests</Text>
            <Switch
              isChecked={data?.allow_fund_request}
              name="allow_fund_request"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Wallet Transfers</Text>
            <Switch
              isChecked={data?.allow_wallet_transfer}
              name="allow_wallet_transfer"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Fund Transfers</Text>
            <Switch
              isChecked={data?.allow_fund_transfer}
              name="allow_fund_transfer"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Allow Chat Support</Text>
            <Switch
              isChecked={data?.allow_chat_support}
              name="allow_chat_support"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>
        </VStack>
      </Box>

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Fund Request Banks
      </Heading>

      <PortalBanks />

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Eko Services Settings
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <VStack w={"full"} gap={6} alignItems={"flex-start"}>
          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Eko API Status</Text>
            <Switch
              isChecked={data?.eko_api}
              name="eko_api"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>AePS Services</Text>
            <Switch
              isChecked={data?.eko_aeps}
              name="eko_aeps"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Bill Pay Services</Text>
            <Switch
              isChecked={data?.eko_bbps}
              name="eko_bbps"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>DMT Services</Text>
            <Switch
              isChecked={data?.eko_dmt}
              name="eko_dmt"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>
        </VStack>
      </Box>

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Paysprint Services Settings
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <VStack w={"full"} gap={6} alignItems={"flex-start"}>
          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Paysprint API Status</Text>
            <Switch
              isChecked={data?.paysprint_api}
              name="paysprint_api"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>AePS Services</Text>
            <Switch
              isChecked={data?.paysprint_aeps}
              name="paysprint_aeps"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Bill Pay Services</Text>
            <Switch
              isChecked={data?.paysprint_bbps}
              name="paysprint_bbps"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>CMS Deposit Services</Text>
            <Switch
              isChecked={data?.paysprint_cms}
              name="paysprint_cms"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>DMT Services</Text>
            <Switch
              isChecked={data?.paysprint_dmt}
              name="paysprint_dmt"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Recharge Services</Text>
            <Switch
              isChecked={data?.paysprint_recharge}
              name="paysprint_recharge"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>LIC Services</Text>
            <Switch
              isChecked={data?.paysprint_lic}
              name="paysprint_lic"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Fastag Services</Text>
            <Switch
              isChecked={data?.paysprint_fastag}
              name="paysprint_fastag"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>PAN Card Services</Text>
            <Switch
              isChecked={data?.paysprint_pan}
              name="paysprint_pan"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>
        </VStack>
      </Box>

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Other Services Settings
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <VStack w={"full"} gap={6} alignItems={"flex-start"}>
          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Razorpay Payout Status</Text>
            <Switch
              isChecked={data?.razorpay_payout}
              name="razorpay_payout"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>

          <HStack w={["full", "sm"]} justifyContent={"space-between"}>
            <Text>Paydeer Payout Status</Text>
            <Switch
              isChecked={data?.paydeer_payout}
              name="paydeer_payout"
              onChange={(e) =>
                handleStatusUpdate(
                  rawData?.find((item: any) => item?.name == e.target.name)?.id,
                  { active: e.target.checked }
                )
              }
            />
          </HStack>
        </VStack>
      </Box>

      <br />

      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Default Admin Permissions
      </Heading>
      <ManageAdminPermissions
        roleId={roles?.find((role: any) => role?.name == "admin")?.id}
      />

      <br />

      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={8}
      >
        <Heading as={"h1"} fontSize={"xl"}>
          Default User Permissions
        </Heading>
        {roles?.length ? (
          <CustomTabs
            tabList={roles
              ?.filter((role: any) => role?.name != "admin")
              ?.map((role: any) => ({
                id: role?.id,
                label: role?.name?.replace(/_/g, " "),
              }))}
            defaultValue={selectedRole}
            onChange={(value) => setSelectedRole(value)}
          />
        ) : null}
      </Stack>
      <ManageMemberPermissions
        roleId={selectedRole}
        isRetailer={
          roles?.find((role: any) => role?.id == selectedRole)?.name ===
          "retailer"
        }
      />
    </>
  );
};

export default page;
