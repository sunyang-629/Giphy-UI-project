import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useGifApi from "../../apis/hooks/useGifApi";
import { GifResponseType } from "../../dto/gif-response.dto";
import { GifList } from "../../components";
import { useQuery } from "react-query";

const FavouritePage: React.FC = () => {
  // TODO could move all below into a custrom hook
  const [idList] = useLocalStorage<string[]>("favourite_gif_list", []);
  const queryString = React.useMemo(
    () =>
      `api_key=${import.meta.env.VITE_GIPHY_API_KEY}&ids=${idList?.join(",")}`,
    [idList]
  );

  const { getLikeGifs } = useGifApi();

  const {
    // isLoading,
    // error,
    data: gifList = [],
  } = useQuery<GifResponseType[], Error>("likeGifs", async () => {
    if (idList?.length !== 0) {
      const { data } = await getLikeGifs(queryString);
      return data.data;
    }
    return [];
  });

  return (
    <div className="results-page">
      <GifList list={gifList} />
    </div>
  );
};

export default FavouritePage;
