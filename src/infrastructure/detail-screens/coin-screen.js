import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useContext } from "react";
import { TrendingContext } from "../../services/coin/trending.coin";
import { useState } from "react";
import { ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import Spinner from "react-native-loading-spinner-overlay";

export const CoinDetails = ({ route }) => {
  const { coinId } = route.params;
  const { fetchCoinDescription, coinList } = useContext(TrendingContext);
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoinData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCoinDescription(coinId);
        console.log(data);
        setCoinData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchCoinData();
  }, [coinId]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Spinner
          visible={true}
          textContent={"Loading..."}
          textStyle={{ color: "#FFF" }}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }
  return (
    <>
      <ScrollView>
        <View const style={styles.paddingContainer}>
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <View>
                <View style={styles.btcContainer}>
                  <View style={styles.textbtc}>
                    <Image
                      source={{
                        uri: coinData?.image?.small || "default_image_url",
                      }}
                      style={styles.circle}
                      resizeMode="cover"
                      onLoad={() => console.log("Image loaded successfully")}
                      onError={() => console.log("Image load failed")} // Add onError event handler
                    />

                    <Text style={styles.textletter}>{coinData.symbol}</Text>
                  </View>
                </View>
                <Text style={styles.textsize}>
                  $ {coinData.market_data.current_price.usd}
                </Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.percentage}>
                {coinData && coinData.atl ? coinData.atl : "N/A"}
              </Text>
            </View>
          </View>

          <View>
            <Text>
              {coinData && coinData.description && coinData.description.en}
            </Text>
          </View>

          <View>
            <View style={styles.row}>
              <View style={[styles.column, { alignItems: "flex-start" }]}>
                <Text style={styles.label}>Current Price:</Text>
              </View>
              <View style={[styles.column, { alignItems: "flex-end" }]}>
                <Text>{coinData.market_data.current_price.usd} $</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.column, { alignItems: "flex-start" }]}>
                <Text style={styles.label}>Market Price:</Text>
              </View>
              <View style={[styles.column, { alignItems: "flex-end" }]}>
                <Text>{coinData.market_data.market_cap.usd}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.column, { alignItems: "flex-start" }]}>
                <Text style={styles.label}>Volume24h:</Text>
              </View>
              <View style={[styles.column, { alignItems: "flex-end" }]}>
                <Text>{coinData.market_data.total_volume.usd} $</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.column, { alignItems: "flex-start" }]}>
                <Text style={styles.label}>Total Supply:</Text>
              </View>
              <View style={[styles.column, { alignItems: "flex-end" }]}>
                <Text>{coinData.market_data.total_supply}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.column, { alignItems: "flex-start" }]}>
                <Text style={styles.label}>Max Supply:</Text>
              </View>
              <View style={[styles.column, { alignItems: "flex-end" }]}>
                <Text>{coinData.market_data.max_supply} </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
