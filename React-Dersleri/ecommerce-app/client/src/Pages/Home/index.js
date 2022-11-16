import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Text, Grid, Button, Image } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <Box className={styles.container}>
      <div className={styles.homePageCarouselBox}>
        <Carousel
          autoPlay="true"
          // emulateTouch="true"
          infiniteLoop="true"
          showArrows="true"
          className={styles.homePageCarousel}
        >
          <div>
            <img
              src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 1"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 2"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 3"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4050387/pexels-photo-4050387.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 4"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 5"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 6"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 7"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 8"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="_image 9"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      {/* section 2 start */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        mt="20"
        mb={6}
        // height="400px"
        border="solid 1px #e0e0e0"
        borderRadius="8px"
        paddingTop="10px"
      >
        <Image
          src="https://img.freepik.com/free-photo/printing-victorian-house_1048-1588.jpg?w=900&t=st=1668451213~exp=1668451813~hmac=e1642d6e3685e01fcb70a6e03e1dc2ef5d44bdb6b0bf32fb68df4b679b5ea2f1"
          alt="homeImage"
          boxSize="450px"
          objectFit="cover"
          p={"2"}
          className={styles.grow}
        />
        <Image
          src="https://img.freepik.com/free-photo/metal-3d-printer-with-abstract-lines_1048-1480.jpg?w=900&t=st=1668451219~exp=1668451819~hmac=3c9d8928886e383b9f46a9b10459d5ebdfc0277ab51b286283d5ebaf52f04def"
          alt="homeImage"
          boxSize="450px"
          objectFit="cover"
          p={"2"}
          className={styles.grow}
        />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box fontSize="2xl" textAlign="center">
            <Box>EN ÇOK </Box>
            <Box m={2}>SATANLAR</Box>
            <Box m={2}>BİZDE</Box>
            <Button
              m={2}
              colorScheme={"teal"}
              color="white"
              borderRadius="50px"
            >
              İncele
            </Button>
          </Box>
        </Box>
      </Grid>
      {/* section 2 end */}

      {/* section 2 start */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        mt="20"
        // height="400px"
        border="solid 1px #e0e0e0"
        borderRadius="8px"
        paddingTop="10px"
      >
        <Image
          src="https://img.freepik.com/premium-photo/coil-with-plastic-printing-3d-printer_457211-2078.jpg?w=1060"
          alt="homeImage"
          p={2}
          className={styles.grow}
        />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box fontSize="2xl" textAlign="center">
            <Box>EN İYİ</Box>
            <Box m={2}>FİLAMENTLER</Box>
            <Box m={2}>BİZDE</Box>
            <Button
              m={2}
              colorScheme={"teal"}
              color="white"
              borderRadius="50px"
            >
              İncele
            </Button>
          </Box>
        </Box>
        <Image
          src="https://media.istockphoto.com/id/1363103747/tr/foto%C4%9Fraf/set-of-rolls-of-colored-plastic-for-3d-pen.jpg?s=1024x1024&w=is&k=20&c=pcjCv8KwYjWEe3HqUVUKGV-ph4fC-gJk9CNVkJVrwpo="
          alt="homeImage"
          p={2}
          className={styles.grow}
        />
      </Grid>
      {/* section 2 end */}

      {/* section 3 start */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        mt="20"
        // height="400px"
        border="solid 1px #e0e0e0"
        borderRadius="8px"
        paddingTop="10px"
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box fontSize="2xl" textAlign="center">
            <Box>EN KALİTELİ</Box>
            <Box m={2}>BASKI HİZMETLERİ</Box>
            <Box m={2}>BİZDE</Box>
            <Button
              m={2}
              colorScheme={"teal"}
              color="white"
              borderRadius="50px"
            >
              İncele
            </Button>
          </Box>
        </Box>
        <Image
          src="https://img.freepik.com/premium-photo/prototype-model-helicopter-printed-3d-printer-closeup_507658-5633.jpg?w=1060"
          alt="homeImage"
          p={2}
          className={styles.grow}
        />

        <Image
          src="https://img.freepik.com/premium-photo/objects-printed-d-printer-from-plastic-closeup-new-d-printing-technology_507658-4865.jpg?w=1380"
          alt="homeImage"
          p={2}
          className={styles.grow}
        />
      </Grid>
      {/* section 3 end */}

      {/* section 4 start */}
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="20" mb={"10"}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box fontSize="lg">
            3d baskı hayalinizdeki tasarımları elinizde tutabileceğiniz gerçek
            nesnelere dönüştüren baskı çeşidi. Tasarımınızı dilerseniz kendiniz
            çizip bize ulaştırın ya da hayalinizdekini biz çizelim. 3D baskı
            hizmeti alabilmek için STL formatında kayıt edilmiş çizimlere sahip
            olmanız gerekir. Eğer 3d çiziminiz yok ve yaptırmak istiyorsanız 3d
            Baskı çizim - modelleme sayfamızdan detaylı bilgilere
            ulaşabilirsiniz.Geleneksel fotoğrafçılık anlayışında sanal ortamdaki
            resmin baskısı yapıldığında iki boyutlu olarak çıkar. Bununla
            birlikte, baskı teknolojilerinin gelişmesiyle 3D baskı alınabiliyor.
            Bu sayede, sanal ortamdaki özel formatta hazırlanmış herhangi bir
            resmin, heykel gibi belli oranda birebir kopyası elde edilir.
          </Box>
        </Box>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4257.446478387751!2d29.178395397106858!3d41.014988106369394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacee228283919%3A0xe975904936db8bd9!2sSur%20Yap%C4%B1%20Metrogarden%20AVM!5e0!3m2!1str!2str!4v1668516768594!5m2!1str!2str"
            width="100%"
            height="400"
            title="İstanbul"
            loading="lazy"
            // borderRadius="8px"
          ></iframe>
        </Box>
      </Grid>
      {/* section 4 end */}
    </Box>
  );
}

export default Home;
