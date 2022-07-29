import axios from 'axios'

export function getRequest(url: string) {
  return axios.get(url)
}

export function postRequest(url: string, data: any) {
  return axios.post(url, data)
}
