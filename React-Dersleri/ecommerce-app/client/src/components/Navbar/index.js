import {
  Box,
  Button,
  Flex,
  Text,
  HStack,
  Image,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Logo from "../../assets/Logo.png";
import styles from "./styles.module.css";

import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { items } = useBasket();

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //console.log(loggedIn);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isDesktop]);

  const handleOpenMenu = function () {
    if (isMenuOpen) {
      return (
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Link to="/">
            <Button
              variant="ghost"
              color={"gray"}
              _hover={{
                // background: "white",
                color: "teal.500",
              }}
            >
              Anasayfa
            </Button>
          </Link>
          <Link to="/product">
            <Button
              variant="ghost"
              color={"gray"}
              _hover={{
                // background: "white",
                color: "teal.500",
              }}
            >
              Ürünler
            </Button>
          </Link>
          {/* <Link to="/"> */}
          {/* <Button
              variant="ghost"
              color={"gray"}
              _hover={{
                // background: "white",
                color: "teal.500",
              }}
            >
              Kategoriler
            </Button> */}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              color={"gray"}
            >
              Kategoriler
            </MenuButton>
            <MenuList>
              <MenuItem>3D Yazıcılar</MenuItem>
              <MenuItem>Filamentler</MenuItem>
              <MenuItem>Multikopterler</MenuItem>
              <MenuItem>RC Arabalar</MenuItem>
            </MenuList>
          </Menu>
          {/* </Link> */}

          {!loggedIn && (
            <>
              <Link to="/signin">
                <Button colorScheme="pink" my={1}>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button colorScheme="pink" my={1}>
                  Register
                </Button>
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
                  <Button colorScheme="pink" variant="ghost" my={1}>
                    Admin
                  </Button>
                </Link>
              )}

              <Link to="/profile">
                <Button colorScheme="orange" my={1}>
                  Profile
                </Button>
              </Link>
            </>
          )}
        </Box>
      );
    }
  };
  return (
    <div className={styles.navContainer}>
      <Box
        as="section"
        pb={{
          base: "4",
          md: "3",
        }}
        // as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("md", "sm-dark")}
      >
        <Box className={styles.nav}>
          <HStack spacing="10" justify="space-between">
            <Link to={"/"}>
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
                fontSize="3xl"
                color={"pink"}
              >
                <Image src={Logo} boxSize="50px" objectFit="cover" />
                <Text>eCommerce</Text>
              </Box>
            </Link>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <Box>
                  <Link to="/">
                    <Button
                      variant="ghost"
                      color={"gray"}
                      _hover={{
                        // background: "white",
                        color: "teal.500",
                      }}
                    >
                      Anasayfa
                    </Button>
                  </Link>
                  <Link to="/product">
                    <Button
                      variant="ghost"
                      color={"gray"}
                      _hover={{
                        // background: "white",
                        color: "teal.500",
                      }}
                    >
                      Ürünler
                    </Button>
                  </Link>
                  {/* <Link to="/"> */}
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      color={"gray"}
                    >
                      Kategoriler
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Fotoğraf Makineleri</MenuItem>
                      <MenuItem>Multikopterler</MenuItem>
                      <MenuItem>3D Yazıcılar</MenuItem>
                      <MenuItem>Filamentler</MenuItem>
                    </MenuList>
                  </Menu>
                  {/* </Link> */}
                </Box>
                <HStack spacing="3">
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
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
                onClick={() =>
                  isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
                }
              />
            )}
          </HStack>
          {handleOpenMenu()}
        </Box>
      </Box>
    </div>
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
