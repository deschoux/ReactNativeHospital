// export default Messages;
import React from "react";
import { FlatList } from "react-native";
import { fakeChats } from "../../fakeData/fakeChats";
import MessagesList from "../../composantes/MessagesList";
import { StyleSheet } from "react-native";

// Définissez vos styles à l'extérieur du composant fonctionnel
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
const Messages = (navigation) => {
  return (
    <FlatList
      data={fakeChats}
      keyExtractor={(item) => item.id.toString()} // La clé est une chaîne de caractères
      style={styles.root} //  style 'root'
      // enlever la barre de scroll ci mettre ligne ci-dessous sur false
      showsVerticalScrollIndicator={true}
      renderItem={({ item }) => (
        <MessagesList item={item} navigation={{ navigation }} />
      )}
    />
  );
};

export default Messages;
