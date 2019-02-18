import { post } from './axios'

/*
  获取物理资产与虚拟资产数量
*/
export function getnumber(data) {
  return post('/get_number/', data)
}

export function getphyDetails(data) {
  return post('/getphyinfo_list/', data)
}

export function getvirDetails(data) {
  return post('/getvirinfo_list/', data)
}

export function addproductinfo(data) {
  return post('/add_productinfo/', data)
}

export function checkproductinfo(data) {
  return post('/get_productinfo/', data)
}

export function addprojectinfo(data) {
  return post('/add_projectinfo/', data)
}

export function checkprojectinfo(data) {
  return post('/get_projectinfo/', data)
}
