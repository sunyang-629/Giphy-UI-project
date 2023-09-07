import React from "react";
import { GifResponseType } from "../../../../dto/gif-response.dto";

export interface IGifListProps {
  list: GifResponseType[];
}

const GifList: React.FC<IGifListProps> = ({ list }) => {
  return <div>{list.length}</div>;
};

export default GifList;
