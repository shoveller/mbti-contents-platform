import { CircleFlag } from 'react-circle-flags'
import { useNavigate } from 'react-router'

/**
 * 언어 선택 아이콘 컴포넌트
 * 한국어, 영어, 일본어로 테스트를 시작할 수 있는 국기 아이콘을 제공합니다.
 * 아이콘 클릭 시 해당 언어의 테스트 페이지로 이동합니다.
 * @returns {JSX.Element} 언어 선택 아이콘 UI 컴포넌트
 */
const LanguageIcons = () => {
  const navigate = useNavigate()

  return (
    <section className="flex justify-center items-center gap-4">
      <CircleFlag
        countryCode="kr"
        width={48}
        className="cursor-pointer"
        onClick={() => navigate('/ko', { viewTransition: true })}
      />
      <CircleFlag
        countryCode="us"
        width={48}
        className="cursor-pointer"
        onClick={() => navigate('/en', { viewTransition: true })}
      />
      <CircleFlag
        countryCode="jp"
        width={48}
        className="cursor-pointer"
        onClick={() => navigate('/jp', { viewTransition: true })}
      />
    </section>
  )
}

export default LanguageIcons
