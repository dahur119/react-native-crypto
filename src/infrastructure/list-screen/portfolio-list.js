import React from "react";
import { BitcoinPortFolio } from "../../components/features/bitcoin/bitcoin-portfolio";
import { useContext } from "react";
import { CoinContext } from "../../services/coin/coin.context";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export const PortfolioList = () => {
  const { cryptoData, isLoading } = useContext(CoinContext);

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

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row" }}>
      <BitcoinPortFolio item={item} />
    </View>
  );

  return (
    <View style={styles.portfolioSection}>
      <View style={styles.portfolioHeader}>
        <Text style={styles.portfolioHeaderText}>Portfolio</Text>
        <Text style={styles.portfolioHeaderLink}>View All</Text>
      </View>
      <FlatList
        data={cryptoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal // added horizontal prop to make it scroll horizontally
      />
    </View>
  );
};

const styles = StyleSheet.create({
  portfolioSection: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  container: {
    flexDirection: "row", // align child views in same direction horizontally
    justifyContent: "space-between", // position child views at start and end
    paddingVertical: 10, // add vertical padding
  },
  portfolioHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  portfolioHeaderText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  portfolioHeaderLink: {
    color: "#007aff",
    fontSize: 16,
  },
});
