import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { CoinBalanceHistory } from "../infrastructure/detail-screens/coin-balannce-history";
import { WalletList } from "../infrastructure/list-screen/wallet-list";

const Stack = createStackNavigator();
export const WalletNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wallet" component={WalletList} />
      <Stack.Screen
        name="CoinBalanceHistoryDetails"
        component={CoinBalanceHistory}
      />
    </Stack.Navigator>
  );
};
