import { FaTree } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdAutoGraph } from "react-icons/md";
import { useColorModeValue, Box, Flex, Button, Grid } from "@chakra-ui/react";
import RFModal from "./modal/rf_modal";

const Models = () => {

    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={5}>
            <RFModal>
            <Button colorScheme="green" size="lg">
                <Flex align="center">
                    <FaTree style={{ marginRight: "0.5rem" }} />
                    Random Forest v.1
                </Flex>
            </Button>
            </RFModal>

            <Button colorScheme="red" size="lg">
                <Flex align="center">
                    <FaTree style={{ marginRight: "0.5rem" }} />
                    Random Forest v.2
                </Flex>
            </Button>

            <Button colorScheme="orange" size="lg">
                <Flex align="center">
                    <SlGraph style={{ marginRight: "0.5rem" }} />
                    SARIMAX
                </Flex>
            </Button>

            <Button colorScheme="purple" size="lg">
                <Flex align="center">
                    <MdAutoGraph style={{ marginRight: "0.5rem" }} />
                    XGBoost
                </Flex>
            </Button>
        </Grid>
    );   
};

export default Models;
