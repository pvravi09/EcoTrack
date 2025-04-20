import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: '#E6F6EC',
      100: '#C3E9D0',
      200: '#9FDBB3',
      300: '#7BCD96',
      400: '#57C079',
      500: '#33B25C',
      600: '#298E4A',
      700: '#1F6B37',
      800: '#154725',
      900: '#0B2412',
    },
  },
  semanticTokens: {
    colors: {
      text: {
        default: 'gray.900',
        _dark: 'whiteAlpha.900',
      },
      bodyBg: {
        default: 'white',
        _dark: 'gray.800',
      },
      heading: {
        default: 'gray.900',
        _dark: 'whiteAlpha.900',
      },
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.900',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Text: {
      baseStyle: (props: { colorMode: string }) => ({
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.900',
      }),
    },
    Heading: {
      baseStyle: (props: { colorMode: string }) => ({
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.900',
      }),
    },
  },
});

export default theme; 