import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useContext } from "react";
import { CoinContext } from "../../services/coin/coin.context";
import { BitcoinMarket } from "../../components/features/bitcoin/bitcoin-market";

export const BitcoinMarketList = ({ navigation }) => {
  const { cryptoData } = useContext(CoinContext);
  //

  const handleCryptoPress = (id) => {
    navigation.navigate("CoinDetails", { id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCryptoPress(item.id)}>
      <BitcoinMarket crypto={item} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.marketSection}>
      <View style={styles.marketHeader}>
        <Text style={styles.marketHeaderText}>Market</Text>
        <Text style={styles.marketHeaderLink}>View All</Text>
      </View>
      <FlatList
        data={cryptoData.splice(0, 3)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
