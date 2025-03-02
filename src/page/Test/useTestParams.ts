import { useParams } from "react-router";

const useTestParams = () => {
    const { testParam, step } = useParams<{ testParam: string, step: string }>();
    const stepNumber = Number(step);

    if (isNaN(stepNumber)) {
        return {
            testParam,
            step: 1
        }
    }

    return {
        testParam,
        step: stepNumber
    }
};

export default useTestParams;
