import React from "react";
import useAxios from "../../hooks/useAxios";
import { AxiosRequestConfig } from "axios";
import { GifListResponseDTO } from "../../dto/gif-response.dto";

const useGifApi = () => {
  const { get } = useAxios();

  const getTrendingGifs = React.useCallback(
    async (queryString: string, config?: AxiosRequestConfig) =>
      get<GifListResponseDTO>(`trending?${queryString}`, config),
    [get]
  );

  const getSearchGifs = React.useCallback(
    async (queryString: string, config?: AxiosRequestConfig) => {
      return get<GifListResponseDTO>(`search?${queryString}`, config);
    },
    [get]
  );

  return { getTrendingGifs, getSearchGifs };
};

export default useGifApi;
