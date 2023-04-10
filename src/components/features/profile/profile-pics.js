import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.profileImage}></Text>

        <Text style={styles.name}>hello</Text>
        <Text style={styles.email}>dahur@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
