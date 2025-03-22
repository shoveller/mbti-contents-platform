import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton
} from 'react-share'
import useRootLoaderData from '@/page/Test/useRootLoaderData.ts'
import copyURL from '@/page/Test/copyURL.ts'

const ShareButtonGroup = () => {
  const rootLoaderData = useRootLoaderData()

  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {rootLoaderData?.test.resultInfo.shareTitle}
      </h3>
      <div className="flex justify-center gap-4">
        <FacebookShareButton
          url={window.location.href}
          hashtag={rootLoaderData?.test?.info.mainTitle}
        >
          <FacebookIcon round size={48} />
        </FacebookShareButton>
        <TwitterShareButton
          url={window.location.href}
          title={rootLoaderData?.test?.info.mainTitle}
          hashtags={[rootLoaderData?.test?.info.mainTitle || '']}
        >
          <XIcon round size={48} />
        </TwitterShareButton>
        <button
          onClick={copyURL}
          className="w-12 h-12 border-0 m-0 rounded-full text-white bg-stone-400
            text-lg font-extrabold cursor-pointer"
        >
          URL
        </button>
      </div>
    </section>
  )
}

export default ShareButtonGroup
