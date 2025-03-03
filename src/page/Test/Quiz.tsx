import {
  Link,
  LoaderFunction,
  Navigate,
  redirect,
  useSearchParams,
} from "react-router";
import useTestParams from "./useTestParams";
import useTestLoaderData from "./useTestLoaderData";
import {
  getInitialQuizScore,
  getRandomizedArray,
  QuizScore,
  updateQuizScore,
} from "./quizScore";
import { MBTITypes } from "@/data/TESTS";

export const loader: LoaderFunction<{ step: string }> = ({ params }) => {
  if (!params?.step) {
    return redirect("0");
  }

  return null;
};

const useQuestion = () => {
  const loaderData = useTestLoaderData();

  return (step: number) => {
    const questions = loaderData?.test?.questions || [];
    const question = questions[step];

    return {
      ...question,
      answers: getRandomizedArray(question.answers),
    };
  };
};

const useMaxLength = () => {
  const loaderData = useTestLoaderData();

  return (loaderData?.test?.questions.length || 0) - 1;
};

const useNextPathName = (step: number) => {
  const { testParam } = useTestParams();

  return `/${testParam}/quiz/${step}`;
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
  const nextPathname = useNextPathName(nextStep);
  const max = useMaxLength();
  const getQuestion = useQuestion();
  const getSearch = useNextSearch();

  if (nextStep > max + 1) {
    return (
      <Navigate
        to={{
          pathname: `/${testParam}/result`,
          search: getSearch(),
        }}
        replace
      />
    );
  }

  const { question, answers } = getQuestion(step);

  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question}</h3>
      <ul>
        {answers.map((item) => {
          return (
            <li key={item.content}>
              <Link
                className="block my-4 mx-auto py-8 bg-gray-200 rounded-lg text-lg"
                to={{
                  pathname: nextPathname,
                  search: getSearch(item.type),
                }}
                viewTransition
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
        max={max + 1}
      />
    </>
  );
};

export const Component = Quiz;
export default Quiz;
