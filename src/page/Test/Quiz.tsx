import { Link, LoaderFunction, redirect, replace } from "react-router";
import useTestParams from "./useTestParams";
import {
  useMaxLength,
  useNextPathName,
  useNextSearch,
  useQuestion,
} from "@/page/Test/quizHooks.ts";

export const loader: LoaderFunction<{ lang: string; step: string }> = ({
  params,
  request,
}) => {
  if (!params?.step) {
    return redirect("0");
  }

  if (Number(params?.step) > 11) {
    const { search } = new URL(request.url);

    return replace(`/${params.lang}/result${search}`);
  }

  return null;
};

const Quiz = () => {
  const { step } = useTestParams();
  const nextStep = step + 1;
  const nextPathname = useNextPathName(nextStep);
  const max = useMaxLength();
  const getQuestion = useQuestion();
  const getSearch = useNextSearch();
  const { question, answers } = getQuestion(step);

  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question}</h3>
      <ul>
        {answers.map((item) => {
          return (
            <li key={item.content}>
              <Link
                className="block my-4 mx-auto py-8 bg-gray-200 rounded-lg text-lg select-none"
                to={{
                  pathname: nextPathname,
                  search: getSearch(item.type),
                }}
                replace
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
      <h5>
        <span>
          {step}/{max + 1}
        </span>
      </h5>
    </>
  );
};

export const Component = Quiz;
export default Quiz;
