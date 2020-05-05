import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import { Card } from "react-native-elements";
import { StyleSheet } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
class Episodes extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Episodes",
    headerStyle: { backgroundColor: "#9d08a1" },
    headerTintColor: "#fff",
    headerTitleStyle: { color: "#fff" },
  };

  onPress(item) {
    this.props.navigation.navigate("Play", { url: item.image });
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
        <Card
          containerStyle={{
            elevation: 0,
          }}
          key={item.id}
        >
          <Text style={{ marginBottom: 10, textAlign: "center" }}>
            Episode # {item.episode}
          </Text>
          <TouchableOpacity>
            <Button
              color="#9d08a1"
              title="Play"
              onPress={() => {
                this.onPress(item);
              }}
            />
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  render() {
    const season = this.props.navigation.getParam("season");
    console.log("episode of clicked season", season);
    return (
      <ImageBackground
        blurRadius={1}
        source={require("../assets/bg.jpeg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 36,
              textAlign: "center",
              color: "white",
              marginTop: 10,
            }}
          >
            Episodes
          </Text>

          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              color: "#9d08a1",
              marginTop: 10,
            }}
          >
            Total {season.length} Episodes
          </Text>
          <FlatList
            data={season}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <AdMobBanner
          style={styles.ad}
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={() => bannerError}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  ad: {
    marginTop: 30,
  },
});

export default Episodes;
