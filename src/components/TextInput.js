// --
// Dependencies
import { useState } from 'react';
import { Textarea, Button, useToast } from '@chakra-ui/react';


// --
// TexInput Component
const TextInput = ({ extractKeywords }) => {
    const [ text, setText ] = useState( '' ); 

    const toast = useToast();

    // Submit Text
    const submitText = () => {
        if ( text === '' ) {
            toast({
                title: 'Text field is empty!',
                description: "Please enter some text to extract keywords.",
                status: "error",
                duration: 5000,
                isClosable: false
            });
        } else {
            extractKeywords( text );
        }
    }


    // Render Component
    return (
        <div>
            <Textarea 
                bg="blue.400" 
                color="white"
                padding={ 4 }
                marginTop={ 6 }
                height={ 200 }
                value={ text }
                onChange={( event ) => setText( event.target.value )}  
            />

            <Button
                bg="blue.500"
                color="white" 
                marginTop={ 4 }
                width="100%"
                _hover={{ bg: "blue.700" }}
                onClick={ submitText }
            >
                Extract Keywords
            </Button>
        </div>
    );
}


// --
// Export
export default TextInput;