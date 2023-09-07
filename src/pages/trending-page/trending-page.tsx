import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import { GifListResponseDTO } from "../../dto/gif-response.dto";
import { GifList } from "../../components";

const TrendingPage: React.FC = () => {
  const { data } = useLoaderData() as GifListResponseDTO;
  console.log({ data });
  return (
    <div className="trending-page">
      <GifList list={data} />
    </div>
  );
};

// ** don't need to handle the error here  /
//** it will be handled in react router's error page */
export const TrendingPageLoader: LoaderFunction = async () => {
  const result = await axiosInstance.get<GifListResponseDTO>(
    `trending?api_key=br6HzEPclYcZ80WKzGzUjHy17In8Egkv`
  );
  return result.data;
};

export default TrendingPage;
