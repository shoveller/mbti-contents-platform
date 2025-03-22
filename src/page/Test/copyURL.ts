const copyURL = () => {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => alert('복사했습니다.'))
}

export default copyURL
