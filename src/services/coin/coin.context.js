import React, { useState, useEffect, createContext } from "react";

export const CoinContext = createContext();

export const CoinContextProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCryptoData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
      );
      const data = await response.json();

      setCryptoData(data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <CoinContext.Provider
      value={{
        cryptoData,
        isLoading,
        error,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};
