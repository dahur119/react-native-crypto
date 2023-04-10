import React from "react";

import { View, StyleSheet, Text } from "react-native";

export const BookBuy = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.assets}>Learn</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>How to buy Cryptocurrency</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>How to buy Swap</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    width: "48%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  leftContent: {
    flex: 1,
  },
  left: {
    paddingTop: 15,
  },
  rightContent: {
    flex: 1,
    alignItems: "flex-end",
  },
  rightCircle: {
    flexDirection: "column",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  assets: {
    fontWeight: "bold",
    fontSize: 18,
  },
  balance: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
