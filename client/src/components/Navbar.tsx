import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box 
      bg={colorMode === 'light' ? 'white' : 'gray.800'} 
      px={4} 
      shadow="sm"
      color={colorMode === 'light' ? 'gray.900' : 'whiteAlpha.900'}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onToggle}
            colorScheme={colorMode === 'light' ? 'gray' : 'whiteAlpha'}
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </IconButton>

          <HStack gap={8} alignItems="center">
            <Button
              as={Link}
              to="/"
              variant="ghost"
              colorScheme="green"
              fontWeight="bold"
              color={colorMode === 'light' ? 'gray.900' : 'whiteAlpha.900'}
            >
              EcoTrack
            </Button>

            <HStack as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
              {user ? (
                <>
                  <Button 
                    as={Link} 
                    to="/dashboard" 
                    variant="ghost"
                    color={colorMode === 'light' ? 'gray.900' : 'whiteAlpha.900'}
                  >
                    Dashboard
                  </Button>
                  <Button 
                    as={Link} 
                    to="/activities" 
                    variant="ghost"
                    color={colorMode === 'light' ? 'gray.900' : 'whiteAlpha.900'}
                  >
                    Activities
                  </Button>
                  <Button 
                    as={Link} 
                    to="/profile" 
                    variant="ghost"
                    color={colorMode === 'light' ? 'gray.900' : 'whiteAlpha.900'}
                  >
                    Profile
                  </Button>
                </>
              ) : null}
            </HStack>
          </HStack>

          <HStack>
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              variant="ghost"
              colorScheme={colorMode === 'light' ? 'gray' : 'whiteAlpha'}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
            
            {user ? (
              <Button 
                onClick={handleLogout} 
                colorScheme="red" 
                variant="ghost"
                color={colorMode === 'light' ? 'gray.900' : 'whiteAlpha.900'}
              >
                Logout
              </Button>
            ) : (
              <HStack>
                <Button 
                  as={Link} 
                  to="/login" 
                  variant="ghost"
                  color={colorMode === 'light' ? 'gray.900' : 'whiteAlpha.900'}
                >
                  Login
                </Button>
                <Button 
                  as={Link} 
                  to="/register" 
                  colorScheme="green"
                  color={colorMode === 'light' ? 'white' : 'whiteAlpha.900'}
                >
                  Sign Up
                </Button>
              </HStack>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar; 