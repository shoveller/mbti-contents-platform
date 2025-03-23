import { TESTS } from '@/data/TESTS.ts'
import { Link } from 'react-router'

/**
 * 테스트 썸네일 컴포넌트
 * 사용 가능한 모든 테스트의 썸네일 이미지를 표시합니다.
 * 썸네일 클릭 시 해당 테스트의 언어 페이지로 이동합니다.
 * @returns {JSX.Element} 테스트 썸네일 목록 UI 컴포넌트
 */
const Thumbnail = () => {
  return (
    <>
      {TESTS.map((item) => {
        return (
          <Link key={item.info.mainUrl} to={item.info.lang} viewTransition>
            <img src={item.info.thumbImage} alt={item.info.mainUrl} />
          </Link>
        )
      })}
    </>
  )
}

export default Thumbnail
