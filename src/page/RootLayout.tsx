import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className="w-full max-w-[35rem] mx-auto px-[5px] text-center my-8">
      <Outlet />
    </div>
  )
}

export default RootLayout
