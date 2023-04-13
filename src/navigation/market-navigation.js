import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { CoinDetails } from "../infrastructure/detail-screens/coin-screen";

import bitcoinsFrontpage from "../infrastructure/list-screen/bitcoins-frontpage";

const Stack = createStackNavigator();

export const CoinNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Market" component={bitcoinsFrontpage} />
      <Stack.Screen name="CoinDetails" component={CoinDetails} />
    </Stack.Navigator>
  );
};
