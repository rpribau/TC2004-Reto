import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { SlGraph } from "react-icons/sl";
import DrawerComponent from '../drawerModels';

function sarimax_modal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button colorScheme="orange" size="lg" onClick={handleOpen}>
            <SlGraph style={{ marginRight: "0.5rem" }} />
                SARIMAX
            </Button>
            <Modal isOpen={isOpen} onClose={handleClose} size={'full'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>SARIMAX - Made by Daniel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <DrawerComponent />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default sarimax_modal;