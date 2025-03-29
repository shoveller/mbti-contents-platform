import { Outlet } from 'react-router'

/**
 * 애플리케이션의 루트 레이아웃 컴포넌트
 * @returns {JSX.Element} 중앙 정렬된 컨테이너와 Outlet을 포함하는 레이아웃
 */
const Root = () => {
  return (
    <div className="w-full max-w-[35rem] mx-auto px-[5px] text-center my-8">
      <Outlet />
    </div>
  )
}

export const Component = Root
export default Root
