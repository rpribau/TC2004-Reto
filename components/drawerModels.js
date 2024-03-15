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
import {Input} from "@chakra-ui/react";
import axios from 'axios'; // Importa axios
import { BASE_URL } from './env/enviorment';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [forecastData, setForecastData] = useState(null);

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

  // Función para manejar el click en el botón de pronóstico
  const handleForecastClick = () => {
    // Hacer la solicitud HTTP GET utilizando Axios
    axios.get(BASE_URL + 'armax/forecast')
      .then(response => {
        // Manejar la respuesta de la API aquí
        console.log('Respuesta de la API:', response.data);
        setForecastData(response.data); // Guardar los datos en el estado
        setModalOpen(true); // Abrir el modal
      })
      .catch(error => {
        // Manejar errores de la solicitud aquí
        console.error('Error al hacer la solicitud:', error);
      });
  };

  return (
    <>
      <Button onClick={handleToggle}><FaFilter style={{ marginRight: "0.5rem" }} />Filtrar</Button>
      <Button ml={5} colorScheme="green"> Guardar información (.zip) </Button>
      {/* Utiliza la función handleForecastClick en el evento onClick */}
      <Button ml={5} colorScheme="red" onClick={handleForecastClick}> Pronóstico de siguiente mes </Button>

      {/* Modal para mostrar los datos */}
      <Modal size={full} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tabla de Pronóstico</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Tabla para mostrar los datos */}
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Order_size</Th>
                  {/* Añade más columnas según la estructura de tus datos */}
                </Tr>
              </Thead>
              <Tbody>
                {/* Mapea los datos y crea filas de tabla */}
                {forecastData && forecastData.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.date}</Td>
                    <Td>{item.order_size}</Td>
                    {/* Añade más celdas según la estructura de tus datos */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setModalOpen(false)}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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

            <Heading size="md" ml={5} mt={3} mb={3}>Productos</Heading>
            <DrawerBody>
              <Stack spacing={4}>
                <Checkbox>Producto 1</Checkbox>
                <Checkbox>Producto 2</Checkbox>
                <Checkbox>Producto 3</Checkbox>
                <Checkbox>Producto 4</Checkbox>
                <Checkbox>Producto 5</Checkbox>
                <Checkbox>Producto 6</Checkbox>
                <Checkbox>Producto 7</Checkbox>
                <Checkbox>Producto 8</Checkbox>
                <Checkbox>Producto 9</Checkbox>
                <Checkbox>Producto 10</Checkbox>
                <Checkbox>Producto 12</Checkbox>
                <Checkbox>Producto 16</Checkbox>
                <Checkbox>Producto 17</Checkbox>
                <Checkbox>Producto 19</Checkbox>
                <Checkbox>Producto 20</Checkbox>
                <Checkbox>Producto 21</Checkbox>
                <Checkbox>Producto 22</Checkbox>
                <Checkbox>Producto 33</Checkbox>
                <Checkbox>Producto 38</Checkbox>
                <Checkbox>Producto 186</Checkbox>
                <Checkbox>Producto 245</Checkbox>
              </Stack>
            </DrawerBody>

            <Heading size="md" ml={5} mt={3} mb={3}>Fechas</Heading>
            <DrawerBody>
              <Stack spacing={4}>
                <Input placeholder="Fecha inicio" />
                <Input placeholder="Fecha fin" />
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
