import {Flex, IconButton, Link, Text} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";
import {useColorMode} from "@/components/ui/color-mode.tsx";

export const Navbar = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  console.log(colorMode);

  return (
    <Flex w="full" maxW="7xl" justify="space-between" align="center" py={10} px={4} pb={{base: 8}}>
      <Link href="/">
        <Text color="#D68C45" fontWeight="semibold" textStyle="4xl">nt.</Text>
      </Link>
      <IconButton size="lg" variant="ghost" aria-label="Toggle dark mode" rounded="full" onClick={toggleColorMode}>
        {colorMode === "dark" ? <FaMoon color="white"/> : <FaSun color="black"/>}
      </IconButton>
    </Flex>
  )
}
