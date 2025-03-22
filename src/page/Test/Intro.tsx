import { useNavigate } from 'react-router'
import useTestParams from './useTestParams'
import useRootLoaderData from './useRootLoaderData'

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
