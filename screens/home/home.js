import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "native-base";
import userAction from "../../store/user/userActions";
import Carousel from "react-native-snap-carousel";
import ENTRIES1 from "../../static/entries";
import SliderEntry from "../../components/home/SliderItem";
import { sliderWidth, itemWidth } from "../../styles/global.style";

const SLIDER_1_FIRST_ITEM = 0;

const Home = () => {
  const [slider, setSlider] = useState(SLIDER_1_FIRST_ITEM);
  const dispatch = useDispatch();

  const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  };

  const logOut = () => {
    dispatch({
      type: userAction.LOGOUT_ACTION,
    });
  };

  return (
    <Box>
      <Carousel
        data={ENTRIES1}
        renderItem={_renderItemWithParallax}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={SLIDER_1_FIRST_ITEM}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => setSlider({ slider1ActiveSlide: index })}
        slideStyle={{ height: "auto" }}
        containerCustomStyle={{ width: "auto" }}
      />
      <Box>
        <Button onPress={logOut}>Logout</Button>
      </Box>
    </Box>
  );
};

export default Home;
