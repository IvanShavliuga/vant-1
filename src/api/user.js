import http from './index'

export const getUserInfo = ({ userId }) => {
  return http.request({
    url: '/f/tramsport/member/info',
    method: 'get',
    data: {
      userId,
    }
  })
}
