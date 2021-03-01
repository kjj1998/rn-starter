import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state == { count: number }
  // action == { type: 'increase' || type: 'decrease', payload: 1 || -1 }

  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count + action.payload };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: -1 });
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          dispatch({ type: "reset", payload: 0 });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
