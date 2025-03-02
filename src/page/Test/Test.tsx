import { TestData, TESTS } from "@/data/TESTS";
import { data, redirect, LoaderFunction } from "react-router";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";
import useTestParams, { modeList } from "./useTestParams";

export const loader: LoaderFunction<{ test: TestData }> = async ({
  params,
}) => {
  if (!modeList.includes(params.mode as ModeList)) {
    return redirect(`/${params?.testParam}/intro`);
  }

  const test = TESTS.find((item) => item.info.mainUrl === params?.testParam);

  if (test) {
    return data({ test });
  }

  return redirect("/");
};

const Test = () => {
  const { mode } = useTestParams();

  if (mode === "loading") {
    return <Loading />;
  }

  if (mode === "quiz") {
    return <Quiz />;
  }

  return <Intro />;
};

export const Component = Test;
export default Test;
