import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-full max-w-[35rem] mx-auto px-[5px] text-center">
      <Outlet />
    </div>
  );
};

export default RootLayout;
