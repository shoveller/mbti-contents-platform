import { useNavigate } from "react-router";
import copyURL from "@/page/Test/copyURL.ts";
import useTestParams from "@/page/Test/useTestParams.ts";
import { AiOutlineHome, AiOutlineLink, AiOutlineRedo } from "react-icons/ai";
import useTestLoaderData from "./useTestLoaderData";

const ControlButtonGroup = () => {
  const navigate = useNavigate();
  const { lang } = useTestParams();
  const testLoaderData = useTestLoaderData();

  return (
    <div className="flex flex-col gap-2 justify-center max">
      <div className="flex justify-between gap-2">
        <button
          onClick={copyURL}
          className="flex justify-center items-center gap-2 border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 flex-1 cursor-pointer"
        >
          <AiOutlineLink />
          {testLoaderData?.test.resultInfo.copyTitle}
        </button>
        <button
          onClick={() => navigate(`/${lang}`)}
          className="flex justify-center items-center gap-2 border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 flex-1 cursor-pointer"
        >
          <AiOutlineRedo />
          {testLoaderData?.test.resultInfo.retryTitle}
        </button>
      </div>
      <button
        onClick={() => navigate("/")}
        className="flex justify-center items-center gap-2 border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 cursor-pointer"
      >
        <AiOutlineHome />
        {testLoaderData?.test.resultInfo.gotoHomeTitle}
      </button>
    </div>
  );
};

export default ControlButtonGroup;
