import React, { useState } from 'react';
import { List, ListItem, ListIcon, Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { PiWarningCircleFill } from "react-icons/pi";
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Instructions = () => {
    const [isOpenModalOne, setIsOpenModalOne] = useState(false);
    const openModalOne = () => setIsOpenModalOne(true);
    const closeModalOne = () => setIsOpenModalOne(false);

    const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);
    const openModalTwo = () => setIsOpenModalTwo(true);
    const closeModalTwo = () => setIsOpenModalTwo(false);

  return (
    <Box display="flex">
      {/* First List */}
      <Box flex="1" marginRight="4">
        <List spacing={3} mt={4}>
          <Text mt={4} as='b'>RandomForest v.1:‎ ‎ ‎ </Text>
          <Button onClick={openModalOne} colorScheme="blue" variant="link">
            ¡Revisa el formato aquí! <ExternalLinkIcon mx='2px' />
          </Button>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Date (object)
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Location (object)
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Product (int64)
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Amount (int64)
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Unit_price (int64)
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Weekday (object)
          </ListItem>
        </List>
      </Box>
      
      {/* Second List */}
      <Box flex="1">
        <List spacing={3} mt={4}>
          <Text mt={4} as='b'>RandomForest v.2, SARIMAX, XGBoost: </Text>
          <Button onClick={openModalTwo} colorScheme="blue" variant="link">
            ¡Revisa el formato aquí! <ExternalLinkIcon mx='2px' />
          </Button>
          <ListItem>
            <ListIcon as={PiWarningCircleFill} color='yellow.500' />
            Los días de la semana tienen que ser su propia columna marcando 1 como día, en caso de que no lo sea se marca 0.
          </ListItem>
          <ListItem>
            <ListIcon as={PiWarningCircleFill} color='yellow.500' />
            Las fechas se tienen que separar en año, mes y día con su propia columna.
          </ListItem>
          <ListItem>
            <ListIcon as={PiWarningCircleFill} color='red.500' />
            Las ubicaciones no se encuentran en este modelo, los datos son generalizados por cada día.
          </ListItem>
        </List>
      </Box>

      {/* ModelInstructionsOne Modal */}
      <Modal isOpen={isOpenModalOne} onClose={closeModalOne}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Instructions for Model One</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Inserta aquí el contenido de las instrucciones para el Modelo Uno.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closeModalOne}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ModelInstructionsTwo Modal */}
      <Modal isOpen={isOpenModalTwo} onClose={closeModalTwo}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Instructions for Model Two</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Inserta aquí el contenido de las instrucciones para el Modelo Dos.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closeModalTwo}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Instructions;
