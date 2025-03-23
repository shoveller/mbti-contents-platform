import LanguageIcons from '@/page/Main/LanguageIcons.tsx'
import MainBanner from '@/page/Main/MainBanner.tsx'
import CategoryButtons from '@/page/Main/CategoryButtons.tsx'
// import Thumbnail from "@/page/Main/Thumbnail.tsx";

/**
 * 애플리케이션의 메인 페이지 컴포넌트
 * 언어 아이콘, 메인 배너, 카테고리 버튼을 포함합니다.
 * @returns {JSX.Element} 메인 페이지 UI 컴포넌트
 */
const Main = () => {
  return (
    <section className="flex flex-col gap-4 my-8">
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
      {/*<Thumbnail />*/}
    </section>
  )
}

export const Component = Main
export default Main
