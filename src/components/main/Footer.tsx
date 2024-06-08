import {
  Box,
  chakra,
  Container,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { Logo } from "../global/Logo";
import { FaLocationDot } from "react-icons/fa6";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={["full", "6xl"]}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack
          w={"full"}
          direction={["column", "row"]}
          alignItems={["flex-start", "center"]}
          justifyContent={["flex-start", "center"]}
          spacing={[4, 6]} fontSize={'sm'} fontWeight={'medium'}
        >
          <Link href={"/cms/about"}>About</Link>
          <Link href={"/cms/terms-and-conditions"}>Terms & Conditions</Link>
          <Link href={"/cms/privacy-policy"}>Privacy Policy</Link>
          <Link href={"/cms/refund-policy"}>Refund Policy</Link>
          <Link href={"/cms/fraud-complaint"}>Fraud Complaint</Link>
          <Link href={"/cms/contact"}>Contact Us</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <HStack>
            <FaLocationDot />
            <Text fontSize={"sm"}>
              Aditya Digital Money Pvt. Ltd. Iglas, Aligarh, Uttar Pradesh,
              202124
            </Text>
          </HStack>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
