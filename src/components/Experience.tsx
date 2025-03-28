import {Box, Flex, Text} from "@chakra-ui/react";
import {SectionHeaderComponent} from "@/components/SectionHeaderComponent.tsx";

export const Experience = () => {
  return (
    <Box maxW="7xl" py={10}>
      <SectionHeaderComponent header={"Experience"} text={"Work activities and projects"}/>
      <Flex direction="column" mt={20} mx={4} gap={20}>
        <Flex direction={{base: "column", md: "row"}} gap={{base: 6, md: 16}} mx={6}
              justify="center">
          <Flex direction="column" maxW={{md: "40%"}}>
            <Text color="gray">Nov 2024 - Mar 2025</Text>
            <Text color="#E6AA68" fontSize={{base: "2xl", md: "3xl"}} fontWeight="semibold">Software
              Engineering Intern</Text>
            <Text color="#040066" fontSize={{base: "lg", md: "xl"}}>G+D Netcetera</Text>
          </Flex>
          <Flex maxW={{md: "60%"}} textAlign={{base:"justify"}}>
            <Text color="black" lineHeight={1.75}>Developed and maintained React (TypeScript)
              frontends and Java
              Spring Boot backends, designing RESTful APIs with Swagger/OpenAPI. Optimized
              performance and scalability using PostgreSQL. Collaborated in an Agile team with
              mentorship, ensuring robust and user-friendly solutions.</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}