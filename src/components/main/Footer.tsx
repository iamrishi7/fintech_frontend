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

const links = [
  // { label: "Careers", url: "#" },
  // { label: "Sign Up", url: "#" },
  { label: "Terms & Conditions", url: "/tnc" },
  { label: "Privacy Policy", url: "/privacy-policy" }
];
const accounts = [
  {
    url: "https://github.com/DezyNation",
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
      <Link href="https://templateskart.com" isExternal>
        <Image
          w="100px"
          src="/assets/images/layouts/hero_image.png"
          alt="Dainypay"
        />
      </Link>

      {/* Desktop Screen */}
      <HStack
        spacing={4}
        alignItems="center"
        display={{ base: "none", md: "flex" }}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.url}>{link.label}</Link>
        ))}
      </HStack>

      {/* Mobile and Tablet Screens */}
      <Stack display={{ base: "flex", md: "none" }} alignItems="center">
        <HStack alignItems="center">
          <Link>Sign up</Link>
          <Divider h="1rem" orientation="vertical" />
          <Link>Career</Link>
        </HStack>
        <HStack alignItems="center">
          <Link href="tnc">Terms & Conditions</Link>
        </HStack>
        <Link href="/privacy-policy">Privacy policy</Link>
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

export function SmallCentered() {
  return (
    <Link
      href=""
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
