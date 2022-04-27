export default {
  border: {
    radius: {
      medium: '0.4rem',
      large: '4.4rem'
    }
  },
  font: {
    family: 'Heebo, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      medium: 500
    },
    sizes: {
      xsmall: '1.2rem', // 12px
      small: '1.4rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.8rem' // 28px
    }
  },
  colors: {
    lightModeBg: '#E8E7E3',
    white: '#FFFFFF',
    black: '#333333',
    darkGray: '#999999',
    lightPink: '#AB2680',
    darkPink: '#B22E6F'
  },
  containers: {
    desktop: '113.6rem', // 1366 - 115*2 = 1136px
    mobile: '28.8rem' //320px - 16*2
  }
} as const
