import {Container, Box} from '@chakra-ui/react'
import UnderConstructionAlert from '../components/underconstruction';
import { useState } from 'react';


const Page = () => {
    
    return (
        <Container>
            
            <Box borderRadius="lg" bg="gray" p={5}>
                <h1>Procesamiento de datos -  Don Colchon</h1>
            </Box>
            <UnderConstructionAlert />
            
        </Container>
    )
}

export default Page