import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductList, fetchProduct } from "../../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

import moment from "moment";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  console.log(data);

  const images = data.photos.map((url) => ({ original: url }));

  return (
    <div>
      <Button colorScheme="pink">Add To Basket</Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
