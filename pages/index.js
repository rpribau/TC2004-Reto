import { Container, Box, Heading } from '@chakra-ui/react'
import UnderConstructionAlert from '../components/underconstruction';
import { useState, useEffect } from 'react'
import UploadButton from '../components/upload-button'; // Import the UploadButton component
import { Text } from '@chakra-ui/react'
import Models from '../components/models'
import Instructions from '../components/instructions'
import BotonRequest from '../components/modal/boton_request';


const Page = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Container maxW='750px'>
            <UnderConstructionAlert />

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>

                    <Heading as="h2" variant="page-title" mt={4}>
                        Procesamiento de datos
                    </Heading>
                    {/* Add your explanation text here */}
                    <Text mt={4}>Asegurate que el formato de tus datasets cumpla los siguientes features y/o formato: </Text>
                    <Instructions />
                    </Box>
                </Box>

                <UploadButton />
                {isClient && <BotonRequest />}

                <Heading as="h2" variant="page-title" mt={7}>
                    Modelos
                </Heading>
                <Models />
            </Container>
        )
}

export default Page