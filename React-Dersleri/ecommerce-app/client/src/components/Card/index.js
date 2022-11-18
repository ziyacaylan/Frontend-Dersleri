import React from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
import styles from "./styles.module.css";

//contexts
import { useBasket } from "../../contexts/BasketContext";

function Card({ item }) {
  const { addToBasket, items } = useBasket();
  const findBasketItem = items.find(
    (basket_item) => basket_item._id === item._id
  );
  return (
    <div className={styles.card}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="3"
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        boxShadow="dark-lg"
      >
        <Link to={`/product/${item._id}`}>
          <Image
            boxSize="150px"
            objectFit="cover"
            src={item.photos[0]}
            alt="product"
            loading="lazy"
            w={"96"}
            h={"72"}
            mt="3"
            borderRadius="15px"
          />
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            p="3"
          >
            <Box>
              <Box d="flex" alignItems="baseline">
                {moment(item.createdAt).format("DD/MM/YYYY")}
              </Box>
              <Box
                marginTop="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                fontSize="2xl"
              >
                {item.title}
              </Box>
            </Box>
            <Text color="blue.600" fontSize="2xl">
              {item.price} TL
            </Text>
          </Box>
        </Link>
        <Button
          colorScheme={findBasketItem ? "pink" : "green"}
          width="100%"
          m={"1"}
          p="6"
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
