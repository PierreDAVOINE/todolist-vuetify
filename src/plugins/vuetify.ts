import { createVuetify, ThemeDefinition } from 'vuetify';

const myLight: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#00b090',
    'primary-darken-1': '#3700B3',
    secondary: '#33c0a6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'myLight',
    themes: {
      myLight,
    },
  },
});
