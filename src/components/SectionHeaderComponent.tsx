import {Flex, Separator, Text} from "@chakra-ui/react";

type SectionHeaderProps = {
  header: string,
  text: string
}

export const SectionHeaderComponent = (props: SectionHeaderProps) => {
  return (
    <Flex direction="column" justify="center" align="center" gap={3}>
      <Flex direction="column" justify="center" align="center" lineHeight={1.25}>
        <Text color="#E6AA68" fontSize={{base: "lg", md: "xl"}}>{props.header}</Text>
        <Text color="#E6AA68" fontSize={{base: "2xl", md: "3xl"}} fontWeight="semibold">{props.text}</Text>
      </Flex>
      <Separator color="#E6AA68" w="1/2"/>
      <Separator color="#E6AA68" w="2/3"/>
    </Flex>
  )
}