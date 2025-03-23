import { TestData, TESTS } from '@/data/TESTS'
import { data, redirect, LoaderFunction, Outlet } from 'react-router'

/**
 * Test 라우트의 로더 함수
 * URL 파라미터에서 언어 코드를 가져와 해당 언어의 테스트 데이터를 찾아 반환합니다.
 * 적절한 테스트를 찾지 못한 경우 메인 페이지로 리다이렉트합니다.
 * @param {Object} options - 로더 함수 옵션
 * @param {Object} options.params - URL 파라미터
 * @param {string} options.params.lang - 언어 코드
 * @returns {Promise<Response>} 테스트 데이터 또는 리다이렉트 응답
 */
export const loader: LoaderFunction<{ test: TestData }> = async ({
  params
}) => {
  const test = TESTS.find((item) => item.info.lang === params?.lang)

  if (test) {
    return data(
      { test },
      {
        headers: {
          'Cache-Control': 'max-age=31536000, immutable' // 1년(사실상 무한대)
        }
      }
    )
  }

  return redirect('/')
}

/**
 * 테스트 페이지의 레이아웃 컴포넌트
 * 중첩된 라우트의 컴포넌트를 렌더링합니다.
 * @returns {JSX.Element} Outlet 컴포넌트
 */
const Test = () => {
  return <Outlet />
}

export const Component = Test
export default Test
