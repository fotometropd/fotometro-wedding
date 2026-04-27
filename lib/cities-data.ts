export interface CityData {
  slug: string
  name: string
  locative: string // e.g. "Sarajevu", "Banjoj Luci"
  region: string
  lat: number
  lng: number
  adjective: string
}

export const cities: CityData[] = [
  { slug: 'sarajevo', name: 'Sarajevo', locative: 'Sarajevu', region: 'Kanton Sarajevo', lat: 43.8563, lng: 18.4131, adjective: 'sarajevskim' },
  { slug: 'banja-luka', name: 'Banja Luka', locative: 'Banjoj Luci', region: 'Republika Srpska', lat: 44.7722, lng: 17.1910, adjective: 'banjalučkim' },
  { slug: 'tuzla', name: 'Tuzla', locative: 'Tuzli', region: 'Tuzlanski kanton', lat: 44.5328, lng: 18.6678, adjective: 'tuzlanskim' },
  { slug: 'zenica', name: 'Zenica', locative: 'Zenici', region: 'Zeničko-dobojski kanton', lat: 44.2017, lng: 17.9040, adjective: 'zeničkim' },
  { slug: 'bijeljina', name: 'Bijeljina', locative: 'Bijeljini', region: 'Republika Srpska', lat: 44.7558, lng: 19.2151, adjective: 'bijeljinskim' },
  { slug: 'mostar', name: 'Mostar', locative: 'Mostaru', region: 'Hercegovačko-neretvanski kanton', lat: 43.3438, lng: 17.8078, adjective: 'mostarskim' },
  { slug: 'prijedor', name: 'Prijedor', locative: 'Prijedoru', region: 'Republika Srpska', lat: 44.9818, lng: 16.7118, adjective: 'prijedorskim' },
  { slug: 'brcko', name: 'Brčko', locative: 'Brčkom', region: 'Brčko distrikt', lat: 44.8728, lng: 18.8061, adjective: 'brčanskim' },
  { slug: 'doboj', name: 'Doboj', locative: 'Doboju', region: 'Republika Srpska', lat: 44.7303, lng: 18.0837, adjective: 'dobojskim' },
  { slug: 'trebinje', name: 'Trebinje', locative: 'Trebinju', region: 'Republika Srpska', lat: 42.7082, lng: 18.3436, adjective: 'trebinjskim' },
  { slug: 'bihac', name: 'Bihać', locative: 'Bihaću', region: 'Unsko-sanski kanton', lat: 44.8169, lng: 15.8708, adjective: 'bihaćkim' },
  { slug: 'cazin', name: 'Cazin', locative: 'Cazinu', region: 'Unsko-sanski kanton', lat: 44.9667, lng: 15.9431, adjective: 'cazinskim' },
  { slug: 'gradiska', name: 'Gradiška', locative: 'Gradišci', region: 'Republika Srpska', lat: 45.1444, lng: 17.2544, adjective: 'gradiškim' },
  { slug: 'derventa', name: 'Derventa', locative: 'Derventi', region: 'Republika Srpska', lat: 44.9789, lng: 17.9078, adjective: 'derventskim' },
  { slug: 'zvornik', name: 'Zvornik', locative: 'Zvorniku', region: 'Republika Srpska', lat: 44.3853, lng: 19.1026, adjective: 'zvorničkim' },
  { slug: 'lukavac', name: 'Lukavac', locative: 'Lukavcu', region: 'Tuzlanski kanton', lat: 44.5333, lng: 18.5333, adjective: 'lukavačkim' },
  { slug: 'visoko', name: 'Visoko', locative: 'Visokom', region: 'Zeničko-dobojski kanton', lat: 43.9889, lng: 18.1781, adjective: 'visočkim' },
  { slug: 'gradacac', name: 'Gradačac', locative: 'Gradačcu', region: 'Tuzlanski kanton', lat: 44.8781, lng: 18.4278, adjective: 'gradačačkim' },
  { slug: 'teslic', name: 'Teslić', locative: 'Tesliću', region: 'Republika Srpska', lat: 44.6067, lng: 17.8597, adjective: 'teslićkim' },
  { slug: 'prnjavor', name: 'Prnjavor', locative: 'Prnjavoru', region: 'Republika Srpska', lat: 44.8694, lng: 17.6628, adjective: 'prnjavorskim' }
]
