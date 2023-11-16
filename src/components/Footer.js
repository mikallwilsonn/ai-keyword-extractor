// --
// Dependencies
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import openai from "../assets/openai.png";


// --
// Footer Component
const Footer = () => {
    return (
        <footer>
            <Box marginTop={ 50 }>
                <Flex 
                    justifyContent="center" 
                    alignItems="center"
                >
                    <Image 
                        src={ openai } 
                        alt="Logo" 
                        width={ 100 } 
                        marginRight="1rem" 
                    />

                    <Text>
                        Powered by OopenAI.
                    </Text>
                </Flex>
            </Box>
        </footer>
    );
}


// --
// Export
export default Footer;