import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const BuyNews = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.assets}>News</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.rightContent}>
          <Text>$100</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.989</Text>
          <Text>0.00</Text>
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
    backgroundColor: "#fff",
    padding: 11,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  leftContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  rightContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
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
