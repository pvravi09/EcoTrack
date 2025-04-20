import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onSwitchType: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  type,
  onSwitchType,
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg={bgColor}>
        <ModalHeader textAlign="center">
          {type === 'login' ? 'Welcome Back' : 'Create Account'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {type === 'login' ? <LoginForm /> : <SignupForm />}
          
          <Box textAlign="center" mt={4}>
            <Text color={textColor} mb={2}>
              {type === 'login'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </Text>
            <Button
              variant="link"
              colorScheme="green"
              onClick={onSwitchType}
            >
              {type === 'login' ? 'Sign up' : 'Log in'}
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal; 