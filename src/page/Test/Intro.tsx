import { useNavigate } from 'react-router'
import useTestParams from './useTestParams'
import useRootLoaderData from './useRootLoaderData'

/**
 * 테스트 소개 페이지 컴포넌트
 * 테스트 제목, 부제목, 메인 이미지를 표시합니다.
 * 이미지 클릭 시 테스트 퀴즈 페이지로 이동합니다.
 * @returns {JSX.Element} 테스트 소개 UI 컴포넌트
 */
const Intro = () => {
  const loaderData = useRootLoaderData()
  const info = loaderData?.test?.info
  const navigate = useNavigate()
  const { lang } = useTestParams()

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        {info?.mainTitle}
      </h1>
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        {info?.subTitle}
      </h3>
      <img
        src={info?.mainImage}
        alt={info?.mainTitle}
        onClick={() => navigate(`/${lang}/quiz`)}
        className="cursor-pointer"
      />
      <p>
        <span className="text-red-800">{info?.mainTitle}</span>
      </p>
      {/* <IntroButtonGroup /> */}
    </>
  )
}

export const Component = Intro
export default Intro
