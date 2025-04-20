import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import SignupForm from '../components/Auth/SignupForm';

const Register: React.FC = () => {
  return (
    <Container maxW="container.sm" py={8}>
      <Box
        p={8}
        bg="white"
        boxShadow="lg"
        rounded="xl"
      >
        <SignupForm />
      </Box>
    </Container>
  );
};

export default Register; 