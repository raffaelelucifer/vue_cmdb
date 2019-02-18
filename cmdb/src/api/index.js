import { get } from './helpers'

const interfaceUrl = 'http://192.168.37.157:8080'

const getNumber = get(interfaceUrl + '/get_number/')
const getphyDetails = get(interfaceUrl + '/getphyinfo_list/')

export {
  getNumber,
  getphyDetails
}
