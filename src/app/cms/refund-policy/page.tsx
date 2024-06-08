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
              Refund Policy
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <br />
      <br />
      <Box p={[4, 8, 16]} mx={"auto"} maxW={["full", "7xl"]}>
        <p>
          When you add money to ADMPAY INDIA PRIVATE LIMITED Wallet or Bank
          Account and, an amount is debited from your Credit Card / Debit Card /
          UPI / NetBanking or Bank Account and you choose the same value in your
          ID, then for such transaction No cancellation or refund is allowed.
        </p>
        <br />

        <p>
          Upon completing a Transaction, you are entering into a legally binding
          and enforceable agreement with us to purchase the product and/or
          service. After this point the User may cancel the Transaction unless
          it has been specifically provided for on the Platform. In which case,
          the cancellation will be subject to the terms mentioned on the
          Platform. We shall retain the discretion in approving any cancellation
          requests and we may ask for additional details before approving any
          requests. However, if in a transaction performed by you on the ADMPAY
          INDIA PRIVATE LIMITED Platform, money has been debited from your card
          or bank account and no value is reflected in your ID within 24 hours
          of the completion of the transaction, Then you will inform us for the
          same. Sending an e-mail to our e-mail address mentioned on the
          'Contact Us' page or by calling the contact number.
        </p>
        <p>
          Please include the following details - Price, Transaction Date and
          Request Number.
        </p>
        <br />
        <p>
          If it is found that money was debited without credit in your
          credit/debit card or bank account, the money will be refunded to you
          within 21 working days from the date of receipt of your e-mail. All
          refunds will be credited in the original mode of payment. All sales /
          money transfers / bill payments / recharges are final(Success) with no
          refund or exchange allowed. Customer/Agent Mobile Number, DTH Account
          Number, Utility Consumer Number, Bank Account Number and details of
          purchases/Money Transfer/Bill Payments/Recharges and are responsible
          for all charges resulting from those purchases/ Vendor Payment/Bill
          Payments/Recharges.
        </p>
        <br />
        <p>
          ADMPAY INDIA PRIVATE LIMITED is not responsible for any purchase/money
          transfer/bill payment/recharge for wrong mobile number, DTH account
          number, utility identification number and bank account number.
          However, if in a transaction made by the Customer on the Site, money
          has been credited to their card or bank account and the purchase /
          money transfer / bill payment / recharge is not successful within 72
          hours of the completion of the transaction, the Customer may You may
          notify us by sending an email to our support email address mentioned
          on the Contact Us Pages.
        </p>
        <br />
        <p>
          Please include the following details in the email - Mobile Number /
          DTH Account Number / Utility Consumer Number / Bank Account, Operator
          Name, Transaction Value, Transaction Date and Order Number. Will
          immediately investigate the incident and if it is found that money was
          debited to your credit/debit card or bank account without any credit
          of value, you shall refund the money within 21 working days from the
          date of receipt of your e-mail will be done. , All refunds will be
          credited in the original mode of payment.
        </p>
        <br />
        <p>
          Please note that the money paid for onboarding and service of Super
          Distributor / Distributor / Retailer etc. Merchant will not be
          refunded under any condition. Super Distributor / Distributor /
          Retailer can not claim any refund. So before becoming our merchant
          member you have to agree to the fees payable for initial
          implementation and onboarding(Pricing) only then join our family.
        </p>
      </Box>
    </>
  );
};

export default page;
