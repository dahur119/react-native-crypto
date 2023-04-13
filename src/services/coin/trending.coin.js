import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TrendingContext = createContext();

export const TrendingContextProvider = ({ children }) => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [error, setError] = useState("");

  const TrendingCoin = async (currency) => {
    setLoading(true);
    const fetchCoin = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    const response = fetchCoin.data;
    setTrendingCoin(response);
    setLoading(false);
  };

  useEffect(() => {
    TrendingCoin(currency);
  }, []);

  return (
    <TrendingContext.Provider
      value={{ trendingCoin, currency, isLoading, error }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
