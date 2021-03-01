import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle}></View>
      </View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewTwoParent: {
    height: 80,
    justifyContent: "flex-end",
  },

  viewOneStyle: {
    height: 40,
    width: 40,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 40,
    width: 40,
    backgroundColor: "green",
  },

  viewThreeStyle: {
    height: 40,
    width: 40,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
