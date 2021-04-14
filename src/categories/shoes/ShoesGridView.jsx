import React from "react";
import Grid from "../../helper/Grid";
import GridView from "../../helper/GridView";
import { data } from "../../dummy";

export default function ShoesGridView() {
  return (
    <Grid>
      {data.categories.shoes.map((list) => (
        <GridView item={list} />
      ))}
    </Grid>
  );
}
