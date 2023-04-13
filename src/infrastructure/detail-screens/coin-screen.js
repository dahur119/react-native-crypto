import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const CoinDetails = ({ route }) => {
  const { crypto } = route.params;
  console.log("why me", crypto);

  // if (!crypto) {
  //   return (
  //     <View style={styles.errorContainer}>
  //       <Text style={styles.errorText}>Crypto data not available</Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <View const style={styles.paddingContainer}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <View>
              <View style={styles.btcContainer}>
                <View style={styles.textbtc}>
                  <Image style={styles.circle}></Image>
                  <Text style={styles.textletter}>{crypto?.symbol}</Text>
                </View>
              </View>
              <Text style={styles.textsize}>$ 21,8990</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.percentage}>2.3%</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.row}>
            <View style={[styles.column, { alignItems: "flex-start" }]}>
              <Text style={styles.label}>Current Price:</Text>
            </View>
            <View style={[styles.column, { alignItems: "flex-end" }]}>
              <Text>{crypto.current_price}$</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.column, { alignItems: "flex-start" }]}>
              <Text style={styles.label}>Market Price:</Text>
            </View>
            <View style={[styles.column, { alignItems: "flex-end" }]}>
              <Text>897,2895 $</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.column, { alignItems: "flex-start" }]}>
              <Text style={styles.label}>Volume24h:</Text>
            </View>
            <View style={[styles.column, { alignItems: "flex-end" }]}>
              <Text>870,2895 $</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.column, { alignItems: "flex-start" }]}>
              <Text style={styles.label}>Available Supply:</Text>
            </View>
            <View style={[styles.column, { alignItems: "flex-end" }]}>
              <Text>90,2895 $</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.column, { alignItems: "flex-start" }]}>
              <Text style={styles.label}>Max Supply:</Text>
            </View>
            <View style={[styles.column, { alignItems: "flex-end" }]}>
              <Text>90,2895 $</Text>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 3,
    borderBottomColor: "#ccc",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  column: {
    flex: 1,
    marginRight: 16,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
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
});