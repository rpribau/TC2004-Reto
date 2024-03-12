import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { Lorem } from '@emotion/react';

const ModelInstructionsOne = ({ isOpenModal, onCloseModal }) => {
  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Instructions for Model One</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Lorem count={2} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModelInstructionsOne;
