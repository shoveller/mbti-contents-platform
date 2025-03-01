import LanguageIcons from "@/page/Main/LanguageIcons.tsx";
import MainBanner from "@/page/Main/MainBanner.tsx";
import CategoryButtons from "@/page/Main/CategoryButtons.tsx";

const Main = () => {
  return (
    <>
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
    </>
  );
};

export const Component = Main;
export default Main;
