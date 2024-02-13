"use client";
import PasswordUpdateForm from "@/components/dashboard/profile/PasswordUpdateForm";
import PinUpdateForm from "@/components/dashboard/profile/PinUpdateForm";
import FileDropzone from "@/components/misc/FileDropzone";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Box,
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
import React, { useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";

const FormSubheading = ({ title }) => {
  return (
    <Text
      fontSize={"sm"}
      fontWeight={"medium"}
      color={"gray.700"}
      mt={16}
      mb={4}
      textTransform={"capitalize"}
    >
      {title}
    </Text>
  );
};

const page = () => {
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const avatarInputRef = useRef(null);

  const handleClick = () => {
    avatarInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Read the selected file as a data URL
      setAvatar(selectedFile);
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the data URL as the image preview
        setAvatarPreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  async function handleFormSubmit(values) {
    setIsLoading(true);
    try {
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      handleError({ title: "Couldn't submit your details", error: error });
    }
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Update Your Profile
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <input
          type="file"
          ref={avatarInputRef}
          onChange={handleFileChange}
          accept="image/"
          style={{ display: "none" }}
        />
        <VStack w={"full"} justifyContent={"center"} mb={4}>
          <Box
            pos={"relative"}
            rounded={"full"}
            boxSize={["24", "36"]}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"gray.50"}
          >
            <Image
              src={avatarPreview ?? user?.avatar ?? "/avatar.webp"}
              boxSize={"inherit"}
              objectFit={"cover"}
            />
            <VStack
              pos={"absolute"}
              top={0}
              left={0}
              w={"full"}
              h={"full"}
              bgColor={"transparent"}
              color={"transparent"}
              transition={"all .3s ease"}
              _hover={{ bgColor: "rgba(0,0,0,0.75)", color: "#FFF" }}
              justifyContent={"center"}
              cursor={"pointer"}
              onClick={handleClick}
            >
              <BsCamera />
              <Text fontSize={"xs"}>
                Click to {user?.avatar ? "Change" : "Upload"}
              </Text>
            </VStack>
          </Box>
          {avatarPreview ? (
            <Button
              variant={"ghost"}
              colorScheme="red"
              size={"sm"}
              rounded={"full"}
              onClick={() => {
                setAvatarPreview(null);
                setAvatar(null);
              }}
            >
              Remove
            </Button>
          ) : (
            <Text fontSize={"xs"} textAlign={"center"} fontWeight={"medium"}>
              Please Upload Profile Photo
            </Text>
          )}
        </VStack>
        <Formik
          initialValues={{
            first_name: user?.first_name,
            middle_name: user?.middle_name,
            last_name: user?.last_name,
          }}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormSubheading title={"Basic Details"} />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                mt={4}
              >
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="first_name" type="text" placeholder=" " />
                  <FormLabel>First Name</FormLabel>
                </FormControl>
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="middle_name" type="text" placeholder=" " />
                  <FormLabel>Middle Name</FormLabel>
                </FormControl>
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="last_name" type="text" placeholder=" " />
                  <FormLabel>Last Name</FormLabel>
                </FormControl>
              </Stack>

              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                mt={4}
              >
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="email" type="email" placeholder=" " />
                  <FormLabel>Email</FormLabel>
                </FormControl>
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="phone"
                    type="tel"
                    maxLength={10}
                    placeholder=" "
                  />
                  <FormLabel>Phone</FormLabel>
                </FormControl>
              </Stack>

              <FormSubheading title={"KYC Details"} />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                mt={4}
              >
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="aadhaar_number" type="text" placeholder=" " />
                  <FormLabel>Aadhaar No.</FormLabel>
                </FormControl>
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input name="pan" type="text" placeholder=" " />
                  <FormLabel>PAN</FormLabel>
                </FormControl>
              </Stack>

              <FormSubheading title={"Upload Documents"} />
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                mt={4}
              >
                <Box w={["full", "xs"]}>
                  <FileDropzone
                    onUpload={(files) => console.log(files)}
                    accept="image/*,application/pdf"
                    label="Aadhaar Front"
                    height={32}
                  />
                </Box>
                <Box w={["full", "xs"]}>
                  <FileDropzone
                    onUpload={(files) => console.log(files)}
                    accept="image/*,application/pdf"
                    label="Aadhaar Back"
                    height={32}
                  />
                </Box>
                <Box w={["full", "xs"]}>
                  <FileDropzone
                    onUpload={(files) => console.log(files)}
                    accept="image/*,application/pdf"
                    label="PAN Card"
                    height={32}
                  />
                </Box>
              </Stack>

              <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={16}>
                <Button
                  bgColor={"brand.primary"}
                  _hover={{
                    bgColor: "brand.hover",
                  }}
                  color={"#FFF"}
                  isLoading={isLoading}
                  onClick={() => handleSubmit(values)}
                >
                  Save
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>

      <br />
      <PinUpdateForm />

      <br />
      <PasswordUpdateForm />
    </>
  );
};

export default page;
