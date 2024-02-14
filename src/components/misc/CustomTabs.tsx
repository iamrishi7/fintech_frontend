"use client";
import { Button, HStack, ButtonProps, BoxProps } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";

interface TabItem {
  label: string;
  id: string | number;
  isDisabled?: boolean;
}

interface CustomTabsProps {
  tabList: TabItem[];
  onChange: (tabId: string | number) => void;
  size?: ButtonProps["size"];
  boxShadow?: BoxProps["boxShadow"];
}

const CustomTabs: FC<CustomTabsProps> = ({
  tabList,
  onChange,
  size,
  boxShadow,
}) => {
  const [activeTab, setActiveTab] = useState(
    tabList[0]?.isDisabled ? tabList[1]?.id : tabList[0]?.id
  );

  useEffect(() => {
    onChange(activeTab);
  }, [activeTab]);

  return (
    <>
      <HStack
        p={2}
        bgColor={"#FFF"}
        w={"max-content"}
        rounded={8}
        boxShadow={boxShadow ?? "sm"}
      >
        {tabList?.map((item, key) => (
          <Button
            key={key}
            colorScheme="green"
            bgColor={activeTab == item?.id ? "brand.primary" : "transparent"}
            color={activeTab == item?.id ? "#FFF" : "gray.700"}
            _hover={{
              bgColor: activeTab == item?.id ? "brand.hover" : "gray.100",
            }}
            onClick={() => setActiveTab(item?.id)}
            size={size ?? "md"}
            isDisabled={item?.isDisabled}
            textTransform={'capitalize'}
          >
            {item?.label}
          </Button>
        ))}
      </HStack>
    </>
  );
};

export default CustomTabs;
