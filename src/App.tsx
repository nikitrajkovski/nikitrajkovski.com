import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import {Container} from "@chakra-ui/react";
import {IntroSection} from "@/components/IntroSection.tsx";
import {Services} from "@/components/Services.tsx";
import {Experience} from "@/components/Experience.tsx";
import {Contact} from "@/components/Contact.tsx";
import {RefObject, useRef} from "react";

function App() {

  const contact = useRef<HTMLDivElement>(null);

  return (
    <Container maxW="7xl">
      <Navbar/>
      <IntroSection contactRef={contact as RefObject<HTMLDivElement>}/>
      <Services/>
      <Experience/>
      <Contact ref={contact}/>
    </Container>
  )
}

export default App
