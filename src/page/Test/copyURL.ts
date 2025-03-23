/**
 * 현재 페이지의 URL을 클립보드에 복사하고 사용자에게 알림을 표시합니다.
 * @returns {void}
 */
const copyURL = () => {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => alert('복사했습니다.'))
}

export default copyURL
