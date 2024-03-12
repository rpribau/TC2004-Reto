import { Button, Spinner, Box, Flex, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { IoIosCloudUpload } from "react-icons/io";

const SelectModels = () => {
    return (
        <Box mt={10} display="flex" justifyContent="center" flexDirection="column">
            <Button
                colorScheme="green"
            >
                <Flex align="center">
                    <IoIosCloudUpload style={{ marginRight: "0.5rem" }} />
                    Random Forest v.1
                </Flex>
            </Button>

            <Button
                colorScheme="cyan"
            >
                <Flex align="center">
                    <IoIosCloudUpload style={{ marginRight: "0.5rem" }} />
                    Random Forest v.2
                </Flex>
            </Button>

            <Button
                colorScheme="orange"
            >
                <Flex align="center">
                    <IoIosCloudUpload style={{ marginRight: "0.5rem" }} />
                    SARIMAX
                </Flex>
            </Button>

            <Button
                colorScheme="purple"
            >
                <Flex align="center">
                    <IoIosCloudUpload style={{ marginRight: "0.5rem" }} />
                    XGBoost
                </Flex> 
            </Button>
        </Box>
    );
}

export default SelectModels;
    