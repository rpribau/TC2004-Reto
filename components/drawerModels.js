import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Checkbox,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { FaFilter } from "react-icons/fa";

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationChange = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  return (
    <>
      <Button onClick={handleToggle}><FaFilter style={{ marginRight: "0.5rem" }} />Filtrar</Button>
      <Button ml={5} colorScheme="green"> Guardar información (.zip) </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={handleToggle}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filtros (Beta)</DrawerHeader>
            <Heading size="md" ml={5} mt={3} mb={3}>Ubicaciones</Heading>

            <DrawerBody>
              <Stack spacing={4}>
                <Checkbox isChecked={selectedLocations.includes('Cadereyta')} onChange={() => handleLocationChange('Cadereyta')}>Cadereyta</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Coahuila')} onChange={() => handleLocationChange('Coahuila')}>Coahuila</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Durango')} onChange={() => handleLocationChange('Durango')}>Durango</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Expos F')} onChange={() => handleLocationChange('Expos F')}>Expos F</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Laredo')} onChange={() => handleLocationChange('Laredo')}>Laredo</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Monterrey')} onChange={() => handleLocationChange('Monterrey')}>Monterrey</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Online')} onChange={() => handleLocationChange('Online')}>Online</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Queretaro')} onChange={() => handleLocationChange('Queretaro')}>Queretaro</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('Reynosa')} onChange={() => handleLocationChange('Reynosa')}>Reynosa</Checkbox>
                <Checkbox isChecked={selectedLocations.includes('San Luis')} onChange={() => handleLocationChange('San Luis')}>San Luis</Checkbox>

              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={handleToggle}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleToggle}>Filter</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
