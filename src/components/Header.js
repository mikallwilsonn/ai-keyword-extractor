// --
// Dependencies
import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.svg";


// --
// Header Component
const Header = () => {
    return (
        <header>
            <Image 
                src={ logo } 
                alt="Logo" 
                width={ 100 } 
                marginBottom="1rem" 
            />

            <Heading 
                color="white" 
                marginBottom="1rem"
            >
                AI Keyword Extractor
            </Heading>

            <Text 
                fontSize={ 25 } 
                textAlign="center"
            >
                Paste in your text bnelow and we'll extract the keywords for you.
            </Text>
        </header>
    );
}


// --
// Export
export default Header;