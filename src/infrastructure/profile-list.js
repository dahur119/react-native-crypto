import React from "react";
import { StyleSheet, View } from "react-native";
import { Profile } from "../components/features/profile/profile-pics";
import { ProfileSettings } from "../components/features/profile/profile-settings";

export const ProfileList = () => {
  return (
    <View style={[styles.container, styles.cardSection]}>
      <Profile />
      <ProfileSettings />
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
});
