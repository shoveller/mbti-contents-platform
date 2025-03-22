import Lottie from 'react-lottie-player'
import animationData from './animationData.json'

const LoadingFallback = () => {
  return <Lottie loop animationData={animationData} play />
}

export default LoadingFallback
