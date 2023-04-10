import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BitcoinCard } from "../components/features/bitcoin/bitcoin-card";
import { BitcoinCardList } from "../components/features/bitcoin/bitcoin-list-card";
import { BitcoinPortFolio } from "../components/features/bitcoin/bitcoin-portfolio";
import { BitcoinMarket } from "../components/features/bitcoin/bitcoin-market";

export default BitcoinFrontpage = () => {
  return (
    <View style={styles.container}>
      {/* Card section */}
      <View style={styles.cardSection}>
        <BitcoinCard />
      </View>

      {/* List section */}
      <View style={styles.listSection}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>Cryptocurrencies</Text>
          <Text style={styles.listHeaderLink}>View All</Text>
        </View>
        <BitcoinCardList />
      </View>

      {/* Portfolio section */}
      <View style={styles.portfolioSection}>
        <View style={styles.portfolioHeader}>
          <Text style={styles.portfolioHeaderText}>Portfolio</Text>
          <Text style={styles.portfolioHeaderLink}>View All</Text>
        </View>
        <BitcoinPortFolio />
      </View>

      {/* Market section */}
      <View style={styles.marketSection}>
        <View style={styles.marketHeader}>
          <Text style={styles.marketHeaderText}>Market</Text>
          <Text style={styles.marketHeaderLink}>View All</Text>
        </View>
        <BitcoinMarket />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  cardSection: {
    margin: 16,
  },

  listSection: {
    marginTop: 12, // modify this value to move the component higher or lower
    marginHorizontal: 16,
    marginVertical: 8,
  },

  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  listHeaderText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  listHeaderLink: {
    color: "#007aff",
    fontSize: 16,
  },
  portfolioSection: {
    marginHorizontal: 16,
    marginVertical: 8,
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
  marketSection: {
    marginHorizontal: 16,
    marginVertical: -8,
  },
  marketHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  marketHeaderText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  marketHeaderLink: {
    color: "#007aff",
    fontSize: 16,
  },
});
