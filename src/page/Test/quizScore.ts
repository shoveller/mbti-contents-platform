/**
 * MBTI 퀴즈 점수를 나타내는 타입
 * @typedef {Object} QuizScore
 * @property {number} E - 외향성(Extraversion) 점수
 * @property {number} I - 내향성(Introversion) 점수
 * @property {number} S - 감각(Sensing) 점수
 * @property {number} N - 직관(iNtuition) 점수
 * @property {number} T - 사고(Thinking) 점수
 * @property {number} F - 감정(Feeling) 점수
 * @property {number} J - 판단(Judging) 점수
 * @property {number} P - 인식(Perceiving) 점수
 */
export type QuizScore = {
  E: number
  I: number
  S: number
  N: number
  T: number
  F: number
  J: number
  P: number
}

/**
 * 초기 MBTI 퀴즈 점수 객체를 생성합니다.
 * @returns {QuizScore} 모든 점수가 0으로 초기화된 QuizScore 객체
 */
export const getInitialQuizScore = (): QuizScore => {
  return {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  }
}

/**
 * QuizScore 객체를 업데이트합니다.
 * @param {QuizScore} score - 업데이트할 원본 점수 객체
 * @param {keyof QuizScore} [type] - 업데이트할 타입(선택적)
 * @returns {QuizScore} 업데이트된 점수 객체
 */
export const updateQuizScore = (score: QuizScore, type?: keyof QuizScore) => {
  if (!type) {
    return score
  }

  return score
}

/**
 * 배열을 무작위로 섞어 새로운 배열을 반환합니다.
 * @template T - 배열 요소의 타입
 * @param {T[]} array - 섞을 원본 배열
 * @returns {T[]} 무작위로 섞인 새 배열
 */
export const getRandomizedArray = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5)
}

/**
 * 두 점수를 비교하여 해당하는 MBTI 유형 문자를 반환합니다.
 * @param {number} a - 첫 번째 점수
 * @param {number} b - 두 번째 점수
 * @param {string} typeA - 첫 번째 점수가 높을 경우 반환할 유형
 * @param {string} typeB - 두 번째 점수가 높을 경우 반환할 유형
 * @returns {string} 비교 결과에 따른 유형 문자 (동점일 경우 'X')
 */
const compareScores = (
  a: number,
  b: number,
  typeA: string,
  typeB: string
): string => {
  if (a > b) return typeA

  if (a < b) return typeB

  return 'X'
}

/**
 * QuizScore 객체를 기반으로 MBTI 유형을 결정합니다.
 * 함수형 프로그래밍 접근 방식으로 구현되었습니다.
 * @param {QuizScore} score - MBTI 점수 객체
 * @returns {string} 결정된 MBTI 유형 문자열 (예: 'ENFP', 'ISTJ' 등)
 */
export function getMBTIType(score: QuizScore): string {
  // 입력 검증
  if (!score) {
    return 'XXXX'
  }

  // 각 지표별 비교 및 결과 생성
  const pairs = [
    { values: [score.E, score.I], types: ['E', 'I'] },
    { values: [score.S, score.N], types: ['S', 'N'] },
    { values: [score.T, score.F], types: ['T', 'F'] },
    { values: [score.J, score.P], types: ['J', 'P'] }
  ]

  // 배열 메서드를 사용하여 최종 결과 생성
  return pairs
    .map((pair) =>
      compareScores(
        pair.values[0],
        pair.values[1],
        pair.types[0],
        pair.types[1]
      )
    )
    .join('')
}
