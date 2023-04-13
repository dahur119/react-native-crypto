import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CoinBalanceHistory = () => {
  return (
    <>
      <View const style={styles.paddingContainer}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <View>
              <View style={styles.btcContainer}>
                <View style={styles.textbtc}>
                  <View style={styles.circle}></View>
                  <Text style={styles.textletter}>Btc</Text>
                </View>
              </View>
              <Text style={styles.textsize}>$ 21,8990</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.percentage}>2.3%</Text>
          </View>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.card}>
            <Text style={styles.text}>Send </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Receive</Text>
          </View>
        </View>
        <View style={styles.history}>
          <View style={styles.header}>
            <Text style={styles.assets}>History</Text>
          </View>

          <View style={styles.historyContainer}>
            <View style={styles.historyLeftContent}>
              <View>
                <Text>Polygon</Text>
                <Text>Matic</Text>
              </View>
            </View>
            <View style={styles.historyRightContent}>
              <Text>$0.012345</Text>
              <Text>0.02</Text>
            </View>
          </View>

          <View style={styles.historyContainer}>
            <View style={styles.historyLeftContent}>
              <View>
                <Text>Send</Text>
                <Text>Matic</Text>
              </View>
            </View>
            <View style={styles.historyRightContent}>
              <Text>$0.012345</Text>
              <Text>0.02</Text>
            </View>
          </View>
          <View style={styles.historyContainer}>
            <View style={styles.historyLeftContent}>
              <View>
                <Text>Receive</Text>
                <Text>Matic</Text>
              </View>
            </View>
            <View style={styles.historyRightContent}>
              <Text>$0.012345</Text>
              <Text>0.02</Text>
            </View>
          </View>
          <View style={styles.historyContainer}>
            <View style={styles.historyLeftContent}>
              <View>
                <Text>Receive</Text>
                <Text>Matic</Text>
              </View>
            </View>
            <View style={styles.historyRightContent}>
              <Text>$0.012345</Text>
              <Text>0.02</Text>
            </View>
          </View>
          <View style={styles.historyContainer}>
            <View style={styles.historyLeftContent}>
              <View>
                <Text>Receive</Text>
                <Text>Matic</Text>
              </View>
            </View>
            <View style={styles.historyRightContent}>
              <Text>$0.012345</Text>
              <Text>0.02</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  paddingContainer: {
    padding: 16,
  },
  container: {
    flexDirection: "row", // align child views in same direction horizontally
    justifyContent: "space-between", // position child views at start and end
    paddingVertical: 10, // add vertical padding
  },
  leftContainer: {
    alignItems: "flex-start", // align items to start
  },
  btcContainer: {
    flexDirection: "row", // align child views in same direction horizontally
    alignItems: "center", // center items vertically
  },
  textbtc: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 10, // add some space between "hello" and "Btc"
  },
  rightContainer: {
    alignItems: "flex-end", // align items to end
  },
  textsize: {
    fontSize: 30,
    fontWeight: "bold",
  },
  percentage: {
    backgroundColor: "grey",
    padding: 5,
    color: "white",
    borderRadius: 3,
  },
  profile: {
    marginTop: "60%",
  },

  textletter: {
    paddingHorizontal: 9,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,

    backgroundColor: "#333",
  },
  profileContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "50%",
    height: 70,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  user: {
    marginRight: 8, // add margin to the right of the user icon
  },

  text: {
    fontSize: 20,
    textAlign: "center",
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
  historyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  historyLeftContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  historyRightContent: {
    flex: 1,
    alignItems: "flex-end",
  },
  historyCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  history: {
    marginTop: "10%",
  },
});
