import styles from "./styles.module.css";
import * as React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import ECommerce from "../../assets/e-commerce.png";

import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { items } = useBasket();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  //console.log(loggedIn);
  return (
    <Box
      as="section"
      pb={{
        base: "12",
        md: "24",
      }}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container
          py={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack spacing="10" justify="space-between">
            <Link to="/">
              <Box width={"75px"}>
                <Image
                  // boxSize="70px"
                  width={"75px"}
                  height="50px"
                  borderRadius="8px"
                  objectFit="cover"
                  src={ECommerce}
                  alt="eCommerce"
                />
              </Box>
            </Link>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {["Ana Sayfa", "Pricing", "Resources", "Support"].map(
                    (item) => (
                      <Button key={item}>{item}</Button>
                    )
                  )}
                </ButtonGroup>
                <HStack spacing="3">
                  <Flex>
                    <Button variant="ghost">Sign in</Button>
                    <Button variant="pink" colorScheme="pink">
                      Sign up
                    </Button>
                  </Flex>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

export default Navbar;

/* <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}></div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/product">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/product">Tüm Kategoriler</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {!loggedIn && (
            <>
              <Link to="/signin">
                <Button colorScheme="pink">Login</Button>
              </Link>
              <Link to="/signup">
                <Button colorScheme="pink">Register</Button>
              </Link>
            </>
          )}
          {loggedIn && (
            <>
              {items.length > 0 && (
                <Link to={"/basket"}>
                  <Button colorScheme={"pink"} variant={"outline"}>
                    Basket ({items.length})
                  </Button>
                </Link>
              )}

              {user?.role === "admin" && (
                <Link to="/admin">
                  <Button colorScheme="pink" variant="ghost">
                    Admin
                  </Button>
                </Link>
              )}

              <Link to="/profile">
                <Button colorScheme="orange">Profile</Button>
              </Link>
            </>
          )}
        </div>
      </nav> */
