import { TESTS, TestData } from "@/data/TESTS.ts";
import { data, Link, LoaderFunction, useLoaderData } from "react-router";

export const loader: LoaderFunction = async () => {
  return data({ tests: TESTS });
};

const Thumbnail = () => {
  const { tests } = useLoaderData<{ tests: TestData[] }>();

  return (
    <>
      {tests.map((item) => {
        return (
          <Link key={item.info.mainUrl} to={item.info.mainUrl}>
            <img src={item.info.thumbImage} alt={item.info.mainUrl} />
          </Link>
        );
      })}
    </>
  );
};

export default Thumbnail;
