import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlaceDetailScreen(props) {
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
}

PlaceDetailScreen.navigationOptions = (navData) => {
  const placeTitle = navData.navigation.getParam("placeTitle");
  return {
    headerTitle: placeTitle,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
