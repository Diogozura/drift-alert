import { createTheme } from '@mui/material/styles';

const theme = createTheme({
typography: {
        fontFamily: [
          'Roboto', // Usando Quicksand como a fonte padrão
          'sans-serif',
        ].join(','),
        h3: {
          fontFamily: 'Bebas Neue, sans-serif', // Aplicando Radio Canada ao H2;
          fontWeight: 400,
          fontStyle: 'normal'
        },
        h4: {
          fontFamily: 'Bebas Neue, sans-serif', // Aplicando Radio Canada ao H2;
          fontWeight: 400,
          fontStyle: 'normal'
        },
    },
  palette: {
    mode: 'dark', // Definindo o tema como dark
    primary: {
      main: '#1E1E1E', // Cinza Escuro para elementos principais
      contrastText: '#FFFFFF', // Texto branco para garantir legibilidade
    },
    secondary: {
      main: '#282828', // Preto Fosco para componentes adicionais
    },
    error: {
      main: '#E94560', // Vermelho Neon para estados de erro ou alertas
    },
    info: {
      main: '#3A86FF', // Azul Elétrico para ícones, links e botões interativos
    },
    warning: {
      main: '#FFD700', // Amarelo Metálico para elementos de aviso ou destaque
    },
    background: {
      default: '#1E1E1E', // Fundo principal do app
      paper: '#121212', // Fundo secundário para menus, cards, etc.
    },
    text: {
      primary: '#FFFFFF', // Texto principal
      secondary: '#A0A0A0', // Texto secundário para descrições e rótulos
    },
  },
});

export default theme;
