import Lottie from 'react-lottie-player'
import animationData from './animationData.json'

/**
 * 로딩 중 표시되는 로티 애니메이션 컴포넌트
 * @returns {JSX.Element} 로딩 애니메이션 컴포넌트
 */
const LoadingFallback = () => {
  return <Lottie loop animationData={animationData} play />
}

export default LoadingFallback
