import {Box, Flex, Grid, GridItem, Icon, Text} from "@chakra-ui/react";
import {SectionHeaderComponent} from "@/components/SectionHeaderComponent.tsx";
import {FaHammer, FaPaintBrush, FaRocket} from "react-icons/fa";
import {GrUserWorker} from "react-icons/gr";

export const Services = () => {
  return (
    <Box maxW="7xl" pt={{base: "0", md: "20"}}>
      <SectionHeaderComponent header={"Services"} text={"How I can help"}/>
      <Flex justify="center" align="center" mt={6} mx={4}>
        <Text fontSize={{base: "md", md: "lg"}} textAlign="center">
          From concept to code, I craft software that simplifies, automates, and accelerates your
          business. Let’s build something great.
        </Text>
      </Flex>
      <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}} my={10}>
        <GridItem mx={6}>
          <Flex maxW="7xl" py={8} direction="column" gap={16}>
            <Flex direction="column" gap={4}>
              <Flex direction="row" justify="left" align={{base: "left", md: "center"}} gap={4}>
                <Icon size={{base: "xl", md: "2xl"}}><FaHammer/></Icon>
                <Text fontSize={{base: "xl", md: "2xl"}} color="#D36135">Software
                  Development
                </Text>
              </Flex>
              <Text textAlign={{base: "right", md: "left"}}>From eye-catching
                frontends to bulletproof backends, I build cohesive applications where form and
                function elevate each other.
              </Text>
            </Flex>
            <Flex direction="column" gap={4}>
              <Flex direction="row" justify="left" align={{base: "left", md: "center"}} gap={4}>
                <Icon size={{base: "xl", md: "2xl"}}><FaRocket/></Icon>
                <Text fontSize={{base: "xl", md: "2xl"}} color="#D36135">System Optimization</Text>
              </Flex>
              <Text textAlign={{base: "right", md: "left"}}>Revitalize your existing
                software—boost speed, strengthen security, and ensure reliability through
                performance tuning and modern engineering practices.
              </Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem mx={6}>
          <Flex maxW="7xl" py={8} direction="column" gap={16}>
            <Flex direction="column" gap={4}>
              <Flex direction="row" justify="left" align={{base: "center", md: "center"}} gap={4}>
                <Icon size={{base: "xl", md: "2xl"}}><GrUserWorker/></Icon>
                <Text fontSize={{base: "xl", md: "2xl"}} color="#D36135">Full-Cycle Problem
                  Solving
                </Text>
              </Flex>
              <Text textAlign={{base: "right", md: "left"}}>I don’t just write code. I
                make sure the software actually works for your team and customers, now and in the
                future.
              </Text>
            </Flex>
            <Flex direction="column" gap={4}>
              <Flex direction="row" justify="left" align={{base: "left", md: "center"}} gap={4}>
                <Icon size={{base: "xl", md: "2xl"}}><FaPaintBrush/></Icon>
                <Text fontSize={{base: "xl", md: "2xl"}} color="#D36135">User Interface</Text>
              </Flex>
              <Text textAlign={{base: "right", md: "left"}}>I craft intuitive,
                visually stunning interfaces that users love—combining clean aesthetics with
                purposeful interactions to drive engagement and simplify complex workflows.
              </Text>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}