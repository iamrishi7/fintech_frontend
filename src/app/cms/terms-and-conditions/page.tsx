"use client";
import {
  Box,
  Flex,
  Heading,
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
              Our Terms and Conditions
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <br />
      <br />
      <Box p={[4, 8, 16]} mx={'auto'} maxW={['full', '7xl']}>
        <Text>
          By accessing this webpage, you are agreeing to be bound by these Terms
          and Conditions (“Terms") in a legally binding agreement between us
          (“Merchant”or“us” or “we”or“our” ) and the User (“you” or “your”).
          Please read these Terms carefully before accessing or using the
          Website. If you do not agree to the Terms, you may not access the
          Platform.
        </Text>
        <br />
        <br />
        <Heading fontSize={'lg'}>
          FOR APPOINTMENT AS RETAILER/PARTNER/DISTRIBUTOR & SUPER DISTRIBUTOR
        </Heading>
        <br />
        <Text>
          These terms and conditions (Terms and Conditions) shall apply to and
          govern the commercial arrangement between ADM Pay India Pvt. Ltd.
          (herein after referred as 'ADM Pay India') and the Retailer/ Partner /
          Distributor/Super Distributor. These Terms and Conditions and any
          attachments hereto represent the entire agreement between ADM Pay
          India and the Retailer/ Partner / Distributor/Super Distributor and no
          changes to the same are binding unless they are in writing and
          intimated by the authorized representative of ADM Pay India.
        </Text>
        <Text>
          “ADM Pay India” is a digital financial facilitation service provider,
          a company incorporated under the Companies Act,, 2013 (18 of 2013 and
          rule 18 of the Companies (Incorporation) Rules, 2014) having its
          registered office at Jewar G B Nagar Uttar Pradesh-202124, INDIA
          (hereinafter referred to as the Company/ADM Pay India which expression
          shall unless repugnant to the context or meaning thereof mean and
          include its successors and permitted assigns).
        </Text>
        <br />
        <br />

        <Heading fontSize={'lg'}>
          OPERATION OF THE RETAIL /Distributor/Super Distributor OUTLET
        </Heading>
        <br />
        <Text>
          1.1 During the Term, the Retailer/ Partner / Distributor/Super
          Distributor shall render the services (“Services”) of ADM Pay India,
          by and through such of its officers, employees, agents,
          representatives and affiliates as it shall designate, from time to
          time. Notwithstanding anything contrary contained in these Terms and
          Conditions, ADM Pay India shall have the right at any time, to modify,
          alter and amend the lists of Services, including the manner,
          procedure, process in which the Retailer/ Partner / Distributor/Super
          Distributor will be required to perform the Services and the Retailer/
          Partner / Distributor/Super Distributor shall be bound by all such
          modifications, alterations and amendments made by ADM Pay India.
        </Text>
        <br />
        <Text>
          1.2 The Retailer/ Partner / Distributor/Super Distributor shall only
          market, distribute sell or promote such ADM Pay India Services as are
          permitted expressly by ADM Pay India. The Retailer/ Partner /
          Distributor/Super Distributor shall not automatically have the right
          to market, sell, distribute, or promote any product or service that
          may be provided by other retail outlets, whether in the present or in
          the future. In the event of any addition to the Services, ADM Pay
          India may, at its sole discretion, intimate the Retailer/ Partner /
          Distributor/Super Distributor that the Retailer/ Partner /
          Distributor/Super Distributor is entitled to sell, market, distribute
          and promote such product or service. ADM Pay India shall also have the
          right to direct the Retailer/ Partner / Distributor/Super Distributor
          to discontinue providing any of the ADM Pay India Services at the
          Retail Outlet without assigning any reason whatsoever.
        </Text>
        <br />
        <Text>
          1.3 ADM Pay India shall specify to the Retailer/ Partner /
          Distributor/Super Distributor, the necessary infrastructure and
          equipment including but not limited to computer terminals, peripherals
          attachments, internet and broadband connectivity, mobile device and/or
          any such device with GPRS connectivity, HTML enabled, which is
          compatible enough to run ADM Pay India Software/Services etc, for
          effectively providing the ADM Pay India Services, which the Retailer/
          Partner / Distributor/Super Distributor shall acquire at its sole
          expense. In case of the MPOS Application, the Retailer/ Partner /
          Distributor/Super Distributor shall be entitled to install the ADM Pay
          India Software on that particular mobile device and/or any such other
          device, which is proposed to be registered with ADM Pay India for
          availing ADM Pay India Services, and no other mobile/device of the
          Retailer/ Partner / Distributor/Super Distributor shall have such
          Software installed unless registered under the terms and conditions of
          this Agreement. Further, the Retailer/ Partner / Distributor/Super
          Distributor shall prominently display the ADM Pay India signage,
          signboards, logos, etc at a prominent place in the Retail Outlet,
          strictly in accordance with the directions issued by ADM Pay India in
          this regard.
        </Text>
        <br />
        <Text>
          1.4 Upon satisfactory installation and operation of the necessary
          equipment and peripherals, ADM Pay shall, subject to these Terms and
          Conditions, install the necessary software and other ADM Pay India
          Intellectual Property to enable the provision of the Services. All
          Services shall be
        </Text>
      </Box>
    </>
  );
};

export default page;
