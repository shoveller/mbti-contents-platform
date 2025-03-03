import { useNavigate } from "react-router";
import copyURL from "@/page/Test/copyURL.ts";
import useTestParams from "@/page/Test/useTestParams.ts";
import { AiOutlineHome, AiOutlineLink, AiOutlineRedo } from "react-icons/ai";

const ControlButtonGroup = () => {
  const navigate = useNavigate();
  const { testParam } = useTestParams();

  return (
    <div className="flex flex-col gap-2 justify-center max">
      <div className="flex justify-between gap-2">
        <button
          onClick={copyURL}
          className="flex justify-center items-center gap-2 border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 flex-1 cursor-pointer"
        >
          <AiOutlineLink />
          링크 복사
        </button>
        <button
          onClick={() => navigate(`/${testParam}`)}
          className="flex justify-center items-center gap-2 border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 flex-1 cursor-pointer"
        >
          <AiOutlineRedo />
          다시 하기
        </button>
      </div>
      <button
        onClick={() => navigate("/")}
        className="flex justify-center items-center gap-2 border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 cursor-pointer"
      >
        <AiOutlineHome />
        다른 테스트 하러 가기
      </button>
    </div>
  );
};

export default ControlButtonGroup;
