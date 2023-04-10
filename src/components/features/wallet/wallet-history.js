import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Wallet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Text style={styles.name}>current wallet balance</Text>

        <Text style={styles.description}>$25,3720</Text>
        <View style={styles.signal}>
          <Text style={styles.marketprice}>Btc:0.003</Text>
          <Text style={styles.marketcap}>+32.0</Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <View style={styles.roundedCircle}>
          <Text style={styles.circle}>circle</Text>
          <Text>history</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftView: {
    flex: 1,
  },
  rightView: {
    flex: 1,
    alignItems: "flex-end",
  },
  roundedCircle: {
    flexDirection: "column",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#333",
  },
  name: {
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  signal: {
    flexDirection: "row",
  },
  marketprice: {
    marginRight: 8,
  },
  marketcap: {
    color: "green",
  },
});
