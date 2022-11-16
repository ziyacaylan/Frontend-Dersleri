import React from "react";
import {
  Grid,
  Box,
  Link,
  GridItem,
  Button,
  Image,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
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
          <Box textAlign={"center"} height="28" mt={2}>
            <Link href="https://www.facebook.com" isExternal>
              <Button
                textAlign={"center"}
                p="4"
                m={2}
                height={50}
                colorScheme="orange"
                borderRadius="50%"
              >
                <FaFacebook />
              </Button>
            </Link>

            <Link href="https://twitter.com/home?lang=tr" isExternal>
              <Button
                colorScheme="orange"
                height={50}
                m={2}
                p="4"
                borderRadius="50%"
              >
                <FaTwitter />
              </Button>
            </Link>

            <Link href="https://www.linkedin.com/in/ziya-caylan/" isExternal>
              <Button
                colorScheme="orange"
                height={50}
                m={2}
                p="4"
                // leftIcon={}
                borderRadius="50%"
              >
                <FaLinkedin />
              </Button>
            </Link>

            <Link href="https://www.instagram.com/" isExternal>
              <Button
                colorScheme="orange"
                height={50}
                m={2}
                p="4"
                // leftIcon={}
                borderRadius="50%"
              >
                <FaInstagram />
              </Button>
            </Link>

            <Link
              href="https://www.youtube.com/channel/UC3ImwUNX-9aybLr4-XciMWg"
              isExternal
            >
              <Button
                colorScheme="orange"
                height={50}
                m={2}
                p="4"
                // leftIcon={}
                borderRadius="50%"
              >
                <FaYoutube />
              </Button>
            </Link>

            <Link href="https://tr.pinterest.com/zii_cyln/" isExternal>
              <Button
                colorScheme="orange"
                height={50}
                m={2}
                p="4"
                borderRadius="50%"
              >
                <FaPinterest />
              </Button>
            </Link>
          </Box>
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        w="100%"
        h="auto"
        minWidth={"200px"}
      >
        <GridItem w="100%" h="auto" bg="gray.600" my={6}>
          <Box textAlign={"center"} height="28" mt={6}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              fontSize="3xl"
              color={"pink"}
            >
              <Image src={Logo} boxSize="50px" objectFit="cover" />
              <Text>eCommerce</Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem w="100%" h="auto" bg="gray.600" my={6}>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            fontSize="3xl"
            color={"pink"}
            my={6}
          >
            <Box>
              <Text
                borderBottom="1px"
                borderColor={"orange"}
                color="orange"
                textAlign="center"
              >
                Hakkımızda
              </Text>
              <Link>
                <Heading as="h6" size="sm" color={"orange"} my="3">
                  Firma Bilgileri ve Hakkımızda
                </Heading>
              </Link>
              <Link>
                <Heading as="h6" size="sm" color={"orange"} my="3">
                  Gizlilik ve Güvenlik
                </Heading>
              </Link>
              <Link>
                <Heading as="h6" size="sm" color={"orange"} my="3">
                  Şartlar & Koşullar
                </Heading>
              </Link>
            </Box>
          </Box>
        </GridItem>
        <GridItem w="100%" h="10" bg="gray.600" my={6}>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            fontSize="3xl"
            color={"pink"}
            my={6}
          >
            <Box>
              <Text
                borderBottom="1px"
                borderColor={"orange"}
                color="orange"
                textAlign="center"
              >
                Müşteri Servisleri
              </Text>
              <Link>
                <Heading as="h6" size="sm" color={"orange"} my="3">
                  İletişim
                </Heading>
              </Link>
              <Link>
                <Heading as="h6" size="sm" color={"orange"} my="3">
                  Siparişlerim
                </Heading>
              </Link>
              <Link>
                <Heading as="h6" size="sm" color={"orange"} my="3">
                  Hesabım
                </Heading>
              </Link>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Divider mt="6" color={"white"} />

      <Text textAlign="center" mt="2" fontSize="16" p="20px 0" color={"white"}>
        Copyright 2022 © eCommerce | Developer by
        <a href="https://www.linkedin.com/in/ziya-caylan/" target="_blank">
          {" "}
          Ziya ÇAYLAN
        </a>
      </Text>
    </div>
  );
}

export default index;
