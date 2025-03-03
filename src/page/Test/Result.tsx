import {
  Await,
  data,
  LoaderFunction,
  Navigate,
  redirect,
  useLoaderData,
} from "react-router";
import { QuizScore, getMBTIType } from "./quizScore";
import useTestLoaderData from "./useTestLoaderData";
import { Suspense } from "react";
import useTestParams from "@/page/Test/useTestParams.ts";
import LoadingFallback from "@/page/Test/LoadingFallback.tsx";
import ShareButtonGroup from "@/page/Test/ShareButtonGroup.tsx";
import ControlButtonGroup from "@/page/Test/ControlButtonGroup.tsx";
import OtherTestList from "@/page/Test/OtherTestList.tsx";

export const loader: LoaderFunction<{
  testParam: string;
  mbti?: string;
}> = ({ request, params }) => {
  if (params?.mbti) {
    return null;
  }

  const url = new URL(request.url);
  const scores: QuizScore = JSON.parse(url.searchParams.get("scores") || "");
  const mbti = getMBTIType(scores);

  if (mbti.includes("X")) {
    return redirect(`/${params.testParam}}`);
  }

  return data({
    mbtiData: new Promise((resolve) => {
      setTimeout(() => {
        resolve(mbti);
      }, 3700);
    }),
  });
};

const Result = () => {
  const { testParam, mbti } = useTestParams();
  const loaderData = useLoaderData<{
    mbtiData: Promise<string>;
  }>();
  const testLoaderData = useTestLoaderData();

  if (!mbti) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Await resolve={loaderData?.mbtiData}>
          {(mbti) => {
            return <Navigate to={`/${testParam}/result/${mbti}`} />;
          }}
        </Await>
      </Suspense>
    );
  }

  const result = testLoaderData?.test?.results.find(
    (item) => item.type === mbti,
  );

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">결과는...</h3>
      <img src={result?.img_src} alt={result?.type} />
      <section className="flex flex-col justify-center gap-8 py-4">
        <ShareButtonGroup />
        <ControlButtonGroup />
        <OtherTestList />
      </section>
    </>
  );
};

export const Component = Result;
export default Result;
