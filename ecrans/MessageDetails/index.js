import React, { useEffect } from "react"; // Correcte importation de React et useEffect
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fakeConversation } from "../../fakeData/fakeConversations";
import Message from "../../composantes/Message";
import MessageInput from "../../composantes/MessageInput";

const MessageDetails = ({ route, navigation }) => {
  const { item } = route.params;

  useEffect(() => {
    // Correction de la syntaxe pour utiliser useEffect
    navigation.setOptions({ title: item.fullname });
  }, []);

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: 40,
    //     justifyContent: 40,
    //     padding: 10,
    //     marginTop: 1,
    //   }}
    // >
    <View style={{ flex: 1 }}>
      <FlatList
        data={fakeConversation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Message item={item} />;
        }}
      />

      <MessageInput />
    </View>
  );
};
export default MessageDetails;
