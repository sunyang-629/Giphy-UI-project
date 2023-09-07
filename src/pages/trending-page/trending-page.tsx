import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import { GifListResponseDTO } from "../../dto/gif-response.dto";
import { GifList } from "./trending-page-components";

const TrendingPage: React.FC = () => {
  const { data } = useLoaderData() as GifListResponseDTO;
  console.log({ data });
  return (
    <div className="trending-page">
      <GifList list={data} />
    </div>
  );
};

export const TrendingPageLoader: LoaderFunction = async () => {
  const result = await axiosInstance.get<GifListResponseDTO>(
    `trending?api_key=br6HzEPclYcZ80WKzGzUjHy17In8Egkv`
  );
  return result.data;
};

export default TrendingPage;
