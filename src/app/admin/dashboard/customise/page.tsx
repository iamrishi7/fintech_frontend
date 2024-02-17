"use client";
import Layout1 from "@/components/dashboard/misc/receipt/Layout1";
import FileDropzone from "@/components/misc/FileDropzone";
import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdate(values: object) {
    setIsLoading(true);
    try {
    } catch (error) {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Customise Your Portal
      </Heading>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            eko_api_key: "",
            eko_merchant_id: "",
            eko_api_secret: "",
          }}
          onSubmit={(values) => handleUpdate(values)}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormSubheading title="Basic Details" mt={0} />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                flexWrap={"wrap"}
              >
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="portal_name" type="text" placeholder=" " />
                  <FormLabel>Portal Name</FormLabel>
                </FormControl>

                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="company_name" type="text" placeholder=" " />
                  <FormLabel>Company Name</FormLabel>
                </FormControl>

                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="company_tagline" type="text" placeholder=" " />
                  <FormLabel>Company Tagline</FormLabel>
                </FormControl>

                <Box w={["full", "xs"]}>
                  <FileDropzone
                    onUpload={(files) => console.log(files)}
                    accept="image/*,application/pdf"
                    label="Company Logo"
                    height={32}
                  />
                </Box>
                <Box w={["full", "xs"]}>
                  <FileDropzone
                    onUpload={(files) => console.log(files)}
                    accept="image/*,application/pdf"
                    label="Login/Signup Cover Image"
                    height={32}
                  />
                </Box>
              </Stack>

              <FormSubheading title="Theme Selection" mt={0} />
              <HStack gap={[6, 8]}>
                <VStack cursor={"pointer"}>
                  <Box
                    boxSize={"12"}
                    rounded={"full"}
                    bgColor={"#48BB78"}
                  ></Box>
                  <Text fontSize={"xs"}>Green</Text>
                </VStack>

                <VStack cursor={"pointer"}>
                  <Box
                    boxSize={"12"}
                    rounded={"full"}
                    bgColor={"#1DA1F2"}
                  ></Box>
                  <Text fontSize={"xs"}>Blue</Text>
                </VStack>

                <VStack cursor={"pointer"}>
                  <Box
                    boxSize={"12"}
                    rounded={"full"}
                    bgColor={"#ED8936"}
                  ></Box>
                  <Text fontSize={"xs"}>Orange</Text>
                </VStack>

                <VStack cursor={"pointer"}>
                  <Box
                    boxSize={"12"}
                    rounded={"full"}
                    bgColor={"#ECC94B"}
                  ></Box>
                  <Text fontSize={"xs"}>Yellow</Text>
                </VStack>

                <VStack cursor={"pointer"}>
                  <Box
                    boxSize={"12"}
                    rounded={"full"}
                    bgColor={"#F56565"}
                  ></Box>
                  <Text fontSize={"xs"}>Red</Text>
                </VStack>
              </HStack>

              <FormSubheading title="Receipt Layout" />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                flexWrap={"wrap"}
              >
                <Box>
                  <Box w={48} boxShadow={"base"}>
                    <Layout1 isLayout={true} status="success" />
                  </Box>
                  <Text
                    px={"8px"}
                    py={"2px"}
                    mt={2}
                    w={"max-content"}
                    bgColor={"twitter.500"}
                    color={"#FFF"}
                    fontSize={"10"}
                    rounded={"full"}
                    fontWeight={"semibold"}
                    textAlign={"center"}
                    mx={"auto"}
                  >
                    Using
                  </Text>
                </Box>
              </Stack>

              <FormSubheading title="Loading Icon" />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                flexWrap={"wrap"}
              >
                <Box>
                  <Image src="/assets/images/loading/layout1.gif" w={16} />
                  <Text
                    px={"8px"}
                    py={"2px"}
                    mt={2}
                    w={"max-content"}
                    bgColor={"twitter.500"}
                    color={"#FFF"}
                    fontSize={"10"}
                    rounded={"full"}
                    fontWeight={"semibold"}
                    textAlign={"center"}
                    mx={"auto"}
                  >
                    Using
                  </Text>
                </Box>
              </Stack>

              <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={4}>
                <Button
                  bgColor={"brand.primary"}
                  _hover={{
                    bgColor: "brand.hover",
                  }}
                  color={"#FFF"}
                  isLoading={isLoading}
                  type="submit"
                >
                  Save
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default page;
