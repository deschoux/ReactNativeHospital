import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const Message = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{item.message}</Text>
    </View>
  );
};

export default Message;
