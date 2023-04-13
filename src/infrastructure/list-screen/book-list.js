import React from "react";
import { StyleSheet, View } from "react-native";
import { BookSearch } from "../../components/features/books/book-search";
import { BookBuy } from "../../components/features/books/book-buy";
import { BuyNews } from "../../components/features/books/buy-news";
import { useContext } from "react";
import { CoinContext } from "../../services/coin/coin.context";

export const BookList = () => {
  const { coin } = useContext(CoinContext);
  console.log("hello", coin);
  return (
    <View style={styles.container}>
      <View style={styles.cardSection}>
        <View style={styles.book}>
          <BookSearch />
        </View>
        <View style={styles.bookLearn}>
          <BookBuy />
        </View>
        <View>
          <BuyNews />
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
  book: {
    marginBottom: 80,
  },
  bookLearn: {
    marginVertical: 60,
  },
  walletBalance: {
    marginTop: 8,
  },
});
