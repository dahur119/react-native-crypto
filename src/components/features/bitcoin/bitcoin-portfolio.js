import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

export const BitcoinPortFolio = ({ item }) => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Current index of the item being shown

  const ITEM_WIDTH = 100; // Update with the actual width of each item
  const items = []; // Update with the actual array of items

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next item to scroll to
      const nextIndex = (currentIndex + 1) % items.length;

      // Scroll to the next item in the ScrollView
      scrollViewRef.current?.scrollTo({
        x: nextIndex * ITEM_WIDTH,
        animated: true,
      });

      // Update the current index
      setCurrentIndex(nextIndex);
    }, 10000); // 10 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]); // Only run the effect when the currentIndex changes

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      pagingEnabled // Optional: enable paging to make it snap to item boundaries
    >
      <View style={[styles.card, { marginBottom: 10 }]}>
        <View style={styles.leftContent}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.symbol}</Text>
          </View>
          <View style={styles.left}>
            <Text>{item.high_24h}</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.rightCircle}>
            <Image source={{ uri: item.image }} style={styles.circle}></Image>
            <Text>{item.current_price}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flex: 1,
    width: "100%", // Update width to 100%
  },
  leftContent: {
    flex: 1,
    justifyContent: "center",
    marginRight: 10,
  },
  left: {
    paddingTop: 15,
  },
  rightContent: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rightCircle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
});
