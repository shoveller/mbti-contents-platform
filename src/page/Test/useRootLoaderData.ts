import { TestData } from '@/data/TESTS'
import { useRouteLoaderData } from 'react-router'

const useRootLoaderData = () => {
  return useRouteLoaderData<{ test: TestData }>('rootLoader')
}

export default useRootLoaderData
