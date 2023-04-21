import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useContext } from "react";
import { TrendingContext } from "../../services/coin/trending.coin";
import { BitcoinMarket } from "../../components/features/bitcoin/bitcoin-market";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";

export const BitcoinMarketList = () => {
  const navigation = useNavigation();
  const { coinList, isLoading } = useContext(TrendingContext);

  const handleCryptoPress = (coinId) => {
    navigation.navigate("CoinDetails", { coinId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCryptoPress(item.id)}>
      <BitcoinMarket crypto={item} />
    </TouchableOpacity>
  );

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
  return (
    <>
      <View style={styles.marketSection}>
        <View style={styles.marketHeader}>
          <Text style={styles.marketHeaderText}>Market</Text>
          <Text style={styles.marketHeaderLink}>View All</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={coinList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  marketSection: {
    marginHorizontal: 16,
    marginVertical: -8,
  },
  container: {
    flexDirection: "row", // align child views in same direction horizontally
    justifyContent: "space-between", // position child views at start and end
    paddingVertical: 10, // add vertical padding
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
