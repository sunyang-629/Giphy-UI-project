import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import {
  GifListResponseDTO,
  GifResponseType,
} from "../../dto/gif-response.dto";
import { GifList } from "../../components";
import InfiniteScroll from "react-infinite-scroller";
import useGifApi from "../../apis/hooks/useGifApi";
import { isAxiosError } from "axios";
import _ from "lodash";

const TrendingPage: React.FC = () => {
  const { data } = useLoaderData() as GifListResponseDTO;
  const [gifList, setGifList] = React.useState<GifResponseType[]>(data);
  const [count, setCount] = React.useState<number>(50);
  console.log(gifList.length, count);

  const { getTrendingGifs } = useGifApi();

  const handleFetchMore = async (page: number) => {
    try {
      const { data } = await getTrendingGifs(
        `api_key=${import.meta.env.VITE_GIPHY_API_KEY}&&offset=${page * 50}`
      );
      //** duplicated results existed in the trending api */
      //** filter them by their ids */
      const gifUniq = _.uniqBy([...gifList, ...data.data], "id");
      setGifList(gifUniq);
      setCount(data.pagination.total_count);
    } catch (error) {
      if (isAxiosError(error)) {
        //display error here
      }
    }
  };

  return (
    <div className="trending-page">
      <InfiniteScroll
        pageStart={0}
        loadMore={handleFetchMore}
        hasMore={gifList.length <= count || true}
      >
        <GifList list={gifList} />
      </InfiniteScroll>
    </div>
  );
};

// ** don't need to handle the error here  /
//** it will be handled in react router's error page */
export const TrendingPageLoader: LoaderFunction = async () => {
  const result = await axiosInstance.get<GifListResponseDTO>(
    `trending?api_key=${import.meta.env.VITE_GIPHY_API_KEY}`
  );
  return result.data;
};

export default TrendingPage;
