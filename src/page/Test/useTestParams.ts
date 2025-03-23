import { useParams } from 'react-router'

/**
 * URL 파라미터에서 테스트 관련 매개변수를 추출하는 커스텀 훅
 * @returns {Object} 추출된 파라미터 객체
 * @returns {string} returns.lang - 언어 코드
 * @returns {number} returns.step - 현재 단계 번호 (숫자가 아닌 경우 기본값 1)
 * @returns {string|undefined} returns.mbti - MBTI 결과 (있는 경우)
 */
const useTestParams = () => {
  const { lang, step, mbti } = useParams<{
    lang: string
    step?: string
    mbti?: string
  }>()
  const stepNumber = Number(step)

  if (isNaN(stepNumber)) {
    return {
      lang,
      step: 1,
      mbti
    }
  }

  return {
    lang,
    step: stepNumber,
    mbti
  }
}

export default useTestParams
