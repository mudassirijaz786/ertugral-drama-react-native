import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import * as FileSystem from "expo-file-system";

import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";
const { width, height } = Dimensions.get("screen");
import { WebView } from "react-native-webview";

export default function SingleEpisode({ navigation }) {
  const [videoUrl] = useState(navigation.getParam("url"));

  useEffect(() => {
    async function fetchAd() {
      await AdMobInterstitial.setAdUnitID(
        "ca-app-pub-3940256099942544/1033173712"
      );
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    }
    fetchAd;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AdMobBanner
        style={styles.ad}
        bannerSize="smartBannerLandscape"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        servePersonalizedAds={true}
      />
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: videoUrl }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: width,
    height: height / 3,
  },
  ad: {
    marginBottom: 30,
  },
});
