import { useParams } from "react-router";

const useTestParams = () => {
    const { testParam, step, mbti } = useParams<{ testParam: string, step?: string, mbti?: string }>();
    const stepNumber = Number(step);

    if (isNaN(stepNumber)) {
        return {
            testParam,
            step: 1,
            mbti
        }
    }

    return {
        testParam,
        step: stepNumber,
        mbti
    }
};

export default useTestParams;
