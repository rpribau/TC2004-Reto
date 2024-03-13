import { FaTree } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdAutoGraph } from "react-icons/md";
import { useColorModeValue, Box, Flex, Button, Grid } from "@chakra-ui/react";
import RFModal from "./modal/rf_modal";
import RF2Modal from "./modal/rf2_modal";
import SARIMAXModal from "./modal/sarimax_modal";
import XGBoost_Modal from "./modal/xgboost_modal";

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
            <RF2Modal>
            <Button colorScheme="red" size="lg">
                <Flex align="center">
                    <FaTree style={{ marginRight: "0.5rem" }} />
                    Random Forest v.2
                </Flex>
            </Button>
            </RF2Modal>

            <SARIMAXModal>
            <Button colorScheme="orange" size="lg">
                <Flex align="center">
                    <SlGraph style={{ marginRight: "0.5rem" }} />
                    SARIMAX
                </Flex>
            </Button>
            </SARIMAXModal>

            <XGBoost_Modal>
            <Button colorScheme="purple" size="lg">
                <Flex align="center">
                    <MdAutoGraph style={{ marginRight: "0.5rem" }} />
                    XGBoost
                </Flex>
            </Button>
            </XGBoost_Modal>
        </Grid>
    );   
};

export default Models;
