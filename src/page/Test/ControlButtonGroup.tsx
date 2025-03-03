import { useNavigate } from "react-router";
import copyURL from "@/page/Test/copyURL.ts";
import useTestParams from "@/page/Test/useTestParams.ts";

const ControlButtonGroup = () => {
  const navigate = useNavigate();
  const { testParam } = useTestParams();

  return (
    <div className="flex flex-col gap-2 justify-center max">
      <div className="flex justify-between gap-2">
        <button
          onClick={copyURL}
          className="border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 flex-1 cursor-pointer"
        >
          링크 복사
        </button>
        <button
          onClick={() => navigate(`/${testParam}`)}
          className="border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 flex-1 cursor-pointer"
        >
          다시 하기
        </button>
      </div>
      <button
        onClick={() => navigate("/")}
        className="border-2 border-amber-800 text-amber-800 text-xl rounded-xl p-4 cursor-pointer"
      >
        다른 테스트 하러 가기
      </button>
    </div>
  );
};

export default ControlButtonGroup;
