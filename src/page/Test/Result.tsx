import { LoaderFunction, Navigate, redirect } from "react-router";
import { QuizScore, getMBTIType } from "./quizScore";
import useTestParams from "./useTestParams";
import sleep from "./sleep";
import useTestLoaderData from "./useTestLoaderData";

export const loader: LoaderFunction<{
  testParam: string;
  mbti?: string;
}> = async ({ request, params }) => {
  if (params?.mbti) {
    return null;
  }

  await sleep(5000);
  const url = new URL(request.url);
  const scores: QuizScore = JSON.parse(url.searchParams.get("scores") || "");
  const mbti = getMBTIType(scores);

  return redirect(`/${params.testParam}/result/${mbti}`);
};

const Result = () => {
  const { mbti, testParam } = useTestParams();
  const loaderData = useTestLoaderData();
  const result = loaderData?.test?.results.find((item) => item.type === mbti);

  if (!result?.img_src) {
    return <Navigate to={`/${testParam}`} />;
  }

  return <img src={result?.img_src} alt={result?.type} />;
};

export const Component = Result;
export default Result;
