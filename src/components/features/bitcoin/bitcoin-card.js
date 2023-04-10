import React from "react";

import { View, Text, StyleSheet } from "react-native";

export const BitcoinCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>current wallet balance</Text>
      <Text style={styles.description}>$25,3720</Text>
      <View style={styles.signal}>
        <Text style={styles.marketprice}>Btc:0.003</Text>
        <Text style={styles.marketcap}>+32.0</Text>
      </View>
      <View style={styles.transaction}>
        <View style={styles.transcationbuy}>
          <View style={styles.send}></View>
          <Text>send</Text>
        </View>
        <View style={styles.transcationbuy}>
          <View style={styles.send}></View>
          <Text>receive</Text>
        </View>

        <View style={styles.transcationbuy}>
          <View style={styles.send}></View>
          <Text>sent</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#666",
    paddingBottom: 5,
  },
  signal: {
    flexDirection: "row",
    alignItems: "center",
  },
  marketprice: {
    marginRight: 10,
  },
  marketcap: {
    marginRight: 10,
  },
  transaction: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  send: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  receive: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  buy: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  transcationtext: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  transcationbuy: {
    flexDirection: "column",
    alignItems: "center",
  },
});
