const breakpoints = ['20em', '25,875em', '64em', '75em']
// Desktop -- 1200px - 75em
// Tablet -- 1024px - 64em
// Mobile -- 414px - 25,875em
// Small Mobile -- 320px - 20em

const space = [0, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 160]

const colors = {
    // Base Color black
    black: '#00000',
    black_100: '#4C5F77',
    black_200: '#44566B',
    black_300: '#3D4C5F',
    black_400: '#2E3947',
    black_500: '#26303C',
    black_600: '#1E2630',
    black_700: '#171C24',
    black_800: '#0F1318',
    black_900: '#08090C',
    black_1000: '#05080A',
    
    // Base Color white
    white: '#fff', 
    white_100: '#EDEFF1',
    white_200: '#DBDFE4',
    white_300: '#C9CFD6',
    white_400: '#B7BFC9',
    white_500: '#A6AFBB',
    white_600: '#949FAD',
    white_700: '#828FA0',
    white_800: '#707F92',
    white_900: '#5E6F85',
    white_1000: '#4C5F77',

    // primary Color 
    primary_100: '#CCE0FC',
    primary_200: '#AED0FB',
    primary_300: '#66A3F7',
    primary_400: '#3384F5',
    primary_500: '#0065F2',
    primary_600: '#0051C2',
    primary_700: '#002861',
    primary_800: '#001430',
    primary_900: '#000A18',
    primary_1000: '#050E18',
      // -- Opactity decreases
      primary_10: 'rgba(0,101,242,.1)',
      primary_20: 'rgba(0,101,242,.2)',
      primary_40: 'rgba(0,101,242,.4)',
      primary_60: 'rgba(0,101,242,.6)',
      primary_80: 'rgba(0,101,242,.8)',

    // confirmation
    confirmation_100: '#CBF3E3',
    confirmation_200: '#99E6C7',
    confirmation_300: '#66DAAA',
    confirmation_400: '#33CD8F',
    confirmation_500: '#00C173',
    confirmation_600: '#009A5C',
    confirmation_700: '#007445',
    confirmation_800: '#004D2E',
    confirmation_900: '#002717',
    confirmation_1000: '#00130C',
    // -- Opactity decreases
    confirmation_10: 'rgba(0,193,115,.1)',
    confirmation_20: 'rgba(0,193,115,.2)',
    confirmation_40: 'rgba(0,193,115,.4)',
    confirmation_60: 'rgba(0,193,115,.6)',
    confirmation_80: 'rgba(0,193,115,.8)',

    // warning
    warning_100: '#F7EED2',
    warning_200: '#EFDFA4',
    warning_300: '#E8CE77',
    warning_400: '#E0BE49',
    warning_500: '#D8AE1C',
    warning_600: '#AC8B16',
    warning_700: '#826811',
    warning_800: '#56450B',
    warning_900: '#2B2306',
    warning_1000: '#161102',
      // -- Opactity decreases
      warning_10: 'rgba(216,174,28,.1)',
      warning_20: 'rgba(216,174,28,.2)',
      warning_40: 'rgba(216,174,28,.4)',
      warning_60: 'rgba(216,174,28,.6)',
      warning_80: 'rgba(216,174,28,.8)', 


    // error
    error_100: '#FFDBD8',
    error_200: '#FFB4B1',
    error_300: '#FF908B',
    error_400: '#FF6964',
    error_500: '#FF443D',
    error_600: '#CC3631',
    error_700: '#992925',
    error_800: '#651B18',
    error_900: '#330E0C',
    error_1000: '#190706',
      // -- Opactity decreases
      error_10: 'rgba(255,68,61,.1)',
      error_20: 'rgba(255,68,61,.2)',
      error_40: 'rgba(255,68,61,.4)',
      error_60: 'rgba(255,68,61,.6)',
      error_80: 'rgba(255,68,61,.8)',
}

const borders = {
  none: 'none',
  normal: '1px solid',
}

const radius = {
  normal: '3px',
  rounded: '6px',
  curved: '40px',
  circle: '50%',
}

const fontSizes = {
  // headers
  heading_xxs: '0.702rem',
  heading_xs: '0.79rem',
  heading_sm: '.889rem',
  heading_md:  '1rem',
  heading_lg: '1.125rem',
  heading_xl: '1.266rem',
  heading_xxl: '1.424rem',
  heading_xxl_2: '3.247rem',
}

// I copied these ones from Jacob's repo
const maxWidths = ['40em', '52em', '64em', '80em', '96em', '104em']



const theme = {
    breakpoints,
    space,
    colors,
    borders,
    radius,
    fontSizes,
    maxWidths,
  }
  
  export default theme