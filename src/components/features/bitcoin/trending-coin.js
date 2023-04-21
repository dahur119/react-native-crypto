// import React, { useContext, useEffect, useRef, useState } from "react";
// import { CoinContext } from "../../../services/coin/coin.context";
// import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// export const TrendingCoin = () => {
//   // const { coin } = useContext(CoinContext);

//   // const [currentIndex, setCurrentIndex] = useState(0);

//   // const FilteredCoin = coin.splice(0, 1);
//   // git commit -m "your commit message"(FilteredCoin);

//   const scrollViewRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % FilteredCoin.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [FilteredCoin]);

//   useEffect(() => {
//     scrollViewRef.current.scrollTo({
//       x: currentIndex * 200,
//       animated: true,
//     });
//   });
//   return (
//     <ScrollView ref={scrollViewRef} horizontal={true}>
//       {FilteredCoin.map((item, index) => (
//         <View key={index} style={styles.signal}>
//           <Text>{item.name}</Text>
//           <Text>{item.symbol}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   signal: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   marketprice: {
//     marginRight: 10,
//   },
//   marketcap: {
//     marginRight: 10,
//   },
// });
