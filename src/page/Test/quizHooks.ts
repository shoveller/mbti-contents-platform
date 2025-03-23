import useRootLoaderData from '@/page/Test/useRootLoaderData.ts'
import {
  getInitialQuizScore,
  getRandomizedArray,
  QuizScore,
  updateQuizScore
} from '@/page/Test/quizScore.ts'
import useTestParams from '@/page/Test/useTestParams.ts'
import { useSearchParams } from 'react-router'
import { MBTITypes } from '@/data/TESTS.ts'
import CryptoJS from 'crypto-js'

/**
 * 암호화 키 (실제 프로덕션에서는 환경 변수로 관리하는 것이 좋습니다)
 * @type {string}
 */
const ENCRYPTION_KEY = 'mbti-quiz-secret-key'

/**
 * 현재 스텝에 해당하는 질문과 무작위로 섞인 답변을 반환하는 훅
 * @returns {Function} 스텝 번호를 입력받아 해당 질문 객체를 반환하는 함수
 */
export const useQuestion = () => {
  const loaderData = useRootLoaderData()

  return (step: number) => {
    const questions = loaderData?.test?.questions || []
    const question = questions[step]

    return {
      ...question,
      answers: getRandomizedArray(question.answers)
    }
  }
}

/**
 * 질문의 최대 개수(인덱스)를 반환하는 훅
 * @returns {number} 질문의 최대 인덱스 (질문 개수 - 1)
 */
export const useMaxLength = () => {
  const loaderData = useRootLoaderData()

  return (loaderData?.test?.questions.length || 0) - 1
}

/**
 * 다음 스텝의 경로를 생성하는 훅
 * @param {number} step - 현재 스텝 번호
 * @returns {string} 다음 스텝의 경로
 */
export const useNextPathName = (step: number) => {
  const { lang } = useTestParams()

  return `/${lang}/quiz/${step}`
}

/**
 * URL 파라미터에서 이전 점수를 가져오는 훅
 * @returns {QuizScore} 이전 점수 객체
 */
const usePrevScores = () => {
  const [params] = useSearchParams()

  return deserializeQuizScores(
    params.get('scores') || JSON.stringify(getInitialQuizScore())
  )
}

/**
 * 다음 점수를 URL 검색 파라미터로 생성하는 훅
 * @returns {Function} MBTI 타입을 받아 새로운 URL 파라미터 문자열을 반환하는 함수
 */
export const useNextSearch = () => {
  const prevScores = usePrevScores()

  return (type?: MBTITypes) => {
    if (type) {
      return new URLSearchParams({
        scores: serializeQuizScores(updateQuizScore(prevScores, type))
      }).toString()
    }

    return new URLSearchParams({
      scores: serializeQuizScores(prevScores)
    }).toString()
  }
}

/**
 * 데이터를 암호화하여 직렬화합니다.
 * @param {QuizScore} scores - MBTI 퀴즈 점수 객체
 * @returns {string} 암호화된 문자열
 */
export const serializeQuizScores = (scores: QuizScore): string => {
  // 데이터를 JSON 문자열로 변환
  const jsonString = JSON.stringify(scores)

  // 데이터 암호화
  const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY).toString()

  // URL에서 안전하게 사용할 수 있도록 Base64 인코딩
  return encodeURIComponent(encrypted)
}

/**
 * 암호화된 문자열을 복호화하여 객체로 변환합니다.
 * @param {string} encryptedString - 암호화된 문자열
 * @returns {QuizScore} MBTI 퀴즈 점수 객체
 */
export const deserializeQuizScores = (encryptedString: string): QuizScore => {
  try {
    // 빈 문자열이거나 유효하지 않은 경우 기본값 반환
    if (!encryptedString) {
      return getInitialQuizScore()
    }

    // URL 디코딩
    const decoded = decodeURIComponent(encryptedString)

    // 복호화 시도
    const decrypted = CryptoJS.AES.decrypt(decoded, ENCRYPTION_KEY).toString(
      CryptoJS.enc.Utf8
    )

    // JSON 파싱
    return JSON.parse(decrypted) as QuizScore
  } catch (error) {
    console.error('퀴즈 점수 복호화 중 오류 발생:', error)

    // 오류 발생 시 기본값 반환
    return getInitialQuizScore()
  }
}
