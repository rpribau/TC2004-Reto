import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { MdAutoGraph } from "react-icons/md";
import DrawerComponent from '../drawerModels';

function XGBoost_Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button colorScheme="purple" size="lg" onClick={handleOpen}>
            <MdAutoGraph style={{ marginRight: "0.5rem" }} />
                XGBoost
            </Button>
            <Modal isOpen={isOpen} onClose={handleClose} size={'full'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>XGBoost - Made by Luis</ModalHeader>
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

export default XGBoost_Modal;