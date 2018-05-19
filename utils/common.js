
const baseUrl = 'http://192.168.31.48:8088';

export const requetCommon = (url, data, methods = 'POST') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: data,
      header: {
        'content-type': 'json'
      },
      method: methods,
      success: function (res) {
        res.statusCode === 200 && resolve(res);
        res.statusCode !== 200 && reject(res);
      },
      fail: function (res) {
        reject(res);
      }
    })
  });
};