import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";

//contexts
import { useBasket } from "../../contexts/BasketContext";

function Card({ item }) {
  const { addToBasket, items } = useBasket();
  const findBasketItem = items.find(
    (basket_item) => basket_item._id === item._id
  );
  return (
    <div>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to={`/product/${item._id}`}>
          <Image src={item.photos[0]} alt="product" loading="lazy" />
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {moment(item.createdAt).format("DD/MM/YYYY")}
            </Box>
            <Box marginTop="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {item.title}
            </Box>
            <Box>{item.price} TL</Box>
          </Box>
        </Link>
        <Button
          colorScheme={findBasketItem ? "pink" : "green"}
          variant="solid"
          onClick={() => addToBasket(item, findBasketItem)}
        >
          {findBasketItem ? "Remove From Basket" : "Add To Basket"}
        </Button>
      </Box>
    </div>
  );
}

export default Card;
