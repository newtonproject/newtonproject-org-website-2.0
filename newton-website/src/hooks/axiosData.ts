import axios from 'axios'

export function getRequest(url: string) {
  return axios.get(url)
}
