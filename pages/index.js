import { Container, Box, Heading } from '@chakra-ui/react'
import UnderConstructionAlert from '../components/underconstruction';
import { useState, useEffect } from 'react'
import UploadButton from '../components/upload-button'; // Import the UploadButton component

const Page = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Container>
            <UnderConstructionAlert />

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>

                    <Heading as="h2" variant="page-title" mt={4}>
                        Procesamiento de datos
                    </Heading>

                </Box>
            </Box>

            <UploadButton /> 

        </Container>
    )
}

export default Page