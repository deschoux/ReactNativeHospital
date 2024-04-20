import React, { useEffect } from "react"; // Correcte importation de React et useEffect
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fakeConversation } from "../../fakeData/fakeConversations";
import Message from "../../composantes/Message";

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
    <View>
      <FlatList
        data={fakeConversation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Message item={item} />;
        }}
      />
    </View>
  );
};
export default MessageDetails;
{
  /* <Text>Détails d'un message </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna
        velit, varius id laoreet eget, porttitor feugiat nisl. Nam fringilla
        lorem eget felis interdum dapibus. Suspendisse vel dolor imperdiet,
        lacinia nunc nec, tristique mi. Cras in accumsan nunc, vitae condimentum
        augue. Sed non pharetra tortor. Ut lorem odio, faucibus et elit ac,
        elementum lacinia tellus. Aenean nec leo at nulla consequat scelerisque.
        Ut condimentum, risus nec sodales porttitor, nulla justo sollicitudin
        ex, vel varius est nulla sed arcu. Fusce tincidunt venenatis neque eu
        rutrum. Nam dapibus eros ut pretium congue. Nunc ac euismod purus. Sed
        mollis tincidunt purus at pharetra. Quisque a ligula magna. Ut et risus
        in orci dignissim tincidunt. Nulla ac tristique mauris, porta ultricies
        nisi. Aenean sit amet dapibus magna. Etiam rutrum porta nisi. Etiam
        malesuada molestie interdum. Sed tincidunt quam ut scelerisque posuere.
        Nam elit mi, semper at faucibus quis, tincidunt et sem. In in ex a nibh
        aliquam venenatis sit amet eu dolor. Fusce pulvinar lacus quis elit
        tempor, eu posuere enim cursus. Ut consequat semper convallis. Sed at
        erat tincidunt, cursus erat in, faucibus nunc. Vivamus iaculis nunc ac
        laoreet consequat. Duis congue semper tempus. Pellentesque volutpat
        neque eu iaculis consectetur. Vestibulum metus sem, pharetra volutpat
        eros quis, cursus aliquet nibh. Nunc pulvinar justo sed lacus maximus,
        ac placerat magna euismod. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Morbi auctor id ante maximus
        feugiat.
      </Text> */
}
{
  /* <BackButton /> */
}
{
  /* </View>
  );
};

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        padding: 5,
        margin: 5,
        marginTop: 20,
        backgroundColor: "grey",
      }}
    >
      <Text style={{ color: "white" }}>Messages</Text>
    </TouchableOpacity>
  );
}; */
}

{
  /* export default MessageDetails; */
}
