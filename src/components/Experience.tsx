import {Box, Flex, Text} from "@chakra-ui/react";
import {SectionHeaderComponent} from "@/components/SectionHeaderComponent.tsx";

export const Experience = () => {
  return (
    <Box maxW="7xl" py={10} pb={{base:5, md:10}}>
      <SectionHeaderComponent header={"Experience"} text={"Work activities and projects"}/>
      <Flex direction="column" mt={{base: 10, md: 20}} mx={4} gap={20}>
        <Flex direction={{base: "column", md: "row"}} gap={{base: 5, md: 16}} mx={6}
              justify="center">
          <Flex direction="column" maxW={{md: "40%"}}>
            <Text color="gray">Nov 2024 - Mar 2025</Text>
            <Text color="#E6AA68" fontSize={{base: "2xl", md: "3xl"}} fontWeight="semibold">Software
              Engineering Intern</Text>
            <Text color="#040066" fontSize={{base: "lg", md: "xl"}}>G+D Netcetera</Text>
          </Flex>
          <Flex maxW={{md: "60%"}} textAlign={{base: "justify"}}>
            <Text lineHeight={1.75}>Developed and maintained React (TypeScript)
              frontends and Java
              Spring Boot backends, designing RESTful APIs with Swagger/OpenAPI. Optimized
              performance and scalability using PostgreSQL. Collaborated in an Agile team with
              mentorship, ensuring robust and user-friendly solutions.</Text>
          </Flex>
        </Flex>
        <Flex direction={{base: "column", md: "row"}} gap={{base: 6, md: 16}} mx={6}
              justify="start">
          <Flex direction="column" maxW={{md: "60%"}} gap={5}>
            <Flex direction="column">
              <Text color="gray">Nov 2023 - Feb 2024</Text>
              <Text color="#2C7E49" fontSize={{base: "2xl", md: "3xl"}}
                    fontWeight="semibold">Vimak</Text>
            </Flex>
            <Flex>
              <Text lineHeight={1.75}>A winery discovery app for
                Macedonia, as a university project using React.js for the frontend and Spring Boot
                for
                the backend, with MongoDB for data storage. The app integrates Google Maps with
                geolocation to help users find nearby wineries and calculate distances, along with
                user authentication and a shopping cart for wine purchases. The backend was deployed
                on Heroku and the frontend on Vercel, ensuring a reliable and seamless
                experience.</Text>
            </Flex>
          </Flex>
          <Flex maxW={{md: "40%"}} textAlign={{base: "justify"}}>

          </Flex>
        </Flex>
        <Flex direction={{base: "column", md: "row"}} gap={{base: 6, md: 16}} mx={6}
              justify="start">
          <Flex direction="column" maxW={{md: "60%"}} gap={5}>
            <Flex direction="column">
              <Text color="gray">Jun 2024</Text>
              <Text color="#2C7E49" fontSize={{base: "2xl", md: "3xl"}}
                    fontWeight="semibold">Obozhavam Knigi</Text>
            </Flex>
            <Flex>
              <Text lineHeight={1.75}>A scalable online bookstore I
                developed as a university project using ASP.NET Core and PostgreSQL, following Onion
                Architecture for clean separation of concerns. The platform features dynamic book,
                author, and publisher management, a seamless shopping cart and order system, and an
                admin panel for store oversight, including data export to CSV/Excel. It also
                integrates a second bookstore’s inventory, expanding user choices without
                sacrificing
                performance. Built with Entity Framework, the app ensures maintainability,
                testability, and a robust e-commerce experience.</Text>
            </Flex>
          </Flex>
          <Flex maxW={{md: "40%"}} textAlign={{base: "justify"}}>

          </Flex>
        </Flex>
        <Flex direction={{base: "column", md: "row"}} gap={{base: 6, md: 16}} mx={6}
              justify="start">
          <Flex direction="column" maxW={{md: "60%"}} gap={5}>
            <Flex direction="column">
              <Text color="gray">Oct 2024 - Mar 2025</Text>
              <Text color="#2C7E49" fontSize={{base: "2xl", md: "3xl"}}
                    fontWeight="semibold">Vip Auto</Text>
            </Flex>
            <Flex>
              <Text lineHeight={1.75}>A car marketplace application for a client,
                using
                React.js for the frontend and Spring Boot with PostgreSQL for the backend. The app
                features an advanced filtering system, enabling users to search cars by price,
                mileage, make, model, and year. It includes a powerful admin panel with full CRUD
                functionality for managing listings, as well as multilingual support (English,
                Macedonian, and Albanian) using i18n for broader accessibility. The application is
                currently in its final testing phase and will soon be launched into
                production.</Text>
            </Flex>
          </Flex>
          <Flex maxW={{md: "40%"}} textAlign={{base: "justify"}}>

          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}