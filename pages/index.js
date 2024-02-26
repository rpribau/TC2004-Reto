import {Container, Box, Heading} from '@chakra-ui/react'
import UnderConstructionAlert from '../components/underconstruction';
import { useState } from 'react';


const Page = () => {
    
    return (
        <Container>
            
            <UnderConstructionAlert />

            <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
        
        <Heading as="h2" variant="page-title" mt={4}>
                Procesamiento de datos
            </Heading>
        <p>SARIMA Model</p>
        </Box>
    </Box>
            
    </Container>

    )

}

export default Page