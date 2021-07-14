import React, { Component } from "react";
import { View, Image, TouchableOpacity, Linking, Platform } from "react-native";
import PropTypes from "prop-types";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "../../styles/global.style";

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };

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

  goToLink() {
    const {
      data: { link },
    } = this.props;

    if (link != undefined) {
      Linking.openURL(link);
    } else {
      if (Platform.OS === "android") {
        Linking.openURL("google.navigation:q=100+101");
      } else {
        Linking.openURL("maps://app?saddr=100+101&daddr=100+102");
      }
    }
  }

  render() {
    let openLink;
    const {
      data: { link },
    } = this.props;

    if (link != undefined) {
      openLink = link;
    } else {
      if (Platform.OS === "android") {
        openLink = "google.navigation:q=100+101";
      } else {
        openLink = "maps://app?saddr=100+101&daddr=100+102";
      }
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => Linking.openURL(openLink)}
      >
        <View style={styles.shadow} />
        <View style={[styles.imageContainer]}>{this.image}</View>
      </TouchableOpacity>
    );
  }
}
