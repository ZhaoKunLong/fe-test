/**用户信息 */
export type User = {
  id: Number
  /**用户名 */
  name: string
  /**性别 */
  sex: string
  /**年龄 */
  age: Number
  /**班级名称 */
  className: string
}

/** 图片信息 */
export type pictureInfo = {
  /** 图片地址 */
  src: string,
  /** 图片提示 */
  alt: string,
  /** 图片索引 */
  index: string,
  /** ref 名称 */
  ref: string

}
