import {
  Await,
  data,
  LoaderFunction,
  replace,
  useLoaderData,
} from "react-router";
import { QuizScore, getMBTIType } from "./quizScore";
import useRootLoaderData from "./useRootLoaderData";
import { Suspense } from "react";
import LoadingFallback from "@/page/Test/LoadingFallback.tsx";
import ShareButtonGroup from "@/page/Test/ShareButtonGroup.tsx";
import ControlButtonGroup from "@/page/Test/ControlButtonGroup.tsx";

export const loader: LoaderFunction<{
  lang: string;
}> = ({ request, params }) => {
  const { searchParams } = new URL(request.url);
  const scores: QuizScore = JSON.parse(searchParams.get("scores") || "{}");
  if (!scores) {
    return replace(`/${params.lang}}`);
  }

  const mbti = getMBTIType(scores);
  if (mbti.includes("X")) {
    return replace(`/${params.lang}}`);
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
  const loaderData = useLoaderData<{
    mbtiData: Promise<string>;
  }>();
  const rootLoaderData = useRootLoaderData();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Await resolve={loaderData?.mbtiData}>
        {(mbti) => {
          const result = rootLoaderData?.test?.results.find(
            (item) => item.type === mbti,
          );

          return (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {rootLoaderData?.test.resultInfo.mainTitle}
              </h3>
              <img src={result?.img_src} alt={result?.type} />
              <section className="flex flex-col justify-center gap-8 py-4">
                <ShareButtonGroup />
                <ControlButtonGroup />
              </section>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export const Component = Result;
export default Result;
