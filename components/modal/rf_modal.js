import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Skeleton } from '@chakra-ui/react';
import { FaTree } from "react-icons/fa";
import DrawerComponent from '../drawerModels';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';

function RFModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 7000); // 7 segundos de carga para las estadísticas
        return () => clearTimeout(timer);
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button colorScheme="green" size="lg" onClick={handleOpen}>
                <FaTree style={{ marginRight: "0.5rem" }} />
                Random Forest v.1
            </Button>
            <Modal isOpen={isOpen} onClose={handleClose} size={'full'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Random Forest v.1 - Made by Rob</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <DrawerComponent />
                        <StatGroup mt={10}>
                            <Stat mr={10} ml={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="100px" /> : "R^2 Test"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : "0.7373"}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>

                            <Stat mr={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="150px" /> : "Error cuadrático medio (MSE)"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : "14.6757"}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>

                            <Stat mr={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="300px" /> : "Independencia del error (Test de Durbin-Watson)"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : "1.9237"}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>

                            <Stat mr={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="50px" /> : "MAPE"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : <><StatArrow type='increase' /> 0.2495</>}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>
                        </StatGroup>

                        <Flex justifyContent="center" mt={4}>
                            <Box mr={2}>
                                {loading ? <Skeleton height="150px" width="150px" /> : <img src="https://i.imgur.com/J17rChf.png" alt="Imagen 1" style={{ maxWidth: '100%', height: 'auto' }} />}
                            </Box>
                            <Box ml={2}>
                                {loading ? <Skeleton height="150px" width="150px" /> : <img src="https://i.imgur.com/R8P8Q0d.png" alt="Imagen 2" style={{ maxWidth: '100%', height: 'auto' }} />}
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        {/* Cualquier contenido adicional para el footer aquí */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default RFModal;
