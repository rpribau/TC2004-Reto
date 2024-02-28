import { Button, Spinner, Box, Flex } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { IoIosCloudUpload } from "react-icons/io";


function UploadButton() {
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setIsLoading(true);
            // Perform upload logic here

            // Simulating upload delay
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
        <Box mt={10} display="flex" justifyContent="center">
            <Button
                colorScheme="green"
                onClick={handleClick}
                isLoading={isLoading}
                loadingText="Uploading..."
            >
                <Flex align="center">
                    <IoIosCloudUpload style={{ marginRight: "0.5rem" }} />
                    Subir Archivo
                </Flex>
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </Box>
    );
}

export default UploadButton;
