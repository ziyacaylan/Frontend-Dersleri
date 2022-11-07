import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Text, Grid, Button } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Box className={styles.homePageCarouselBox}>
        <Carousel
          autoPlay="true"
          emulateTouch="true"
          infiniteLoop="true"
          showArrows="true"
          className={styles.homePageCarousel}
        >
          <div>
            <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/4050387/pexels-photo-4050387.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Box>
    </div>
  );
}

export default Home;
