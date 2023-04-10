import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const WalletSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#444"
          keyboardType="default"
          returnKeyType="search"
          onSubmitEditing={() => console.log("Search")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDEDED",
    width: "100%",
    height: 60,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#444",
  },
});
