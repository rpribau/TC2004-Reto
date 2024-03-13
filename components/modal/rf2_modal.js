import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { FaTree } from "react-icons/fa";
import DrawerComponent from '../drawerModels';

function RF2Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button colorScheme="red" size="lg" onClick={handleOpen}>
            <FaTree style={{ marginRight: "0.5rem" }} />
                Random Forest v.2
            </Button>
            <Modal isOpen={isOpen} onClose={handleClose} size={'full'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Random Forest v.2 - Made by Joana</ModalHeader>
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

export default RF2Modal;