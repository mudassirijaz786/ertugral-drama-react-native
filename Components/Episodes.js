//import
import React, { Component } from "react";
import { Card } from "react-native-elements";
import { StyleSheet } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
//class
class Episodes extends Component {
  constructor(props) {
    super(props);
  }

  //screen header
  static navigationOptions = {
    title: "Episodes",
    headerStyle: { backgroundColor: "#9d08a1" },
    headerTintColor: "#fff",
    headerTitleStyle: { color: "#fff" },
  };

  //event to Play screen
  onPress(item) {
    this.props.navigation.navigate("Play", { url: item.image });
  }

  //rendering episodes
  renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
        <Card
          containerStyle={{
            elevation: 0,
          }}
          key={index}
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

  //rendering
  render() {
    const season = this.props.navigation.getParam("season");
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

//styling
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

//exporting class
export default Episodes;
