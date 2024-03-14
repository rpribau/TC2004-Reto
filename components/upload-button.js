import { Button, Spinner, Box, Flex, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { BASE_URL } from "./env/enviorment";
import axios from 'axios';


function UploadButton() {
    const [isLoading, setIsLoading] = useState(false);
    const [fileError, setFileError] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
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

    const handleCloseSuccessAlert = () => {
        setShowSuccessAlert(false);
    };

    return (
        <Box mt={10} display="flex" justifyContent="center" flexDirection="column">
            <Button
                colorScheme="green"
                onClick={handleClick}
                isLoading={isLoading}
                loadingText="Uploading..."
            >
                <Flex align="center">
                    <IoIosCloudUpload style={{ marginRight: "0.5rem" }} />
                    Subir Archivo
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
        </Box>
    );
}

export default UploadButton;
