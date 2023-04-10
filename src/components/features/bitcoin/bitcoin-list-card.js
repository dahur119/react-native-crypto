import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const BitcoinCardList = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#333",
  },
});
