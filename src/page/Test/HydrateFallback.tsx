import Lottie from "react-lottie-player";
import animationData from "./animationData.json";

const HydrateFallback = () => {
  return <Lottie loop animationData={animationData} play />;
};

export default HydrateFallback;
