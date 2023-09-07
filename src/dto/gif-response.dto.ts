export type GifResponseType = {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
};

export type GifListResponseDTO = {
  data: Array<GifResponseType>;
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
};
