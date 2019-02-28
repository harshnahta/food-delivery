var res = require('firebase-admin');
//var serviceAccount = require('path/to/serviceAccountKey.json');
res.initializeApp({
    credential: res.credential.cert({
      projectId: 'food-d11c5',
      clientEmail: 'foo@food-d11c5.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQDCtVclHDZnoxKi\n8fR91l9NTuV0ddsJ5lEpXLjVSlUcm8q82N/qiKQCAv3s19Mc8o71tfLvDTz0mKi6\n3RT0ZxR/DDmqSYvYgZZu49tfKN9hZnRCsX2qk7pQzEbsabfUq0kyP2qM30/gwgvA\nrTBOO/a6JDYOw/o50X/t1SGrL7VSHAj8M57Ppwid744cw5W2FdO7WtIWR1Oaqk45\n6M9jfskBK6VjxGvETO2t3jHeHDYKgDIQZEKhDjBBBOs5QtBhAz3hcFr5Sog8xH5l\nRDFat+baZ8FUtufgjfTzJrCxmvFs7d+QY+wvHzxwrhrVq4ENxDXx4Jgeoeg6Flfg\n9EoIoTZDAgMBAAECggEAMKdw0cilfas9tnMAlctSQDa1Vq82n1gqssvFMiMjdoUl\nmaAV//zKAuitfBgIXITuHU8sl/i2YSaejyc8m8AAWqj65eb/54emSCpvAG3tt+CK\nr7m7fbrxhUwuctgOBDoTDdfT78TDqJXEqw578ijAxA3VZkYpinYj4hHummDPDeec\n2Yt+HgS7Dy3dtHssL1hJ1Y0aCQCR1dwjcjuPUqPm3bgyCYgppavIkzLn6C19Qvxu\ntbc3NBjFR+ZkRcLvv6LuqSSsl2/XQrpVFR1nVoq1z5wHZFALsR4sSgolBUB3sMLg\n5zvvua9NAdH3wRW8vgRYqGwN5bWSbCPGLQOp2nGdiQKBgQDoeH6zhfUvRaQI8h3U\nvh6KPhR7qQ9Jn0RRVY+hZfXTxwT0Pb302F38mzOTA6N/gd/wCKir1hKmOGBRCjU5\nxse5Ln+0XOvE6juWtATYJt8iA51LvgRbeHLuxsOumMvqVjWVX/DiS3saYHXYW2uc\nXnS9a3nB9r4JXffWONQoEqCoywKBgQDWamSVOZCRIjF6lASXawbgmZ/qlCovAgTe\nSUb7otVuKdaIumEM0iozCHeAcJK30uAuvOEdg4VEqdTNJGmBVXK7+x3E9Xt55afG\nEYSvhC39aiReHpS45KopUaej5i8klULXxJcKRTN2F5U5Eu/R/hpZmbQ/8zvSo9cg\nB4f0qEORaQKBgGIzJDJpj9zcKiKtQ/SuKvBysOxbyd1rrcw9vGKNU36WP31851Ua\nYPloBi1ACDzAe/xFbBrKXy5f+i/BhCJX2d5byg5CgkW4PFu4x6MXKIKRzExGhEiv\nZL2AsQB8AweGSzRCRtsQz3ug66btV1PCgsXRNKm+tR/31c1kTBpxY/RpAn8YSfUa\n8mpuBnGUcTAT9wvQZZa3/BDLQm9KvwJLfyauVA75biOQUD53iX4ADsCQElNS+BKI\nRV3TaWmx024gOI3GvauhpC1YoatfxJxDRbXv/xYfk1dFmqGsDJPw/SJaAo6P4rU5\ndJ1fw0wkKwD/yMkzXTYOCH++XNEBz9iW3njJAoGAWhpXs+vbKNHdFDfJeR9N54an\na1ntpc5HMdj0WX8Gya/sxWib9Xgl9rQ0wASNptDW0jKibbX5wmM9ujM+UF5GxRsI\nTeVmJHZlNuP204DHoOvWL0sqh7jkQFMwPN+IVQvZd+7RC4KAcW+Xlh2VZ/DX8/m+\nBnFOwkr+HvAfKLs4Nk0=\n-----END PRIVATE KEY-----\n'
    }),
    databaseURL: 'https://food.firebaseio.com'
  });
  


  module.exports={res};