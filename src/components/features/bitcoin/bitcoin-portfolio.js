import React from "react";

import { View, StyleSheet, Text, ScrollView } from "react-native";

export const BitcoinPortFolio = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View>
            <Text>Bitcoin</Text>
            <Text>Btc</Text>
          </View>
          <View style={styles.left}>
            <Text>3.20015</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.rightCircle}>
            <View style={styles.circle}></View>
            <Text>2.54%</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View>
            <Text>Ethererum</Text>
            <Text>Eth</Text>
          </View>
          <View style={styles.left}>
            <Text>12.43500</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.rightCircle}>
            <View style={styles.circle}></View>
            <Text>0.54%</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View>
            <Text>Ethererum</Text>
            <Text>Eth</Text>
          </View>
          <View style={styles.left}>
            <Text>12.43500</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.rightCircle}>
            <View style={styles.circle}></View>
            <Text>0.54%</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View>
            <Text>Ethererum</Text>
            <Text>Eth</Text>
          </View>
          <View style={styles.left}>
            <Text>12.43500</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.rightCircle}>
            <View style={styles.circle}></View>
            <Text>0.54%</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View>
            <Text>Ethererum</Text>
            <Text>Eth</Text>
          </View>
          <View style={styles.left}>
            <Text>12.43500</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.rightCircle}>
            <View style={styles.circle}></View>
            <Text>0.54%</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
});
