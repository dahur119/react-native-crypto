import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, View, Text } from "react-native";
import BitcoinsFrontpage from "./src/infrastructure/list-screen/bitcoins-frontpage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { WalletList } from "./src/infrastructure/list-screen/wallet-list";
import { BookList } from "./src/infrastructure/list-screen/book-list";
import { ProfileList } from "./src/infrastructure/list-screen/profile-list";
import { NavigationContainer } from "@react-navigation/native";
import { CoinDetails } from "./src/infrastructure/detail-screens/coin-screen";
import { CoinBalanceHistory } from "./src/infrastructure/detail-screens/coin-balannce-history";
import { CoinContextProvider } from "./src/services/coin/coin.context";
import { TrendingContextProvider } from "./src/services/coin/trending.coin";
import { CoinNavigation } from "./src/navigation/market-navigation";
import { WalletNavigation } from "./src/navigation/wallet-navigation";

const Tab = createBottomTabNavigator();

// const Learn = () => {
//   return (
//     <View>
//       <Text>Book</Text>
//     </View>
//   );
// };

const Profiles = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  );
};
const tabBarOptions = {
  activeTintColor: "tomato",
  inactiveTintColor: "gray",
};

const screenOptions = ({ route }) => {
  let iconName;
  let iconColor;

  if (route.name === "Home") {
    iconName = "home";
  } else if (route.name === "Wallet") {
    iconName = "credit-card";
  } else if (route.name === "Book") {
    iconName = "book";
  } else if (route.name === "Profile") {
    iconName = "account";
  } else if (route.name === "Profil") {
    iconName = "account";
  } else if (route.name === "Profiles") {
    iconName = "account";
  }
  iconColor =
    route.name === "Home"
      ? tabBarOptions.activeTintColor
      : tabBarOptions.inactiveTintColor;

  return {
    tabBarIcon: ({ color, size }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
  };
};
export default function App() {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <TrendingContextProvider>
      <CoinContextProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1, paddingTop: statusBarHeight }}>
            <Tab.Navigator
              screenOptions={screenOptions}
              tabBarOptions={{
                showLabel: false,
              }}
            >
              <Tab.Screen
                name="Home"
                component={CoinNavigation}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Wallet"
                component={WalletNavigation}
                options={{
                  headerShown: false,
                  tabBarLabel: "Wallet", // Set the label for the "Wallet" tab
                }}
                // Set the label for the "Wallet" tab
              />

              <Tab.Screen name="Book" component={BookList} />
              <Tab.Screen name="Profile" component={ProfileList} />
            </Tab.Navigator>
          </SafeAreaView>
          <ExpoStatusBar style="auto" />
        </NavigationContainer>
      </CoinContextProvider>
    </TrendingContextProvider>
  );
}
