import { Button, Spinner, Box, Flex, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Textarea, ModalFooter } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { LuPartyPopper } from "react-icons/lu";
import axios from 'axios';

function HolidayButton() {
    const [isLoading, setIsLoading] = useState(false);
    const [fileError, setFileError] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", date: "", effect: "" });
    const fileInputRef = useRef(null);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setIsLoading(true);
            setFileError(false);

            // Check file format
            if (file.type !== "text/csv") {
                setIsLoading(false);
                setFileError(true);
                return;
            }

            // Create FormData object to send file
            const formData = new FormData();
            formData.append('file', file);

            // Perform HTTP POST request using Axios
            axios.post(BASE_URL + "sales/upload", formData)
                .then(response => {
                    setIsLoading(false);
                    setShowSuccessAlert(true);
                    // Aquí puedes manejar la respuesta del servidor si es necesario
                })
                .catch(error => {
                    setIsLoading(false);
                    // Aquí puedes manejar los errores de la solicitud
                });
        }
    };

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        // Aquí puedes enviar los datos del formulario por HTTP POST
        // Por ejemplo:
        axios.post(BASE_URL + "holiday/add", formData)
            .then(response => {
                setShowSuccessAlert(true);
                setIsOpen(false);
                // Manejar la respuesta del servidor si es necesario
            })
            .catch(error => {
                // Manejar errores de la solicitud
            });
    };

    const handleCloseSuccessAlert = () => {
        setShowSuccessAlert(false);
    };

    return (
        <Box mt={5} display="flex" justifyContent="center" flexDirection="column">
            <Button
                colorScheme="pink"
                onClick={handleClick}
                isLoading={isLoading}
                loadingText="Uploading..."
            >
                <Flex align="center">
                    <LuPartyPopper style={{ marginRight: "0.5rem" }} />
                    Agregar día festivo/promocional
                </Flex>
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".csv" // Solo permitir archivos CSV
                onChange={handleFileChange}
            />
            {fileError && (
                <Alert
                    status='error'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    mt={4}
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        ¡Error de formato!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Revisa que tu archivo sea de tipo CSV. Si el problema persiste, contacta a soporte.
                    </AlertDescription>
                </Alert>
            )}
            {showSuccessAlert && (
                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    mt={4}
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Archivo cargado
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Los datos se han cargado correctamente y se han guardado en la base de datos.
                    </AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseSuccessAlert} />
                </Alert>
            )}
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agregar Día Festivo/Promocional</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input name="name" value={formData.name} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Fecha</FormLabel>
                            <Input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Efecto</FormLabel>
                            <Textarea name="effect" value={formData.effect} onChange={handleInputChange} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="pink" mr={3} onClick={handleSubmit}>Guardar</Button>
                        <Button onClick={handleClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default HolidayButton;
