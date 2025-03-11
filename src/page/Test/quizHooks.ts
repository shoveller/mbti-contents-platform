import useRootLoaderData from "@/page/Test/useRootLoaderData.ts";
import {
  getInitialQuizScore,
  getRandomizedArray,
  QuizScore,
  updateQuizScore,
} from "@/page/Test/quizScore.ts";
import useTestParams from "@/page/Test/useTestParams.ts";
import { useSearchParams } from "react-router";
import { MBTITypes } from "@/data/TESTS.ts";

export const useQuestion = () => {
  const loaderData = useRootLoaderData();

  return (step: number) => {
    const questions = loaderData?.test?.questions || [];
    const question = questions[step];

    return {
      ...question,
      answers: getRandomizedArray(question.answers),
    };
  };
};

export const useMaxLength = () => {
  const loaderData = useRootLoaderData();

  return (loaderData?.test?.questions.length || 0) - 1;
};

export const useNextPathName = (step: number) => {
  const { lang } = useTestParams();

  return `/${lang}/quiz/${step}`;
};

const usePrevScores = () => {
  const [params] = useSearchParams();
  const scores: QuizScore = JSON.parse(
    params.get("scores") || JSON.stringify(getInitialQuizScore()),
  );

  return scores;
};

export const useNextSearch = () => {
  const prevScores = usePrevScores();

  return (type?: MBTITypes) => {
    if (type) {
      return new URLSearchParams({
        scores: JSON.stringify(updateQuizScore(prevScores, type)),
      }).toString();
    }

    return new URLSearchParams({
      scores: JSON.stringify(prevScores),
    }).toString();
  };
};
