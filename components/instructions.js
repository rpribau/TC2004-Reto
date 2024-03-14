import React, { useState } from 'react';
import { List, ListItem, ListIcon, Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { PiWarningCircleFill } from "react-icons/pi";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react'

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
      <Modal isOpen={isOpenModalOne} onClose={closeModalOne} >
        <ModalOverlay />
        <ModalContent mb={10} size="xl" maxW="55%" alignItems="center" justifyContent="center">
          <ModalHeader>RandomForest v.1</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image
                src="https://imagizer.imageshack.com/img924/8099/3sJUQE.png"
                alt="Formato 1"
                style={{ width: '100%', height: 'auto' }} // Ajustar tamaño de la imagen
                
              />
            </Box>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ModelInstructionsTwo Modal */}
      <Modal isOpen={isOpenModalTwo} onClose={closeModalTwo}>
        <ModalOverlay />
        <ModalContent mb={10} size="xl" maxW="75%" alignItems="center" justifyContent="center">
          <ModalHeader>Formato 2: SARIMAX, RandomForest v.2 y XGBoost</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image
                src="https://imagizer.imageshack.com/img923/6729/lx5Xqx.png"
                alt="Formato 2"
                style={{ width: '100%', height: 'auto' }} // Ajustar tamaño de la imagen
              />
            </Box>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  );
}

export default Instructions;
