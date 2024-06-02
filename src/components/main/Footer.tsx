import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
  LinkProps,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = ["Sign up", "Terms & Conditions", "Privacy policy"];
const accounts = [
  {
    url: "#",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "#",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "#",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Link href="#" isExternal>
        <Image w="100px" src="/assets/images/logo.png" alt="ADM Pay" />
      </Link>

      {/* Desktop Screen */}
      <HStack
        spacing={4}
        alignItems="center"
        display={{ base: "none", md: "flex" }}
      >
        <CustomLink href="/auth/login">Sign up</CustomLink>
        <CustomLink href="/cms/terms-and-conditions">
          Terms & Conditions
        </CustomLink>
        <CustomLink href="/cms/privacy-policy">Privacy policy</CustomLink>
      </HStack>

      {/* Mobile and Tablet Screens */}
      <Stack display={{ base: "flex", md: "none" }} alignItems="center">
        <HStack alignItems="center">
          <CustomLink href="/auth/login">Sign up</CustomLink>
        </HStack>
        <HStack alignItems="center">
          <CustomLink href="/cms/terms-and-conditions">
            Terms & Conditions
          </CustomLink>
        </HStack>
        <CustomLink href="/cms/privacy-policy">Privacy policy</CustomLink>
      </Stack>

      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      href={props?.href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
