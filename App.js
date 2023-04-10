import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, View, Text } from "react-native";
import BitcoinsFrontpage from "./src/infrastructure/bitcoins-frontpage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { WalletList } from "./src/infrastructure/wallet-list";
import { BookList } from "./src/infrastructure/book-list";
import { ProfileList } from "./src/infrastructure/profile-list";
import { NavigationContainer } from "@react-navigation/native";

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
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, paddingTop: statusBarHeight }}>
        <Tab.Navigator
          tabBarOptions={tabBarOptions}
          screenOptions={screenOptions}
        >
          <Tab.Screen name="Home" component={BitcoinsFrontpage} />
          <Tab.Screen name="Wallet" component={WalletList} />

          <Tab.Screen name="Book" component={BookList} />
          <Tab.Screen name="Profile" component={ProfileList} />
        </Tab.Navigator>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
}
