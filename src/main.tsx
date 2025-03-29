import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router'

/**
 * 애플리케이션의 라우터 설정
 * 중첩된 라우트 구조를 정의하고 지연 로딩을 사용합니다.
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" lazy={() => import('@/page/Root')}>
      <Route index lazy={() => import('@/page/Main/Main.tsx')} />
      <Route
        path=":lang"
        id="rootLoader"
        lazy={() => import('@/page/Test/Test')}
      >
        <Route index lazy={() => import('@/page/Test/Intro')} />
        <Route path="quiz/:step?" lazy={() => import('@/page/Test/Quiz')} />
        <Route path="result" lazy={() => import('@/page/Test/Result')} />
      </Route>
    </Route>
  )
)

/**
 * 애플리케이션의 루트 엘리먼트에 React 앱을 마운트합니다.
 * 엄격 모드와 라우터 프로바이더를 사용합니다.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
