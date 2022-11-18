import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../contexts/BasketContext";

import styles from "./styles.module.css";

import moment from "moment";

function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, items } = useBasket();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  //console.log(data);
  // sepete ürün ekli mi ekli değil mi
  const findBasketItem = items.find((item) => item._id === product_id);
  //console.log(findBasketItem);
  const images = data.photos.map((url) => ({ original: url }));

  return (
    <Box
      mx={"20"}
      my="10"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <div className={styles.productContianer}>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"flex-start"}
        >
          <Box>
            <Button
              colorScheme={findBasketItem ? "pink" : "green"}
              onClick={() => addToBasket(data, findBasketItem)}
            >
              {findBasketItem ? "Remove from basket" : "Add to basket"}
            </Button>
            <Text as="h2" fontSize="2xl" mt={"5"}>
              {data.title}
            </Text>
          </Box>
          <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
        </Box>
        <Box margin="10">
          <ImageGallery items={images} />
        </Box>
        <Box w={"full"} bg="gray.300" p={"2"} my="3">
          <Text fontSize={"2xl"}>AÇIKLAMA</Text>
        </Box>
        <p>{data.description}</p>
      </div>
    </Box>
  );
}

export default ProductDetail;
