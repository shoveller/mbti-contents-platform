/**
 * 지정된 시간(밀리초) 동안 실행을 일시 중지합니다.
 * @param {number} ms - 일시 중지할 밀리초 시간
 * @returns {Promise<void>} - 지정된 시간이 지난 후 해결되는 Promise
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default sleep
