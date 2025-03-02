import { TestData, TESTS } from "@/data/TESTS";
import { data, redirect, LoaderFunction, Outlet } from "react-router";

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
  return <Outlet />;
};

export const Component = Test;
export default Test;
