//importing
import React, { Component } from "react";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";
import Axios from "axios";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ImageBackground,
} from "react-native";

//class
export default class Seasons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: [],
    };
  }

  //header
  static navigationOptions = {
    title: "Seasons",
    headerStyle: { backgroundColor: "#9d08a1" },
    headerTintColor: "#fff",
    headerTitleStyle: { color: "#fff" },
  };

  //event to Episode screen
  onPress(item) {
    this.props.navigation.navigate("Episodes", { season: item.data });
  }

  //AdMobInterstitial
  async componentDidMount() {
    this.loadData();
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-3940256099942544/1033173712"
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  //loading data from backend
  loadData = async () => {
    await Axios({
      url: "https://games-io-8cf9b.firebaseio.com/Seasons%20.json",
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        this.setState({
          seasons: response.data.seasons,
        });
      })
      .catch((error) => {});
  };

  //rendering Seasons
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
        <Card
          key={item.seasonId}
          image={require("../assets/card.jpeg")}
          containerStyle={{
            elevation: 0,
          }}
        >
          <Text style={{ marginBottom: 10, textAlign: "center" }}>
            Total Episodes: {item.data.length}
          </Text>
          <Text style={{ marginBottom: 10, textAlign: "center" }}>
            Season # {item.seasonId}
          </Text>
          <TouchableOpacity>
            <Button
              color="#9d08a1"
              title="See Episodes"
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
            Seasons
          </Text>
          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              color: "#9d08a1",
              marginTop: 10,
            }}
          >
            Total {this.state.seasons.length} Seasons
          </Text>
          <FlatList
            data={this.state.seasons}
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
