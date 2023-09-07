import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
// import { Skeleton } from "@mui/joy";
import { GifResponseType } from "../../../dto/gif-response.dto";

interface IGifCardProps {
  gif: GifResponseType;
}

const GifCard: React.FC<IGifCardProps> = ({ gif }) => {
  return (
    <Card sx={{ width: 320 }}>
      <div style={{ height: "1rem" }}>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        {/* <Skeleton variant="overlay" loading={isLoading}> */}
        <img
          src={gif.images.original.url}
          srcSet={gif.images.original.url}
          loading="lazy"
          alt={gif.id}
        />
        {/* </Skeleton> */}
      </AspectRatio>
      <CardContent>
        <Typography level="body-sm">
          {/* <Skeleton loading={isLoading}> */}
          {gif.title}
          {/* </Skeleton> */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GifCard;
