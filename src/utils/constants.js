
export const coinListPercentDisplayColors = [
  ['rgb(255, 181, 40)', 'rgb(254, 225, 88)'],
  ['rgb(71, 76, 119)', 'rgb(138, 146, 178)'],
  ['rgb(26, 108, 85)', 'rgb(27, 162, 122)'],
  ['rgb(187, 159, 51)', 'rgb(228, 205, 130)'],
  ['rgb(254, 125, 67)', 'rgb(255, 220, 206)'],
  ['rgb(179, 64, 74)', 'rgb(244, 178, 176)'],
  ['rgb(29, 50, 125)', 'rgb(39, 117, 201)'],
  ['rgb(131, 128, 139)', 'rgb(240, 146, 66)'],
  ['rgb(152, 0, 157)', 'rgb(152, 93, 157)'],
]

export const displayClasses = [
  'xxs',
  'none',
  'xxxs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  'xxl'
]

export const chartOptions = {
  bitcoin: {
      name: 'Bitcoin',
      symbol: 'btc'
  },
  ethereum: {
      name: 'Ethereum',
      symbol: 'eth'
  }
}

export const categories = {
  cryptocurrency: {
    categoryId: "cryptocurrency",
    name: "Cryptocurrencies",
  },
  "decentralized-finance-defi": {
    categoryId: "decentralized-finance-defi",
    name: "DeFi",
  },
  "non-fungible-tokens-nft": {
    categoryId: "non-fungible-tokens-nft",
    name: "NFTs",
  },
  metaverse: {
    categoryId: "metaverse",
    name: "Metaverse",
  },
  metaverse: {
    categoryId: "metaverse",
    name: "Sindhu",
  },
}

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

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

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
    icon: "invert(100%)",
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
    icon: "invert(0%)",
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

export const coinBreakPoints = {
  price: `(min-width: 316px)`,
  number: `(min-width: 370px)`,
  hour1: `(min-width: 500px)`,
  hour24: `(min-width: 620px)`,
  days7: `(min-width: 768px)`,
  supply: `(min-width: 900px)`,
  volume: `(min-width: 1100px)`,
  chart: `(min-width: 1220px)`
}

export const keyGen = () => {
    return `${Math.random()} - ${Math.random()}`
}

export const today = new Date()

export const timeIntervals = {
  '1d': 1,
  '1w': 7,
  '1m': 30,
  '3m': 90,
  '6m': 180,
  '1y': 365
}

export const myCoinsSeedData = [
  {
    coinId: 'ethereum',
    amountOwned: 3.82,
    purchaseDate: '11-11-2021',
    historicPrice: {
      aed: 17049.2634590459,
      ars: 464681.5466112867,
      aud: 6329.536738406416,
      bch: 6.966461778917657,
      bdt: 398106.2939823575,
      bhd: 1749.935250337338,
      bmd: 4641.528764849704,
      bnb: 7.598292425129757,
      brl: 25488.49105929565,
      btc: 0.07145843799653795,
      cad: 5796.605688683906,
      chf: 4260.528876187015,
      clp: 3691082.9196714303,
      cny: 29655.19143150122,
      czk: 101949.3273499468,
      dkk: 30053.086484867967,
      dot: 98.87993664487901,
      eos: 959.4859204054302,
      eth: 1,
      eur: 4040.4507898016664,
      gbp: 3460.468562989874,
      hkd: 36163.31098913522,
      huf: 1468811.777636689,
      idr: 66396604.82829852,
      ils: 14454.09189604314,
      inr: 345353.643977957,
      jpy: 528526.2389246707,
      krw: 5500028.988605283,
      kwd: 1400.7576828864605,
      lkr: 934287.7459590242,
      ltc: 17.892279928061644,
      mmk: 8238281.556601454,
      mxn: 95652.15599161705,
      myr: 19278.589724803212,
      ngn: 1905765.2955596354,
      nok: 40142.26152280266,
      nzd: 6568.03241093069,
      php: 232538.74843205058,
      pkr: 795325.9538569987,
      pln: 18624.21771647722,
      rub: 330701.9622023943,
      sar: 17410.83390829895,
      sek: 40409.52074908267,
      sgd: 6278.13180733571,
      thb: 152474.21992531302,
      try: 45704.78563281767,
      twd: 128913.8245564643,
      uah: 120918.84231582713,
      usd: 4641.528764849704,
      vef: 464.7562752244007,
      vnd: 105754217.67718443,
      xag: 188.29730685598426,
      xau: 2.5101387560307153,
      xdr: 3290.6396670127842,
      xlm: 12080.138694298952,
      xrp: 3911.5552305524193,
      yfi: 0.1405113622041865,
      zar: 71725.54400322257,
      bits: 71458.43799653795,
      link: 135.42829927968074,
      sats: 7145843.799653795,
    },
  },
  {
    coinId: 'bitcoin',
    amountOwned: 2.91,
    purchaseDate: '17-01-2019',
    historicPrice: {
      aed: 13214.80979275515,
      ars: 134832.62638374628,
      aud: 5015.688796998548,
      bch: 28.283562471385146,
      bdt: 301875.3130415222,
      bhd: 1356.4605444355168,
      bmd: 3597.6473233295915,
      bnb: 594.1620014960015,
      brl: 13442.61282126838,
      btc: 1,
      cad: 4770.69980722177,
      chf: 3561.1455935870954,
      clp: 2406775.206562585,
      cny: 24309.662728470375,
      czk: 80605.24510743174,
      dkk: 23560.877195771183,
      eos: 1493.18270810772,
      eth: 29.500893593935686,
      eur: 3156.406672065189,
      gbp: 2792.2995794129693,
      hkd: 28216.527839240218,
      huf: 1014536.5451789445,
      idr: 50892591.77706166,
      ils: 13261.787871503171,
      inr: 255709.97880029806,
      jpy: 392260.9314868494,
      krw: 4028385.26922417,
      kwd: 1089.9252448393204,
      lkr: 656189.7859643564,
      ltc: 114.73498869004726,
      mmk: 5488918.224445413,
      mxn: 67943.36852474106,
      myr: 14778.987700697775,
      ngn: 1304456.6423179663,
      nok: 30709.62188371385,
      nzd: 5312.062983494439,
      php: 187724.56097364158,
      pkr: 502587.33048532065,
      pln: 13514.022522989122,
      rub: 238708.57684443856,
      sar: 13488.838991725852,
      sek: 32347.569550021293,
      sgd: 4872.833417083771,
      thb: 113917.70366957037,
      try: 19223.938531028612,
      twd: 110739.31897000705,
      uah: 100845.55858142137,
      usd: 3597.6473233295915,
      vef: 893970900.9888157,
      vnd: 83503772.01282638,
      xag: 230.67053331229016,
      xau: 2.7818448162913745,
      xdr: 2573.3539586097845,
      xlm: 33991.68311018092,
      xrp: 11004.725412247735,
      zar: 49245.21895472244,
      bits: 1000000,
      link: 7326.489931102267,
      sats: 100000000,
    },
  },
]
