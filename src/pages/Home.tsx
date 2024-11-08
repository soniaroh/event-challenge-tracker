import { useState } from "react";
import EventTrackerForm from "../components/EventTrackerFrom/EventTrackerForm";
import { Button, CloseButton, Container, FormTitle, ModalBackground, ModalContent  } from "./Home.styles";



const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <FormTitle>Open Tracker Form</FormTitle>
      <Button onClick={handleAdd}>Add a new task here</Button>
      {isModalOpen && <ModalBackground>
        <ModalContent>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <EventTrackerForm/>
      </ModalContent>
      </ModalBackground>}
    </Container>
   )
}

export default Home;
