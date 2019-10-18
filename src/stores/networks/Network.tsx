
// import {
//   axiosApi,
// } from '../../utils'
const axiosApi = async (url: string, method: 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE', data: any, _options: any) => { }

export class Network {
  _axiosApi: (url: string, method: 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE', data: any, _options: any) => Promise<any> = axiosApi
  _axiosApiAuth: (url: string, method: 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE', data: any, _options: any) => Promise<any> = axiosApi

  constructor(getJwt: () => '') {
    this.createAxiosApiAuth(getJwt)

  }

  createAxiosApiAuth = (getJwt: () => '') => {
    this._axiosApiAuth = async (url, method = 'GET', data, options) => {
      const jwtToken = getJwt && getJwt() || ''
      const _options = { ...options, headers: { Authorization: jwtToken, ...(options && typeof options['headers'] === 'object' ? options['headers'] : {}) }, }
      return axiosApi(url, method, data, _options)
    }

    return
  }
}
