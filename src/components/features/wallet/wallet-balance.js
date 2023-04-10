import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const WalletBalance = () => {
  return (
    <ScrollView horizontal={false}>
      <View style={styles.header}>
        <Text style={styles.assets}>Assets</Text>
        <Text style={styles.balance}>Balance</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Tether</Text>
            <Text>USDT</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$100</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.012345</Text>
          <Text>0.02</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <View style={styles.circle}></View>
          <View>
            <Text>Shallionill</Text>
            <Text>USDT</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>$0.989</Text>
          <Text>0.00</Text>
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
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
  leftContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rightContent: {
    flex: 1,
    alignItems: "flex-end",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
});
