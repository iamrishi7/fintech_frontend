"use client";
import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BbpsCategoryCard from "./BbpsCategoryCard";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import { API } from "@/lib/api";

const EkoBbpsForm = () => {
  const { handleError } = useErrorHandler();

  const [providerId, setProviderId] = useState("");

  const [categories, setCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const [operators, setOperators] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingOperators, setLoadingOperators] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("services"));
    if (data) {
      setProviderId(
        data?.find(
          (item: any) => item?.name == "bbps" && item?.provider == "eko"
        )?.id
      );
    }
  }, []);

  useEffect(() => {
    if (providerId) {
      fetchCategories();
    }
  }, [providerId]);

  useEffect(() => {
    if (selectedCategory) {
      setVisibleCategories([selectedCategory]);
    } else {
      setVisibleCategories(categories);
    }
  }, [selectedCategory]);

  async function fetchCategories() {
    setLoadingCategories(true);
    try {
      const res = await API.fetchBbpsCategories({ provider: providerId });
      setCategories(res?.data);
      setVisibleCategories(res?.data);
      setLoadingCategories(false);
    } catch (error) {
      setLoadingCategories(false);
      handleError({
        title: "Error while fetching Eko BBPS Categories",
        error: error,
      });
    }
  }

  return (
    <>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        {loadingCategories ? (
          <Text textAlign={"center"}>Loading categories... please wait</Text>
        ) : (
          <Box>
            <Text fontSize={'lg'} fontWeight={'semibold'} color={'#444'} mb={6}>Choose Service</Text>
            <HStack
              w={"full"}
              alignItems={"flex-start"}
              justifyContent={
                visibleCategories?.length == 1 ? "center" : "flex-start"
              }
              gap={4}
              flexWrap={"wrap"}
            >
              {visibleCategories?.map((item: any, key: number) => (
                <BbpsCategoryCard
                  key={key}
                  name={item?.category_name?.replace(" and ", " & ")}
                  id="1"
                  onClick={(value) => {
                    if (visibleCategories.length == 1) {
                      setSelectedCategory(null);
                    } else {
                      setSelectedCategory(item);
                    }
                  }}
                  selected={selectedCategory?.category_id == item?.category_id}
                />
              ))}
            </HStack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default EkoBbpsForm;
