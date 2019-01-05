/**
 * Created by linfengluo@gmail.com on 2019/1/2.
 */

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    return config
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if (code === 401) {
      redirect(error.response.headers.location || '/login')
    }
  })
  
  $axios.onResponse(res => {
    const data = res.data
    return Promise.resolve(data);
  })
}
