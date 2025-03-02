import { TestData, TESTS } from "@/data/TESTS";
import { useLoaderData, data, redirect, LoaderFunction } from "react-router";

export const loader: LoaderFunction<{ test: TestData }> = async ({
  params,
}) => {
  const test = TESTS.find((item) => item.info.mainUrl === params?.testParam);

  if (test) {
    return data({ test });
  }

  return redirect("/");
};

const Test = () => {
  const { test } = useLoaderData<{ test: TestData }>();

  return <h1>{JSON.stringify(test)}</h1>;
};

export const Component = Test;
export default Test;
