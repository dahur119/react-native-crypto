import React from "react";
import { StyleSheet, View } from "react-native";
import { Wallet } from "../../components/features/wallet/wallet-history";
import { WalletBalance } from "../../components/features/wallet/wallet-balance";
import { WalletSearch } from "../../components/features/wallet/wallet-search";

export const WalletList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardSection}>
        <View style={styles.wallet}>
          <Wallet />
        </View>
        <View style={[styles.walletSearch, { marginBottom: 100 }]}>
          <WalletSearch />
        </View>
        <View style={[styles.walletBalance, { marginTop: 16 }]}>
          <WalletBalance />
        </View>
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
  wallet: {
    marginBottom: 16,
  },
  walletSearch: {
    marginVertical: 8,
  },
  walletBalance: {
    marginTop: 8,
  },
});
