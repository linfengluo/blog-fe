/**
 * Created by linfengluo@gmail.com on 2019/1/7.
 */
import * as Types from '../units/mutationsType'

export default {
  [Types.CHANGE_SCROLLER_TOP](state, top = 0) {
    state.scrollerTop = top
  },
  
  [Types.CHANGE_PAGE_CONFIG](state, config) {
    const pageConfig = Object.assign(state.pageConfig, config)
    state.pageConfig = pageConfig
  },
  
  [Types.UPDATE_MODAL_CONFIG](state, config) {
    const modalConfig = Object.assign(state.modalConfig, config)
    state.modalConfig = modalConfig
  },
  [Types.CHANGE_SEARCH_STATE](state, isShow = false){
    state.isShowSearch = isShow
  },
  [Types.SAVE_ARTICLE_DICTORY](state, dictory = []){
    state.articleDistory = JSON.parse(JSON.stringify(dictory))
  }
}
