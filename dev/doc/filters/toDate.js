/**
 * @description 将时间戳转换为日期.
 * @author pkeros
 * @data 2016/12/14
 * @email pkeros@vip.qq.com
 */

/**
 * @description 时间戳不够补0
 * @param time {String/Number}
 * @return {String}
 */
function format (time) {
	return time >= 10 ? time : '0' + time
}

export default {
  read: val => {
    let date = new Date(val)

    return `${format(date.getFullYear())}-${format(date.getMonth() + 1)}-${format(date.getDate())} 
            ${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`
  }
}
