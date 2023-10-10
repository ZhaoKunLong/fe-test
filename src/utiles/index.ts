//生成随机颜色数组
export const getRgb = () => Math.floor(Math.random() * 255)
export const getColor = () => `rgb(${getRgb()},${getRgb()},${getRgb()})`

// 节流函数
export const throttle = (fn: any, wait: number, immediate = true) => {
  let timer: any = null
  let isImmediate = true
  return (...rest: any[]) => {
    const _this = this
    if (isImmediate && immediate) {
      isImmediate = false
      fn.apply(_this, rest)
    } else {
      if (!timer) {
        timer = setTimeout(() => {
          isImmediate = true
          timer = null
          fn.apply(_this, rest)
        }, wait)
      }
    }
  }
}
