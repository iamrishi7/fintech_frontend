"use client";
import {
  Box,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Flex
        w={"full"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          p={[4, 8, 16]}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Our Privacy Policy
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <br />
      <br />
      <Box p={[4, 8, 16]} mx={'auto'} maxW={['full', '7xl']}>
        <p>
          ADM Pay INDIA, accessible from https://admpay.in/ one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by and ADM Pay INDIA how we use it.
        </p>
        <br />
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us. This Privacy Policy
          applies only to our online activities and is valid for visitors to our
          website with regards to the information that they shared and/or
          collect in ADM Pay INDIA. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </p>
        <br />
        <br />
        <h4>Data Controller</h4>
        <p>
          The data controller in respect of our portal is ADM Pay INDIA PRIVATE
          LIMITED, registered in India. If you have any questions about this
          Privacy Policy you can contact the data controller by writing to
          Aditya Digital Money Pvt. Ltd. Iglas, Aligarh, Uttar Pradesh, 202124,
          India or sending an email to info@admpay.in
        </p>
        <br />
        <br />
        <h4>Information we collect</h4>
        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide. When you register for an Account, we may
          ask for your contact information, including items such as name,
          company name, address, email address, and telephone number.
        </p>
        <br />
        <br />
        <h4>
          We need image for KYC purpose so, need upload image from mobile
          Application/ web site
        </h4>
        <p>
          How we use your information.
          <br />
          We use the information we collect in various ways, including to:
          <br />
          Provide, operate, and maintain our website.
          <br />
          Improve, personalize, and expand our website.
          <br />
          Understand and analyse how you use our website.
          <br />
          Develop new products, services, features, and functionality.
          <br />
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the website, and for marketing and promotional
          purposes.
          <br />
          Send you emails.
          <br />
          Find and prevent frauds.
        </p>

        <br />
        <br />

        <h4>Camera and Photo</h4>
        <p>
          We need image for KYC purpose so, need upload image from mobile
          Application.
        </p>

        <br />
        <br />

        <h4>Log Files</h4>
        <p>
          ADM Pay INDIA follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services' analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users' movement on the website, and gathering demographic
          information.
        </p>

        <br />
        <br />

        <h4>Cookies and Web Beacons</h4>
        <p>
          Like any other website, ADM Pay INDIA uses 'cookies'. These cookies
          are used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information. For more general information on cookies, please read the
          Cookies article on TermsFeed website.
        </p>

        <br />
        <br />
        <h3>Contact Us</h3>
        <p>
          If there are any questions regarding this privacy policy you may
          contact us using the information below:
        </p>
        <br />
        <br />
        <p>
          Aditya Digital Money Pvt. Ltd. Iglas, Aligarh, Uttar Pradesh, 202124
        </p>
        <p>info@admpay.in</p>
      </Box>
    </>
  );
};

export default page;
