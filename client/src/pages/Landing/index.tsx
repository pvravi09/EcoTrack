import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Heading, Text, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import AuthModal from '../../components/Auth/AuthModal';

const LandingPage: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');

  const handleOpenAuthModal = (type: 'login' | 'signup') => {
    setAuthType(type);
    setAuthModalOpen(true);
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, green.400, blue.500)"
      position="relative"
      overflow="hidden"
    >
      {/* Background overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.500"
        zIndex={0}
      />
      
      {/* Content */}
      <Container maxW="container.xl" position="relative" zIndex={1} py={20}>
        <VStack spacing={8} align="center" textAlign="center" color="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="2xl" mb={4}>
              Track Your Carbon Footprint
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              EcoTrack helps you measure, understand, and reduce your environmental impact with personalized insights and actionable recommendations.
            </Text>
          </motion.div>

          <HStack spacing={4} mt={8}>
            <Button
              size="lg"
              colorScheme="green"
              onClick={() => handleOpenAuthModal('login')}
            >
              Login
            </Button>
            <Button
              size="lg"
              variant="outline"
              colorScheme="whiteAlpha"
              onClick={() => handleOpenAuthModal('signup')}
            >
              Sign Up
            </Button>
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16} w="full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                bg="whiteAlpha.200"
                p={6}
                rounded="xl"
                backdropFilter="blur(10px)"
                _hover={{ transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                <Heading size="md" mb={4}>Real-time Tracking</Heading>
                <Text>Monitor your carbon emissions from transportation, diet, and energy use.</Text>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box
                bg="whiteAlpha.200"
                p={6}
                rounded="xl"
                backdropFilter="blur(10px)"
                _hover={{ transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                <Heading size="md" mb={4}>AI Recommendations</Heading>
                <Text>Get personalized suggestions to reduce your environmental impact.</Text>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Box
                bg="whiteAlpha.200"
                p={6}
                rounded="xl"
                backdropFilter="blur(10px)"
                _hover={{ transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                <Heading size="md" mb={4}>Community Challenges</Heading>
                <Text>Join others in collective efforts to lower carbon footprints.</Text>
              </Box>
            </motion.div>
          </SimpleGrid>
        </VStack>
      </Container>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        type={authType}
        onSwitchType={() => setAuthType(authType === 'login' ? 'signup' : 'login')}
      />
    </Box>
  );
};

export default LandingPage; 