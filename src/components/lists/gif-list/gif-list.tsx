import React from "react";
import { GifResponseType } from "../../../dto/gif-response.dto";
import { Grid } from "@mui/joy";
import { GifCard } from "../..";

export interface IGifListProps {
  list: GifResponseType[];
}

const GifList: React.FC<IGifListProps> = ({ list }) => {
  return (
    <Grid container>
      {list.map((gif) => (
        <Grid
          key={gif.id}
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

export default GifList;
