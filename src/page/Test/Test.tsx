import { TestData, TESTS } from "@/data/TESTS";
import { data, redirect, LoaderFunction, Outlet } from "react-router";

export const loader: LoaderFunction<{ test: TestData }> = async ({
  params,
}) => {
  const test = TESTS.find((item) => item.info.lang === params?.lang);

  if (test) {
    return data(
      { test },
      {
        headers: {
          "Cache-Control": "max-age=31536000, immutable", // 1년(사실상 무한대)
        },
      },
    );
  }

  return redirect("/");
};

const Test = () => {
  return <Outlet />;
};

export const Component = Test;
export default Test;
