// --
// Dependencies
import React, { useState } from 'react';
import { Container, Box, useToast } from "@chakra-ui/react";


// Need to create a root level /config directory and keys.js file
// -- these files are ignored by git for security !!! NOT FOR PRODUCTION !!!
import { openai_key, openai_url } from './config/keys';


// --
// Child Components
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsModal';


// --
// App component
const App = () => {
  const [ keywords, setKeywords ] = useState( "" );
  const [ isOpen, setIsOpen ] = useState( false );
  const [ loading, setLoading ] = useState( false );

  const toast = useToast();

  // Extract Keywords from provided text value
  const extractKeywords = async ( text ) => {
    setLoading( true );
    setIsOpen( true );

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ openai_key }`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Extract keywords from this text. Make the first letter of each word uppercase and separate with commas.\n\n" + text + " ",
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8
      })
    }

    try {
      const response = await fetch( openai_url, options );
      const json = await response.json();
  
      const data = json;
  
      setKeywords( data );
      setLoading( false );

    } catch ( error ) {
      setKeywords( "" );
      setLoading( false );
      setIsOpen( false );

      toast({
        title: `Error! OpenAI says: ${ error.type }`,
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: false
      });
    }
  }

  // Close Modal
  const closeModal = () => {
    setIsOpen( false );
  }


  // Render Component
  return (
    <Box 
      bg="blue.600" 
      color="white" 
      height="100vh" 
      paddingTop={ 130 }
    >
      <Container maxW="3xl" centerContent>
        <Header />

        <TextInput extractKeywords={ extractKeywords } />

        <Footer />
      </Container>

      <KeywordsModal 
        keywords={ keywords} 
        loading={ loading } 
        isOpen={ isOpen } 
        closeModal={ closeModal } 
      />
    </Box>
  );
}


// --
// Export App
export default App;