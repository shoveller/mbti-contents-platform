import { useParams } from "react-router";

const useTestParams = () => {
  const { lang, step, mbti } = useParams<{
    lang: string;
    step?: string;
    mbti?: string;
  }>();
  const stepNumber = Number(step);

  if (isNaN(stepNumber)) {
    return {
      lang,
      step: 1,
      mbti,
    };
  }

  return {
    lang,
    step: stepNumber,
    mbti,
  };
};

export default useTestParams;
