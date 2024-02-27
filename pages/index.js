import {Container, Box, Heading} from '@chakra-ui/react'
import UnderConstructionAlert from '../components/underconstruction';
import { useState, useEffect } from 'react'


const Page = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
      }, [])
    
    return  (
        
        <Container>
            
            <UnderConstructionAlert />

            <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
        
        <Heading as="h2" variant="page-title" mt={4}>
                Procesamiento de datos
            </Heading>
        
        </Box>
    </Box>
            
    </Container>

    )

}

export default Page