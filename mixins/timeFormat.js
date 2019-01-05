/**
 * Created by linfengluo@gmail.com on 2019/1/3.
 */
import dayjs from 'dayjs'
export default {
  methods: {
    formatDate(date, format = 'YYYY.MM.DD HH:mm'){
      return dayjs(date).format(format)
    }
  }
}
