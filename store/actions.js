/**
 * Created by linfengluo@gmail.com on 2019/1/3.
 */
import apiConfig from '../units/apiConfig'
const actions = {
  
  getArticles({}, params){
    return new Promise((resolve, reject) => {
      this.$axios.get(apiConfig.article, {
        params
      })
        .then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        });
    })
  },
  
  getArticle({}, id){
    if (!id) {
      return
    }
    return new Promise((resolve, reject) => {
      this.$axios.get(`${apiConfig.article}/${id}`)
        .then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        });
      })
  },
  
  getClassifys({}){
    return new Promise((resolve, reject) => {
      this.$axios.get(apiConfig.classify)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        });
    })
  },
}

export default actions
