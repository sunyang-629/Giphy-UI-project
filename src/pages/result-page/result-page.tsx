import React from "react";
import useQuery from "../../hooks/useQuery";
import useGifApi from "../../apis/hooks/useGifApi";
import { isAxiosError } from "axios";
import { GifResponseType } from "../../dto/gif-response.dto";
import { GifList } from "../../components";
import InfiniteScroll from "react-infinite-scroller";
import FakeGifList from "../../components/lists/fake-gif-list/fake-gif-list";

const ResultPage: React.FC = () => {
  const q = useQuery().entries().next().value[1];
  const { getSearchGifs } = useGifApi();
  const [gifList, setGifList] = React.useState<GifResponseType[]>([]);
  const [count, setCount] = React.useState<number>(0);
  //todo it might affect the cards which have been rendered on the page /
  //todo I think I could push some fake gifs in the list which will render with skeleton /
  //todo once real data are fetched, using them to replace the fake ones/
  //todo then wrap gitCard component with React.memo to avoid unnecessary re-rendering /
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const queryString = React.useMemo(
    () => `q=${q}&api_key=${import.meta.env.VITE_GIPHY_API_KEY}`,
    [q]
  );

  const handleFetchMore = async (page: number) => {
    //** avoid repulicated results with initial rendering  */
    if (page > 1) {
      // setIsLoading(true);
      try {
        const { data } = await getSearchGifs(
          `${queryString}&offset=${(page - 1) * 50}`
        );
        setGifList((list) => [...list, ...data.data]);
        setCount(data.pagination.total_count);
      } catch (error) {
        if (isAxiosError(error)) {
          //todo display error here*/
        }
      } finally {
        // setIsLoading(false);
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
        //todo display error here/
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
        loader={<FakeGifList />}
      >
        <GifList list={gifList} />
      </InfiniteScroll>
    </div>
  );
};

export default ResultPage;
