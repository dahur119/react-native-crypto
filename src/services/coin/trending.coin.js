// TrendingContextProvider.js
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TrendingContext = createContext();

export const TrendingContextProvider = ({ children }) => {
  const [coinList, setCoinList] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currency, setCurrency] = useState("usd");

  const fetchTrendingCoin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      const data = await response.json();
      setCoinList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message); // Update error state with error message
    }
  };

  const fetchCoinDescription = async (coinId) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      const data = await response.json();

      return data; // Return the fetched data
    } catch (error) {
      console.error(error);
      throw new Error(error.message); // Rethrow the error with error message
    }
  };

  useEffect(() => {
    fetchTrendingCoin();
  }, [currency]);

  return (
    <TrendingContext.Provider
      value={{
        isLoading,
        currency,
        error,
        coinList,
        setCurrency,
        fetchCoinDescription,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export default TrendingContextProvider;
