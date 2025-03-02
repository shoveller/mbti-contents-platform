import { TESTS } from "@/data/TESTS.ts";
import { Link } from "react-router";

const Thumbnail = () => {
  return (
    <>
      {TESTS.map((item) => {
        return (
          <Link key={item.info.mainUrl} to={`${item.info.mainUrl}/intro`}>
            <img src={item.info.thumbImage} alt={item.info.mainUrl} />
          </Link>
        );
      })}
    </>
  );
};

export default Thumbnail;
