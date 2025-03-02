import { TestData } from "@/data/TESTS";
import { useNavigate, useRouteLoaderData } from "react-router";
import IntroButtonGroup from "./IntroButtonGroup";
import useTestParams from "./useTestParams";

const Intro = () => {
  const loaderData = useRouteLoaderData<{ test: TestData }>("testLoader");
  const info = loaderData?.test?.info;
  const navigate = useNavigate();
  const { testParam } = useTestParams();

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        {info?.mainTitle}
      </h1>
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        {info?.subTitle}
      </h3>
      <img
        src={info?.mainImage}
        alt={info?.mainTitle}
        onClick={() => navigate(`/${testParam}/quiz`)}
        className="cursor-pointer"
      />
      <p>
        <span className="text-red-800">{info?.mainTitle}</span>를 시작해 보세요!
      </p>
      <IntroButtonGroup />
    </>
  );
};

export default Intro;
