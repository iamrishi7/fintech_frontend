"use client";
import CustomTabs from "@/components/misc/CustomTabs";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AepsWithdrawalSchema from "./schema/AepsWithdrawalSchema";
import AepsMiniStatementSchema from "./schema/AepsMiniStatementSchema";
import BillPaySchema from "./schema/BillPaySchema";
import DmtSchema from "./schema/DmtSchema";
import PayoutSchema from "./schema/PayoutSchema";
import LicSchema from "./schema/LicSchema";
import CmsSchema from "./schema/CmsSchema";

interface CommissionSetupProps {
  packageId: string | number;
}

const CommissionSetup = ({ packageId }: CommissionSetupProps) => {
  const [services, setServices] = useState([
    {
      id: "aeps-withdrawal",
      label: "AePS Withdrawal",
    },
    {
      id: "aeps-mini-statement",
      label: "AePS Mini Statement",
    },
    {
      id: "bbps",
      label: "Bill Pay",
    },
    {
      id: "dmt",
      label: "DMT",
    },
    {
      id: "payout",
      label: "Payout",
    },
    {
      id: "lic",
      label: "LIC Payment",
    },
    {
      id: "pan",
      label: "PAN Application",
    },
    {
      id: "cms",
      label: "CMS Deposit",
    },
  ]);

  const [activeService, setActiveService] = useState<
    string | undefined | number
  >("");

  return (
    <>
      <Box>
        <Tabs>
          <TabList>
            {services?.map((item, key) => (
              <Tab key={key} fontSize={"sm"}>
                {item?.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <AepsWithdrawalSchema />
            </TabPanel>
            <TabPanel>
              <AepsMiniStatementSchema />
            </TabPanel>
            <TabPanel>
              <BillPaySchema />
            </TabPanel>
            <TabPanel>
              <DmtSchema />
            </TabPanel>
            <TabPanel>
              <PayoutSchema />
            </TabPanel>
            <TabPanel>
              <LicSchema />
            </TabPanel>
            <TabPanel>
              <p>PAN WIP</p>
            </TabPanel>
            <TabPanel>
              <CmsSchema />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <br />
        <br />
      </Box>
    </>
  );
};

export default CommissionSetup;