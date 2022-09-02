
export const currencyList = {
    usd: {
      name: 'USD',
      symbol: '$',
    },
    gbp: {
      name: 'GBP',
      symbol: '£',
    },
    eur: {
      name: 'EUR',
      symbol: '€',
    },
    btc: {
      name: 'BTC',
      symbol: '₿',
    },
    eth: {
      name: 'ETH',
      symbol: 'Ξ',
    },
  }

export const darkTheme = {
    mainFont: '#FFF',
    primary: '#1F2128',
    secondary: '#191B1F', // darkest
    secondaryInverted: '#FFF',
    tertiary: '#2C2F36',
    barChart: '#2172e5',
    buttonClose: 'rgb(6, 213, 84)',
    lineChart: '#00ff5f',
    lineChartGradientTop: '#414547',
    lineChartGradientBottom: '#000',
    hrLineTop: '#707070',
    hrLineBottom: '#646565',
}
  
export const lightTheme = {
    mainFont: '#000',
    primary: '#f7f7f7',
    secondary: '#FFF',
    secondaryInverted: '#191B1F',
    tertiary: '#edeff2',
    barChart: '#1ad761',
    buttonClose: '#000',
    lineChart: '#2550ea',
    lineChartGradientTop: '#6785f0',
    lineChartGradientBottom: '#FFF',
    hrLineTop: '#e4e4e4',
    hrLineBottom: '#f0f0f0',
}


export const screenSizeWidth = {
    none: `(min-width: 0px)`,
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 470px)`,
    tablet: `(min-width: 768px)`,
    tabletS: `(min-width: 0px) and (max-width: 767px)`,
    mobile: `(min-width: 0px) and (max-width: 899px)`,
    desktopS: `(min-width: 900px)`,
    desktopSM: `(min-width: 1000px)`,
    desktopM: `(min-width: 1200px)`,
    desktopML: `(min-width: 1300px)`,
    desktopL: `(min-width: 1500px)`,
    desktopXL: `(min-width: 1700px)`,
  }

export const keyGen = () => {
    return `${Math.random()} - ${Math.random()}`
}
