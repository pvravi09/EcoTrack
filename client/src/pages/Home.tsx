import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  
  const bgGradient = colorMode === 'light'
    ? 'linear(to-br, green.400, blue.500)'
    : 'linear(to-br, green.600, blue.700)';
  const overlayBg = colorMode === 'light' ? 'blackAlpha.400' : 'blackAlpha.600';
  const cardBg = colorMode === 'light' ? 'whiteAlpha.800' : 'whiteAlpha.200';

  return (
    <Box minH="calc(100vh - 64px)" position="relative">
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        position="relative"
        py={20}
        px={4}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={overlayBg}
        />
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack gap={8} alignItems="center" textAlign="center" color="white">
            <Heading as="h1" size="2xl" mb={4}>
              Track Your Carbon Footprint
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Join EcoTrack to measure, understand, and reduce your environmental impact. 
              Get personalized insights and join a community committed to fighting climate change.
            </Text>
            <Button
              onClick={() => navigate('/register')}
              size="lg"
              colorScheme="green"
              marginTop={8}
            >
              Get Started
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <Box
            p={6}
            bg={cardBg}
            rounded="xl"
            shadow="md"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
          >
            <Heading size="md" mb={4}>Track Daily Activities</Heading>
            <Text>Monitor your carbon emissions from transportation, diet, and energy use with our easy-to-use tools.</Text>
          </Box>

          <Box
            p={6}
            bg={cardBg}
            rounded="xl"
            shadow="md"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
          >
            <Heading size="md" mb={4}>Get Smart Insights</Heading>
            <Text>Receive AI-powered recommendations to reduce your carbon footprint based on your activities.</Text>
          </Box>

          <Box
            p={6}
            bg={cardBg}
            rounded="xl"
            shadow="md"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
          >
            <Heading size="md" mb={4}>Join the Community</Heading>
            <Text>Connect with like-minded individuals and participate in challenges to amplify your impact.</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home; 