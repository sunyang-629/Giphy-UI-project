import React from "react";
//packages
import InfiniteScroll from "react-infinite-scroller";
import uniqBy from "lodash/uniqBy";
// types
import { GifListResponseDTO } from "../../dto/gif-response.dto";
// UI components
import { GifList } from "../../components";
// hooks
import useGifApi from "../../apis/hooks/useGifApi";
import FakeGifList from "../../components/lists/fake-gif-list/fake-gif-list";
import { useInfiniteQuery } from "react-query";

const TrendingPage: React.FC = () => {
  const { getTrendingGifs } = useGifApi();

  const fetchTrendingGifs = async ({ pageParam = 0 }) => {
    const queryString = `api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&&offset=${pageParam * 50}`;
    const { data } = await getTrendingGifs(queryString);
    return data;
  };

  const {
    data: gifList,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery<GifListResponseDTO, Error>({
    queryKey: ["trendingGifs"],
    queryFn: fetchTrendingGifs,
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

export default TrendingPage;
