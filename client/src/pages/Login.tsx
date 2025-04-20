import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import LoginForm from '../components/Auth/LoginForm';

const Login: React.FC = () => {
  return (
    <Container maxW="container.sm" py={8}>
      <Box
        p={8}
        bg="white"
        boxShadow="lg"
        rounded="xl"
      >
        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login; 