import React from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <Navbar />
      <Box p={[4, 8, 16]} minH={"100vh"}>
        <Text fontSize={"2xl"} textAlign={"center"} fontWeight={"semibold"}>
          Contact Us
        </Text>
        <br />
        <br />
        <Stack
          direction={["column", "row"]}
          alignItems={["flex-start"]}
          justifyContent={"center"}
          gap={[16, 32]} mt={16}
        >
          <Box>
            <Text>
              <strong>ADITYA DIGITAL MONEY PRIVATE LIMITED</strong>
            </Text>
            <br />
            <Text>
              Ground flour, M 48, Sector 12, Pratap Vihar, Vijay Nagar,<br />
              Ghaziabad, Uttar Pradesh, PIN: 201009
            </Text>
            <Text>Phone: +91 8126769065</Text>
            <Text>Email: anilch14@gmail.com</Text>
          </Box>
          <Box w={['full', 'sm']}>
            <Image src="/contact.svg" />
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default page;
