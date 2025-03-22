import LanguageIcons from '@/page/Main/LanguageIcons.tsx'
import MainBanner from '@/page/Main/MainBanner.tsx'
import CategoryButtons from '@/page/Main/CategoryButtons.tsx'
// import Thumbnail from "@/page/Main/Thumbnail.tsx";

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
