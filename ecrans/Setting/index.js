// export default Setting;
import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./style";
import fakeSettings from "./../../fakeData/fakeSetting";
import SettingItem from "../../composantes/SettingItem";

const Setting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./../../assets/daniel.jpg")}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Daniel</Text>
          <Text style={styles.userEmail}>daniel@doe.gmail.com</Text>
          <Text>+33 6 98 17 85 62</Text>
        </View>
      </View>

      <FlatList
        data={fakeSettings}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SettingItem item={item} />;
        }}
      />
    </View>
  );
};

export default Setting;
