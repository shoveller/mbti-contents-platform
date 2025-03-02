import { TestData } from "@/data/TESTS";
import { useRouteLoaderData } from "react-router";

const useTestLoaderData = () => {
    return useRouteLoaderData<{ test: TestData }>("testLoader");
};

export default useTestLoaderData;