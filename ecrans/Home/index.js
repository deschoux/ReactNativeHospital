import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";

import dashboardStyles from "./style.js";
import { FakeActivity } from "../../fakeData/fakeActivity.js";
// import SVG_HOSPITAL from "../../assets/imgs/svg/undraw_medicine_b-1-ol.svg";
const Home = () => {
  return (
    <ScrollView>
      {/* Debut du header */}

      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>John Doe</Text>
        <Image
          source={require("./../../assets/johndoe.jpg")}
          style={dashboardStyles.userImg}
        />
      </View>

      {/* fin du header */}

      {/* Liste des activités */}
      <FlatList
        data={FakeActivity} // 'data' est nécessaire pour spécifier la source des données
        keyExtractor={(item) => item.id} // Correct
        horizontal={true} // Correct
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <ActivityItem item={item} />
            // <TouchableOpacity style={dashboardStyles.scrollableListItem}>
            //   <SVG_HOSPITAL width={48} height={48} />
            //   <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
            //   <Text style={dashboardStyles.subText}>{item.subText}</Text>
            // </TouchableOpacity>
          );
        }}
      />

      {/* Fin de liste des activités */}
    </ScrollView>
  );
};

export default Home;
