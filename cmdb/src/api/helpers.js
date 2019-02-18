import axios from 'axios'

export function get(url) {
  return function (paramas) {
    return axios.get(url, {
      paramas
    }).then((res) => {
      const serverdata = res.data
      return serverdata
    }).catch(() => {
    })
  }
}
