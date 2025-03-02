import { useParams } from "react-router";

export const modeList = ["intro", "quiz", "loading"] as const;

export type ModeList = (typeof modeList)[number];

const useTestParams = () => {
    return useParams<{ mode: ModeList, testParam: string }>();
};

export default useTestParams;
