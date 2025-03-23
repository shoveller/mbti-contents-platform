import { TestData } from '@/data/TESTS'
import { useRouteLoaderData } from 'react-router'

/**
 * 루트 로더에서 테스트 데이터를 가져오는 커스텀 훅
 * @returns {Object} 로더 데이터 객체
 * @returns {TestData} returns.test - 테스트 데이터
 */
const useRootLoaderData = () => {
  return useRouteLoaderData<{ test: TestData }>('rootLoader')
}

export default useRootLoaderData
