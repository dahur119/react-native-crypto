import React from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const bitcoinData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [
        55000, 58000, 60000, 62000, 63000, 61000, 59000, 61000, 63000, 65000,
        67000, 69000,
      ],
      color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const Chart = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={bitcoinData}
        width={320}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#1A1C20",
          backgroundGradientFrom: "#1A1C20",
          backgroundGradientTo: "#1A1C20",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#1A1C20",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chart;
