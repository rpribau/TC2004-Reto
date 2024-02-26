import { Alert, AlertIcon, useColorModeValue } from "@chakra-ui/react";

const UnderConstructionAlert = () => {
  const textColor = useColorModeValue("black", "black");
  const iconColor = useColorModeValue("black", "black");

  return (
    <Alert 
      status="warning" 
      color={textColor}
      bg="yellow.200"
      borderRadius="md"
      p={3}
      fontSize="sm"
      mt={6}
    >
      <AlertIcon color={iconColor} />
      Asegurate de que los datos hayan sido limpiados y procesados antes de usar esta herramienta.
    </Alert>
  );
};

export default UnderConstructionAlert;