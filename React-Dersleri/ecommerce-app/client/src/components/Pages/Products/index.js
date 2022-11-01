import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../../api";

import Card from "../../Card";

function Products() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  //console.log("data", data);
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {data.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default Products;
