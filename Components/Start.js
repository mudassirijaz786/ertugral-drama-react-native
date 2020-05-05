//import
import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground, Linking } from "react-native";
import { Button } from "react-native-elements";
import { AdMobBanner } from "expo-ads-admob";

//class
export default class Main extends Component {
  //header
  static navigationOptions = {
    title: "Ertugral",
    headerStyle: { backgroundColor: "#9d08a1" },
    headerTintColor: "#fff",
    headerTitleStyle: { color: "#fff" },
  };

  //rendering
  render() {
    return (
      <ImageBackground
        blurRadius={1}
        source={require("../assets/bg.jpeg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Button
            buttonStyle={{
              marginTop: 100,
              width: 100,
              backgroundColor: "#9d08a1",
            }}
            title="Watch now"
            onPress={() => this.props.navigation.navigate("Seasons")}
          />

          <Button
            buttonStyle={{
              marginTop: 20,
              width: 80,
            }}
            titleStyle={{ color: "white" }}
            title="Rate us"
            type="outline"
            onPress={() =>
              Linking.openURL("market://details?id=" + "Application.identifier")
            }
          />

          <AdMobBanner
            style={styles.ad}
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            servePersonalizedAds={true}
            onDidFailToReceiveAdWithError={() => bannerError}
          />
        </View>
      </ImageBackground>
    );
  }
}

//styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  button: {
    marginTop: 30,
    borderRadius: 40,
  },
  ad: {
    position: "absolute",
    bottom: 0,
  },
});
