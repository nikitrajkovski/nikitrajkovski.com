import {Flex, Icon, Link} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export const Icons = () => {
  return (
    <Flex maxW='max-content' gap={2} justify="space-evenly">
      <Link href="https://github.com/nikitrajkovski" target="_blank"
            rel="noopener noreferrer">
        <Icon as={FaGithub} boxSize={8} color="black" _hover={{color: "#333"}}/>
      </Link>
      <Link href="https://www.linkedin.com/in/nikitrajkovski/" target="_blank"
            rel="noopener noreferrer">
        <Icon as={FaLinkedin} boxSize={8} color="black" _hover={{color: "#0077B5"}}/>
      </Link>
    </Flex>
  )
}