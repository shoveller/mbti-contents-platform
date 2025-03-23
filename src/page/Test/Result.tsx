import {
  Await,
  data,
  LoaderFunction,
  replace,
  useLoaderData
} from 'react-router'
import { QuizScore, getMBTIType } from './quizScore'
import useRootLoaderData from './useRootLoaderData'
import { Suspense } from 'react'
import LoadingFallback from '@/page/Test/LoadingFallback.tsx'
import ShareButtonGroup from '@/page/Test/ShareButtonGroup.tsx'
import ControlButtonGroup from '@/page/Test/ControlButtonGroup.tsx'
import { deserializeQuizScores } from './quizHooks'

/**
 * Result 라우트의 로더 함수
 * URL 파라미터에서 점수를 가져와 MBTI 유형을 결정합니다.
 * 유효하지 않은 점수나 결과가 있는 경우 언어 페이지로 리다이렉트합니다.
 * @param {Object} options - 로더 함수 옵션
 * @param {Request} options.request - 요청 객체
 * @param {Object} options.params - URL 파라미터
 * @returns {Response} 데이터 응답 또는 리다이렉트 응답
 */
export const loader: LoaderFunction<{
  lang: string
}> = ({ request, params }) => {
  const { searchParams } = new URL(request.url)
  const scores: QuizScore = deserializeQuizScores(
    searchParams.get('scores') || ''
  )

  if (!scores) {
    return replace(`/${params.lang}}`)
  }

  const mbti = getMBTIType(scores)

  if (mbti.includes('X')) {
    return replace(`/${params.lang}}`)
  }

  return data({
    mbtiData: new Promise((resolve) => {
      setTimeout(() => {
        resolve(mbti)
      }, 3700)
    })
  })
}

/**
 * 결과 페이지 컴포넌트
 * MBTI 테스트 결과를 표시합니다.
 * @returns {JSX.Element} 결과 UI 컴포넌트
 */
const Result = () => {
  const loaderData = useLoaderData<{
    mbtiData: Promise<string>
  }>()
  const rootLoaderData = useRootLoaderData()

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Await resolve={loaderData?.mbtiData}>
        {(mbti) => {
          const result = rootLoaderData?.test?.results.find(
            (item) => item.type === mbti
          )

          return (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {rootLoaderData?.test.resultInfo.mainTitle}
              </h3>
              <img src={result?.img_src} alt={result?.type} />
              <section className="flex flex-col justify-center gap-8 py-4">
                <ShareButtonGroup />
                <ControlButtonGroup />
              </section>
            </>
          )
        }}
      </Await>
    </Suspense>
  )
}

export const Component = Result
export default Result
