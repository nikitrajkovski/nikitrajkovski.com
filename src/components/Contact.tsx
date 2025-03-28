import {Box, Flex, Icon, Link, Text} from "@chakra-ui/react";
import {SectionHeaderComponent} from "@/components/SectionHeaderComponent.tsx";
import {Icons} from "@/components/Icons.tsx";
import {FaMailBulk} from "react-icons/fa";
import {forwardRef} from "react";

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box maxW="7xl" py={16} ref={ref}>
      <SectionHeaderComponent header={"Contact"} text={"Let's work together"}/>
      <Flex direction={{base: "column", md: "row"}} mt={6} mx={4} gap={10} justify="space-evenly"
            align="center">
        <Text color="black" fontSize="lg" textAlign="center">
          Get in touch with me by email or connect with me on social media.
        </Text>
        <Flex direction="row" fontSize={{base: "2xl", md: "3xl"}} justify="center" align="center"
              gap={2}>
          <Link href="mailto:ntrajkovski5@gmail.com">
            <Icon as={FaMailBulk} boxSize={8} color="black" _hover={{color: "#D36135"}}/>
          </Link>
          <Icons/>
        </Flex>
      </Flex>
    </Box>
  )
});