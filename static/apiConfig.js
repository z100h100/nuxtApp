import axios from 'axios'
const globalConfigFile = `/apiUrl.json`
axios.get(globalConfigFile).then(res => {
  axios.defaults.baseURL = res.data.BASEURL
  axios.defaults.timeout = 5000
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8'
})
