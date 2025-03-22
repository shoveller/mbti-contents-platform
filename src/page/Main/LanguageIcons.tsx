import { CircleFlag } from 'react-circle-flags'
import { useNavigate } from 'react-router'

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
