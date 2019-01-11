/**
 * Created by linfengluo@gmail.com on 2019/1/9.
 */

class LocalStore {
  constructor(){
    if (window.localStorage) {
      this.canUse = true
    } else {
      console.log('浏览器不支持localStorage')
    }
  }
  save(name, value) {
    if (this.canUse) {
      window.localStorage.setItem(name, JSON.stringify(value))
    }
  }
  
  get(name) {
    if (this.canUse) {
      const value = window.localStorage.getItem(name)
      return value ? JSON.parse(value) : null
    }
  }
}

export default LocalStore
