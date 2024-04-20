import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const MessagesList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.messagesContainer}
      onPress={() => navigation.navigate("MessageDetails", { item })}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.messageImg}
      />
      <View style={styles.messagesInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.fullname}</Text>
          <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
        <Text>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessagesList;

{
  /* <View>
<Text>{item.id}</Text>
</View> */
}
