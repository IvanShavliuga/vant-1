'use strict'

export const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://api.chengyizhuanyun.com'
  // : 'http://192.168.11.153:9090'
  : '/api'

export const imgHost = 'http://image.chengyizhuanyun.com'
