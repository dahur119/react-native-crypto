import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const BitcoinMarket = ({ crypto }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("CoinDetails", { id: crypto.id });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Image source={{ uri: crypto.image }} style={styles.circle} />
          <View>
            <Text>{crypto.name}</Text>
            <Text>{crypto.symbol}</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text>${crypto.current_price}</Text>
          <Text>{crypto.high_24h}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
