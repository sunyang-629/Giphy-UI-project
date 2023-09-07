import React from "react";
import useQuery from "../../hooks/useQuery";
import useGifApi from "../../apis/hooks/useGifApi";
import { isAxiosError } from "axios";
import { GifResponseType } from "../../dto/gif-response.dto";
import { GifList } from "../../components";

const ResultPage: React.FC = () => {
  const q = useQuery().entries().next().value[1];
  const { getSearchGifs } = useGifApi();
  const [gifList, setGifList] = React.useState<GifResponseType[]>([]);

  const fetchSearchResults = React.useCallback(async () => {
    try {
      const queryString = `q=${q}&api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
      }`;
      const { data } = await getSearchGifs(queryString);
      setGifList(data.data);
    } catch (error) {
      if (isAxiosError(error)) {
        //display error here
      }
    }
  }, [getSearchGifs, q]);

  React.useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  return (
    <div className="results-page">
      <GifList list={gifList} />
    </div>
  );
};

export default ResultPage;
