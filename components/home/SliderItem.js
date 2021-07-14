import React, { Component } from "react";
import { View, Image, TouchableOpacity, Linking, Platform } from "react-native";
import PropTypes from "prop-types";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "../../styles/global.style";
import ImageView from "react-native-image-view";

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      isImageViewVisible: false,
    };
  }

  get image() {
    const {
      data: { illustration },
      parallax,
      parallaxProps,
      even,
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {},
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.25)"}
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: illustration }} style={styles.image} />
    );
  }

  openLink(id) {
    if (id == 1) {
      Linking.openURL("https://www.thelivingos.com/");
    } else if (id == 2) {
      if (Platform.OS === "android") {
        Linking.openURL("google.navigation:q=100+101");
      } else {
        Linking.openURL("maps://app?saddr=100+101&daddr=100+102");
      }
    } else if (id == 3) {
      this.setState({
        isImageViewVisible: true,
      });
    }
  }

  render() {
    const {
      data: { link, id },
    } = this.props;

    const images = [
      {
        source: {
          uri: "https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg",
        },
        width: 806,
        height: 720,
      },
    ];

    return (
      <View>
        <ImageView
          images={images}
          imageIndex={0}
          isVisible={this.state.isImageViewVisible}
          onClose={() => this.setState({ isImageViewVisible: false })}
          animationType="fade"
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.slideInnerContainer}
          onPress={() => {
            this.openLink(id);
          }}
        >
          <View style={styles.shadow} />
          <View style={[styles.imageContainer]}>{this.image}</View>
        </TouchableOpacity>
      </View>
    );
  }
}
