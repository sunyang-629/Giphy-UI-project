import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useGifApi from "../../apis/hooks/useGifApi";
import { isAxiosError } from "axios";
import { GifResponseType } from "../../dto/gif-response.dto";
import { GifList } from "../../components";

const FavouritePage: React.FC = () => {
  const [idList] = useLocalStorage<string[]>("favourite_gif_list", []);
  const [gifList, setGifList] = React.useState<GifResponseType[]>([]);

  const queryString = React.useMemo(
    () =>
      `api_key=${import.meta.env.VITE_GIPHY_API_KEY}&ids=${idList?.join(",")}`,
    [idList]
  );

  const { getLikeGifs } = useGifApi();

  const fetchAllLikes = React.useCallback(async () => {
    try {
      const { data } = await getLikeGifs(queryString);
      setGifList(data.data);
    } catch (error) {
      if (isAxiosError(error)) {
        //todo display error here/
      }
    }
  }, [getLikeGifs, queryString]);

  React.useEffect(() => {
    if (idList?.length !== 0) fetchAllLikes();
  }, [fetchAllLikes, idList]);

  return (
    <div className="results-page">
      <GifList list={gifList} isLoading={false} />
    </div>
  );
};

export default FavouritePage;
