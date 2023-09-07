import React from "react";
import useQuery from "../../hooks/useQuery";
import useGifApi from "../../apis/hooks/useGifApi";
import { isAxiosError } from "axios";
import { GifResponseType } from "../../dto/gif-response.dto";
import { GifList } from "../../components";
import InfiniteScroll from "react-infinite-scroller";

const ResultPage: React.FC = () => {
  const q = useQuery().entries().next().value[1];
  const { getSearchGifs } = useGifApi();
  const [gifList, setGifList] = React.useState<GifResponseType[]>([]);
  const [count, setCount] = React.useState<number>(0);

  const queryString = React.useMemo(
    () => `q=${q}&api_key=${import.meta.env.VITE_GIPHY_API_KEY}`,
    [q]
  );

  const handleFetchMore = async (page: number) => {
    //** avoid repulicated results with initial rendering  */
    if (page > 1) {
      try {
        const { data } = await getSearchGifs(
          `${queryString}&offset=${(page - 1) * 50}`
        );
        setGifList((list) => [...list, ...data.data]);
        setCount(data.pagination.total_count);
      } catch (error) {
        if (isAxiosError(error)) {
          //display error here
        }
      }
    }
  };

  const fetchSearchResults = React.useCallback(async () => {
    try {
      const { data } = await getSearchGifs(queryString);
      setGifList(data.data);
      setCount(data.pagination.total_count);
    } catch (error) {
      if (isAxiosError(error)) {
        //display error here
      }
    }
  }, [getSearchGifs, queryString]);

  React.useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  return (
    <div className="results-page">
      <InfiniteScroll
        pageStart={0}
        loadMore={handleFetchMore}
        hasMore={gifList.length <= count}
      >
        <GifList list={gifList} />
      </InfiniteScroll>
    </div>
  );
};

export default ResultPage;
