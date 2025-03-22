import useTestParams from '@/page/Test/useTestParams.ts'
import { TESTS } from '@/data/TESTS.ts'
import { Link } from 'react-router'

const OtherTestList = () => {
  const { lang } = useTestParams()

  return (
    <section>
      {TESTS.filter((item) => item.info.lang !== lang).map((item) => {
        return (
          <Link
            key={item.info.mainUrl}
            to={`/${item.info.lang}`}
            viewTransition
          >
            <img src={item.info.thumbImage} alt={item.info.mainUrl} />
          </Link>
        )
      })}
    </section>
  )
}

export default OtherTestList
