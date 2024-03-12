import { Container, Box, Heading } from '@chakra-ui/react'
import UnderConstructionAlert from '../components/underconstruction';
import { useState, useEffect } from 'react'
import UploadButton from '../components/upload-button'; // Import the UploadButton component
import { Text } from '@chakra-ui/react'
import { Button, Flex } from '@chakra-ui/react'

import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

import { MdCheckCircle, MdSettings } from 'react-icons/md'
import { IoIosCloudUpload } from 'react-icons/io'
import { FaTree } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdAutoGraph } from "react-icons/md";



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

                    {/* Add your explanation text here */}
                    <Text mt={4}>Asegurate que el formato de tus datasets cumplan los siguientes features: </Text>
                    <Text mt={4}>DecisionTree v1:</Text>

                    <List spacing={3} mt={4}>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Date (object)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Amount (float64)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Is_holiday (int64)
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Sales (int64)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Weekday (int64)
                        </ListItem>
                        </List>
                    
                    </Box>
                </Box>

                <UploadButton />

                <Heading as="h2" variant="page-title" mt={7}>
                    Modelos
                </Heading>

                <Box mt={10} justifyContent="center" flexDirection="column">
                    <Flex justify="space-between">
                        <Button
                            colorScheme="green"
                        >
                            <Flex align="center">
                                <FaTree style={{ marginRight: "0.5rem" }} />
                                Random Forest v.1
                            </Flex>
                        </Button>

                        <Button
                            colorScheme="cyan"
                        >
                            <Flex align="center">
                                <FaTree style={{ marginRight: "0.5rem" }} />
                                Random Forest v.2
                            </Flex>
                        </Button>
                    </Flex>

                    <Flex justify="space-between" mt={4}>
                        <Button
                            colorScheme="orange"
                        >
                            <Flex align="center">
                                <SlGraph style={{ marginRight: "0.5rem" }} />
                                SARIMAX
                            </Flex>
                        </Button>

                        <Button
                            colorScheme="purple"
                        >
                            <Flex align="center">
                                <MdAutoGraph style={{ marginRight: "0.5rem" }} />
                                XGBoost
                            </Flex> 
                        </Button>
                    </Flex>
                </Box>
            </Container>
        )
}

export default Page