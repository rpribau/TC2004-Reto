import { Button, Spinner, Box, Flex, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../env/enviorment";
import { SiAiohttp } from "react-icons/si";

function BotonRequest() {
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [responseData, setResponseData] = useState([]);

    const handleClick = () => {
        setIsLoading(true);
        setRequestError(false);

        // Aquí realizamos la solicitud HTTP
        axios.get(BASE_URL + "sales", /* Datos que quieres enviar */)
            .then(response => {
                // Si la solicitud es exitosa, muestra la alerta de éxito
                setIsLoading(false);
                setShowSuccessAlert(true);
                setResponseData(response.data); // Guardar los datos de la respuesta en el estado
            })
            .catch(error => {
                // Si hay un error en la solicitud, muestra la alerta de error
                setIsLoading(false);
                setRequestError(true);
                console.error("Error:", error);
            });
    };

    const handleCloseSuccessAlert = () => {
        setShowSuccessAlert(false);
    };

    return (
        <Box mt={10} display="flex" justifyContent="center" flexDirection="column">
            <Button
                colorScheme="blue"
                onClick={handleClick}
                isLoading={isLoading}
                loadingText="Enviando..."
            >
                <Flex align="center">
                    <SiAiohttp style={{ marginRight: "0.5rem" }} />
                    Enviar solicitud
                </Flex>
            </Button>
            {requestError && (
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
                    Error en la solicitud
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                    Ha ocurrido un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.
                    </AlertDescription>
                </Alert>
            )}
            {showSuccessAlert && (
                <Box mt={4}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>id</Th>
                                <Th>date</Th>
                                <Th>product</Th>
                                <Th>location</Th>
                                <Th>order_size</Th>
                                <Th>unit_price</Th>
                                {/* Agregar más columnas según la estructura de tus datos */}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {responseData.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.date}</Td>
                                    <Td>{item.product}</Td>
                                    <Td>{item.location}</Td>
                                    <Td>{item.order_size}</Td>
                                    <Td>{item.unit_price}</Td>
                                    {/* Renderizar más columnas según la estructura de tus datos */}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseSuccessAlert} />
                </Box>
            )}
        </Box>
    );
}

export default BotonRequest;
