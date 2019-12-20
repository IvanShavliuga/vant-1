'use strict'
import axios from 'axios'
import { baseUrl } from '@/config'
import { Toast } from 'vant'

class HttpRequest {
  constructor(url = baseUrl) {
    this.url = url
    this.queue = {}
  }
  getInsideConfig() {
    const token = sessionStorage.token 
    const config = {
      baseURL: this.url,
      headers: {}
    }
    token && (config.headers.Authorization = token)
    return config
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {
        this.toast = Toast.loading({
          message: '加载中...',
          duration: 0,
          forbidClick: true
        })
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      if (!Object.keys(this.queue).length) {
        this.toast.clear()
      }
      const { data, status } = res
      return { data, status }
    }, error => {
      delete this.queue[url]
      if (!Object.keys(this.queue).length) {
        this.toast.clear()
      }
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
