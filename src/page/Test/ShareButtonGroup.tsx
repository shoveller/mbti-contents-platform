import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton,
} from "react-share";
import useTestLoaderData from "@/page/Test/useTestLoaderData.ts";
import copyURL from "@/page/Test/copyURL.ts";

const ShareButtonGroup = () => {
  const testLoaderData = useTestLoaderData();

  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">친구와 공유하기</h3>
      <div className="flex justify-center gap-4">
        <FacebookShareButton
          url={window.location.href}
          hashtag={testLoaderData?.test?.info.mainTitle}
        >
          <FacebookIcon round size={48} />
        </FacebookShareButton>
        <TwitterShareButton
          url={window.location.href}
          title={testLoaderData?.test?.info.mainTitle}
          hashtags={[testLoaderData?.test?.info.mainTitle || ""]}
        >
          <XIcon round size={48} />
        </TwitterShareButton>
        <button
          onClick={copyURL}
          className="w-12 h-12 border-0 m-0 rounded-full text-white bg-stone-400 text-lg font-extrabold cursor-pointer"
        >
          URL
        </button>
      </div>
    </section>
  );
};

export default ShareButtonGroup;
