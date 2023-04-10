import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const ProfileSettings = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>My profile </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.row}>
          <View style={styles.user}>
            <Icon name="user" size={30} color="tomato" />
          </View>
          <View style={[styles.column, { alignItems: "flex-start" }]}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Brian Emmanuel</Text>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <Icon name="arrow-right" size={20} color="tomato" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.user}>
            <Icon name="envelope" size={20} color="tomato" />
          </View>
          <View style={[styles.column, { alignItems: "flex-start" }]}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Brian Emmanuel</Text>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <Icon name="arrow-right" size={20} color="tomato" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.user}>
            <Icon name="phone" size={30} color="tomato" />
          </View>
          <View style={[styles.column, { alignItems: "flex-start" }]}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Brian Emmanuel</Text>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <Icon name="arrow-right" size={20} color="tomato" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.user}>
            <Icon name="map-marker" size={30} color="tomato" />
          </View>
          <View style={[styles.column, { alignItems: "flex-start" }]}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Brian Emmanuel</Text>
          </View>
          <View style={[styles.column, { alignItems: "flex-end" }]}>
            <Icon name="arrow-right" size={20} color="tomato" />
          </View>
        </View>
      </View>
      <View style={styles.logout}>
        <Text style={styles.text}>Logout </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "50%",
    height: 70,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  user: {
    marginRight: 8, // add margin to the right of the user icon
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },
  profile: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 6,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  column: {
    flex: 1,
    marginRight: 16,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
  },
  logout: {
    width: "100%",
    height: 70,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
});
