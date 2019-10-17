
// import {
//   axiosApi,
// } from '../../utils'
const axiosApi = () => { }

export class Network {
  _axiosApi = axiosApi
  _axiosApiAuth = axiosApi

  constructor(props) {
    props.getJwt && this.createAxiosApiAuth(props.getJwt)

  }

  createAxiosApiAuth = (getJwt) => {
    this._axiosApiAuth = async (url, method = 'GET', data, options) => {
      const jwtToken = getJwt && getJwt() || ''
      const _options = { ...options, headers: { Authorization: jwtToken, ...(options && typeof options['headers'] === 'object' ? options['headers'] : {}) }, }
      return axiosApi(url, method, data, _options)
    }

    return
  }
}
