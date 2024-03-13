import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Skeleton } from '@chakra-ui/react';
import { SlGraph } from "react-icons/sl";
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

function sarimax_modal() {
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

                        <StatGroup mt={10}>
                            <Stat mr={10} ml={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="100px" /> : "R^2 Test"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : "0.7969"}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>

                            <Stat mr={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="150px" /> : "Error cuadrático medio (MSE)"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : "24699.79"}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>

                            <Stat mr={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="300px" /> : "Independencia del error (Test de Durbin-Watson)"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : "?"}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>

                            <Stat mr={10}>
                                <StatLabel>{loading ? <Skeleton height="10px" width="50px" /> : "MAPE"}</StatLabel>
                                <StatNumber>{loading ? <Skeleton height="10px" width="50px" /> : <><StatArrow type='increase' /> 0.3068</>}</StatNumber>
                                <StatHelpText>{loading ? <Skeleton height="10px" width="100px" /> : "02/01/2022 - 31/12/2023"}</StatHelpText>
                            </Stat>
                        </StatGroup>

                        <Flex justifyContent="center" mt={4}>
                            <Box mr={2}>
                                {loading ? <Skeleton height="150px" width="150px" /> : <img src="https://imagizer.imageshack.com/img922/7281/fH1FNH.png" alt="Imagen 1" style={{ maxWidth: '100%', height: 'auto' }} />}
                            </Box>
                            <Box mr={2}>
                                {loading ? <Skeleton height="150px" width="150px" /> : <img src="https://imagizer.imageshack.com/img922/4212/r5FJQq.png" alt="Imagen 1" style={{ maxWidth: '100%', height: 'auto' }} />}
                            </Box>
                        
                        </Flex>

                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default sarimax_modal;