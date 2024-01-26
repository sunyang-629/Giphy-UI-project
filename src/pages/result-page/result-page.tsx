import React from "react";
import useQuery from "../../hooks/useQuery";
import useGifApi from "../../apis/hooks/useGifApi";
import { GifListResponseDTO } from "../../dto/gif-response.dto";
import { GifList } from "../../components";
import InfiniteScroll from "react-infinite-scroller";
import FakeGifList from "../../components/lists/fake-gif-list/fake-gif-list";
import { useInfiniteQuery } from "react-query";
import uniqBy from "lodash/uniqBy";

const ResultPage: React.FC = () => {
  const q = useQuery().entries().next().value[1];
  const { getSearchGifs } = useGifApi();

  const queryString = React.useMemo(
    () => `q=${q}&api_key=${import.meta.env.VITE_GIPHY_API_KEY}`,
    [q]
  );

  const fetchSearchGifs = async ({ pageParam = 0 }) => {
    const { data } = await getSearchGifs(
      `${queryString}&offset=${pageParam * 50}`
    );
    return data;
  };

  const {
    data: gifList,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery<GifListResponseDTO, Error>({
    queryKey: ["resultGifs", q],
    queryFn: fetchSearchGifs,
    getNextPageParam: (LastPage, allPages) => {
      if (LastPage.pagination.offset < LastPage.pagination.total_count)
        return allPages.length + 1;
    },
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="results-page">
      <InfiniteScroll
        pageStart={0}
        loadMore={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<FakeGifList />}
      >
        <GifList
          list={uniqBy(
            [...(gifList?.pages ?? [])].flatMap((l) => l.data),
            "id"
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ResultPage;
