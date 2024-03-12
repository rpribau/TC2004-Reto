import React from 'react';
import { List, ListItem, ListIcon, Box } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { PiWarningCircleFill } from "react-icons/pi";
import { Text } from '@chakra-ui/react';

const Instructions = () => {
  return (
    <Box display="flex">
      {/* First List */}
      <Box flex="1" marginRight="4">
        <List spacing={3} mt={4}>
            <Text mt={4} as='b'>RandomForest v.1: </Text>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Date (object)
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Location (object)
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Product (int64)
          </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
            Amount (int64)
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
            Unit_price (int64)
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
            Weekday (object)
            </ListItem>
        </List>
      </Box>
      
      {/* Second List */}
      <Box flex="1">
        <List spacing={3} mt={4}>
        <Text mt={4} as='b'>RandomForest v.2, SARIMAX, XGBoost: </Text>
          <ListItem>
            <ListIcon as={PiWarningCircleFill} color='yellow.500' />
            Los dias de la semana tienen que ser su propia columna marcando 1 como dia, en caso de que no lo sea se marca 0.
          </ListItem>
          <ListItem>
            <ListIcon as={PiWarningCircleFill} color='yellow.500' />
            Las fechas se tienen que separar en año, mes y dia con su propia columna.
          </ListItem>
            <ListItem>
                <ListIcon as={PiWarningCircleFill} color='red.500' />
                Las ubicaciones no se encuentran en este modelo, los datos son generalizados por cada dia.
            </ListItem>

          {/* Add more items here if needed */}
        </List>
      </Box>
    </Box>
  );
}

export default Instructions;
