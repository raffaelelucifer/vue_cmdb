import { get } from './helpers'

const interfaceUrl = 'http://47.89.181.139'

const getNumber = get(interfaceUrl + '/get_number/')
const getphyDetails = get(interfaceUrl + '/getphyinfo_list/')

export {
  getNumber,
  getphyDetails
}
