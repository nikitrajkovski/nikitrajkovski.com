import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import {Container} from "@chakra-ui/react";
import {IntroSection} from "@/components/IntroSection.tsx";
import {Services} from "@/components/Services.tsx";
import {Experience} from "@/components/Experience.tsx";

function App() {

  return (
    <Container maxW="7xl">
      <Navbar/>
      <IntroSection/>
      <Services />
      <Experience />
    </Container>
  )
}

export default App
