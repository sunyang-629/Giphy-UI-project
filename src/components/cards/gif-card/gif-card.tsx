import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Skeleton } from "@mui/joy";
import { GifResponseType } from "../../../dto/gif-response.dto";
import useLocalStorage from "../../../hooks/useLocalStorage";
import LikeHeart from "./heart";

interface IGifCardProps {
  gif: GifResponseType;
}

const GifCard: React.FC<IGifCardProps> = ({ gif }) => {
  const [list, updateLikeList] = useLocalStorage<string[]>(
    "favourite_gif_list",
    []
  );

  const isFavouriteGif = list?.findIndex((l) => l === gif.id) !== -1;

  const [like, setLike] = React.useState<boolean>(isFavouriteGif);

  const handleClick = () => {
    // todo can't find the way to get the real-time list by hook
    const likeList = JSON.parse(
      localStorage.getItem("favourite_gif_list") || "[]"
    ) as string[];
    if (!like) {
      likeList?.push(gif.id);
      updateLikeList(likeList ?? []);
    } else {
      const newList = likeList?.filter((id) => id !== gif.id);
      updateLikeList(newList ?? []);
    }
    setLike(!like);
  };

  return (
    <Card sx={{ width: 320 }}>
      <div style={{ height: "1.4rem" }}>
        <LikeHeart onClick={handleClick} isLiked={like} />
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <Skeleton variant="overlay" loading={!gif.id}>
          <img
            src={gif.images.original.url}
            srcSet={gif.images.original.url}
            loading="lazy"
            alt={gif.id}
          />
        </Skeleton>
      </AspectRatio>
      <CardContent>
        <Typography level="body-sm">
          <Skeleton loading={!gif.id}>{gif.title}</Skeleton>
        </Typography>
      </CardContent>
    </Card>
  );
};

const GifCardMemo = React.memo(GifCard);

export default GifCardMemo;
