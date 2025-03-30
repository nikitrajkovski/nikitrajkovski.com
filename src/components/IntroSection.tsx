import {Button, Flex, Grid, GridItem, Icon, Image, Text, Stack} from "@chakra-ui/react";
import {GoArrowDownRight} from "react-icons/go";
import {Icons} from "@/components/Icons.tsx";

export const IntroSection = ({contactRef}: { contactRef: React.RefObject<HTMLDivElement> }) => {

  const handleScroll = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}} gap={10} mx={6} alignItems="center"
          py={{base: 0, md: 10}} pb={{base: 16}} maxW="6xl">
      <GridItem>
        <Flex maxW="7xl" py={8} direction="column" gap={8}>
          <Stack gap={2}>
            <Text color="#4C956C" fontSize={{base: "xl", md: "2xl"}} fontWeight="bold">
              Hello, my name is
            </Text>
            <Flex wrap="wrap" textAlign={{base: "center", md: "left"}} justify={{md: "flex-start"}}
                  lineHeight={1.15}>
              <Text fontFamily="salomeregular" color="#2C7E49"
                    fontSize={{base: "4xl", md: "6xl"}} fontWeight="medium"
              >
                Nikola&nbsp;
              </Text>
              <Text fontFamily="salomeregular" color="#D68C45"
                    fontSize={{base: "4xl", md: "6xl"}} fontWeight="medium"
              >
                Trajkovski
              </Text>
            </Flex>
          </Stack>

          <Text color="black" fontSize={{base: "md", md: "lg"}} textAlign={{md: "left"}} mr={4}>
            Final year student at the Faculty of Computer Science and Engineering
            with solid experience in software development. My passion is building
            innovative solutions that help people reach their full potential.
          </Text>
        </Flex>
        <Flex direction={{base: "row", sm: "row"}} align="center"
              justify={{base: "center", md: "space-between"}} gap={4} flexWrap="wrap"
        >
          <Icons/>

          <Button bg="#D68C45" color="white" onClick={handleScroll} _hover={{
            bg: "#c97e3a",
            transform: "scale(1.05)",
            transition: "transform 0.2s ease-in-out"
          }} size={{base: "md", md: "lg"}} px={{base: 3, md: 6}} transition="all 0.2s ease-in-out">
            <Icon background="transparent" as={GoArrowDownRight}/>
            <Text background="transparent" fontSize={{base: "lg", md: "xl"}} fontWeight="medium">Let's
              work together</Text>
          </Button>
        </Flex>
      </GridItem>

      <GridItem>
        <Flex align="center" justify={{base: "center", md: "flex-end"}}>
          <Image maxW="100%"
                 src="https://media.giphy.com/media/xoicctrOv5aGw6mCZi/giphy.gif?cid=ecf05e47rcu9wr3z5j1f9druhrt2d352iv0luc6sx9vn4v3i&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          />
        </Flex>
      </GridItem>
    </Grid>
  )
}
