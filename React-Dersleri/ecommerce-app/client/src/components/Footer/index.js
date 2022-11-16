import React from "react";
import { Grid, Box, Text, GridItem, Button, VStack } from "@chakra-ui/react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import styles from "./styles.module.css";

function index() {
  return (
    <div className={styles.footer}>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="gray.600">
          <Box textAlign={"center"} height="28">
            {/* <VStack> */}
            <Button
              //   width="100%"
              textAlign={"center"}
              p="4"
              height={50}
              colorScheme="facebook"
              leftIcon={<FaFacebook p="10px" />}
              borderRadius="50%"
            ></Button>
            <Button
              //   width="100%"
              colorScheme="twitter"
              leftIcon={<FaTwitter />}
              borderRadius="50%"
              href="https://twitter.com/reeyhanyilmaz"
            ></Button>
            {/* </VStack> */}
          </Box>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="gray.600">
          {" "}
        </GridItem>
        <GridItem w="100%" h="10" bg="gray.600">
          {" "}
        </GridItem>
        <GridItem w="100%" h="10" bg="gray.600">
          {" "}
        </GridItem>
        <GridItem w="100%" h="10" bg="gray.600">
          {" "}
        </GridItem>
      </Grid>
    </div>
  );
}

export default index;
