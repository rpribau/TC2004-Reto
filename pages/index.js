import { Container, Box, Heading, Flex } from '@chakra-ui/react'
import UnderConstructionAlert from '../components/underconstruction';
import { useState, useEffect } from 'react'
import UploadButton from '../components/upload-button'; // Import the UploadButton component
import { Text } from '@chakra-ui/react'
import Models from '../components/models'
import Instructions from '../components/instructions'
import BotonRequest from '../components/modal/boton_request';
import HolidayButton from '../components/holiday_button';
import HolidayUpload from '../components/holiday-upload';

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
                        SPiD - ToolKit
                    </Heading>
                    {/* Add your explanation text here */}
                    <Text mt={4}>Asegurate que el formato de tus datasets cumpla los siguientes features y/o formato: </Text>
                    <Instructions />
                </Box>
            </Box>

            <Flex justifyContent="space-between" flexWrap="wrap">
                <Box width={['80%', '50%']} mb={1} mt={-5}>
                    {isClient && <UploadButton />}
                </Box>
                <Box width={['80%', '50%']} mb={4}>
                    {isClient && <BotonRequest />}
                </Box>
            </Flex>
            {isClient && <HolidayButton />}
            {isClient && <HolidayUpload />}


            <Heading as="h2" variant="page-title" mt={7}>
                Modelos
            </Heading>
            <Models />
        </Container>
    )
}

export default Page
