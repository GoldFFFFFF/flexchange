function request (url, method, data, token) {
  let header = { 'content-type': 'application/json' }
  if (token) header['Authorization'] = 'Bearer ' + token
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: header,
      success: function (res) {
        if (Number(res.statusCode) !== 200) reject(res)
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

export default {
  get: function (obj) {
    return request(obj.url, 'GET', obj.data, obj.token)
  },
  post: function (obj) {
    return request(obj.url, 'POST', obj.data, obj.token)
  },
  put: function (obj) {
    return request(obj.url, 'PUT', obj.data, obj.token)
  },
  delete: function (obj) {
    return request(obj.url, 'DELETE', obj.data, obj.token)
  }
}
