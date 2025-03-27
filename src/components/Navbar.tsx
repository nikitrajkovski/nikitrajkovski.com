import {Flex, IconButton, Link, Text} from "@chakra-ui/react";
import {FaMoon} from "react-icons/fa";

export const Navbar = () => {
  return (
    <Flex w="full" maxW="7xl" justify="space-between" align="center" py={10} px={4} pb={{base: 8}}>
      <Link href="/">
        <Text color="#D68C45" fontWeight="semibold" textStyle="4xl">nt.</Text>
      </Link>
      <IconButton size="lg" variant="ghost" aria-label="Toggle dark mode" rounded="full">
        <FaMoon color="black"/>
      </IconButton>
    </Flex>
  )
}
