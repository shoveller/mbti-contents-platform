import LanguageIcons from "@/page/Main/LanguageIcons.tsx";
import MainBanner from "@/page/Main/MainBanner.tsx";
import CategoryButtons from "@/page/Main/CategoryButtons.tsx";
import Thumbnail from "@/page/Main/Thumbnail.tsx";

const Main = () => {
  return (
    <>
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
      <Thumbnail />
    </>
  );
};

export const Component = Main;
export default Main;
