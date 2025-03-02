import {
  Link,
  LoaderFunction,
  Navigate,
  redirect,
  useSearchParams,
} from "react-router";
import useTestParams from "./useTestParams";
import useTestLoaderData from "./useTestLoaderData";
import { getInitialQuizScore, QuizScore, updateQuizScore } from "./quizScore";
import { MBTITypes } from "@/data/TESTS";

export const loader: LoaderFunction<{ step: string }> = ({ params }) => {
  if (!params?.step) {
    return redirect("1");
  }

  return null;
};

const total = 11;

const useQuestion = () => {
  const { step } = useTestParams();
  const loaderData = useTestLoaderData();
  const questions = loaderData?.test?.questions || [];

  return questions[step];
};

const useNextPathName = () => {
  const { testParam, step } = useTestParams();
  const nextStep = step + 1;

  return `/${testParam}/quiz/${nextStep}`;
};

const usePrevScores = () => {
  const [params] = useSearchParams();
  const scores: QuizScore = JSON.parse(
    params.get("scores") || JSON.stringify(getInitialQuizScore()),
  );

  return scores;
};

const useNextSearch = () => {
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

const Quiz = () => {
  const { testParam, step } = useTestParams();
  const nextStep = step + 1;
  const pathname = useNextPathName();
  const { question, answers } = useQuestion();
  const getSearch = useNextSearch();

  if (nextStep > total) {
    return (
      <Navigate
        to={{
          pathname: `/${testParam}/loading`,
          search: getSearch(),
        }}
        replace
      />
    );
  }

  return (
    <>
      <h3>{question}</h3>
      <ul>
        {answers.map((item) => {
          return (
            <li key={item.content}>
              <Link
                to={{
                  pathname,
                  search: getSearch(item.type),
                }}
              >
                {item.content}
              </Link>
            </li>
          );
        })}
      </ul>
      <progress
        className="w-full h-2 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-red-600"
        value={step}
        max={total}
      />
    </>
  );
};

export const Component = Quiz;
export default Quiz;
