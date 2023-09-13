import React from "react";
import { GifResponseType } from "../../../dto/gif-response.dto";
import { Grid } from "@mui/joy";
import { GifCard } from "../..";
import uniqueId from "lodash/uniqueId";

const fakeGifs: GifResponseType[] = Array(6).fill({
  id: "",
  title: "fake gif‘s title to take space",
  images: {
    original: {
      url: "",
    },
  },
});

const FakeGifList: React.FC = () => {
  return (
    <Grid container>
      {fakeGifs.map((gif) => (
        <Grid
          key={uniqueId()}
          xs={12}
          md={6}
          lg={4}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", marginY: 2 }}
        >
          <GifCard gif={gif} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FakeGifList;
