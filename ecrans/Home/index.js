import { View, Text, ScrollView, Image, FlatList } from "react-native";
import ActivityItem from "../../composantes/ActivityItem/index.js";
import React from "react";
import SymptomeItem from "../../composantes/SymtomItem/index.js";
import dashboardStyles from "./style.js";
import { FakeActivity } from "../../fakeData/fakeActivity.js";
import { FakeSymptome } from "../../fakeData/fakeSymptome.js";
// import SVG_HOSPITAL from "../../assets/imgs/svg/undraw_medicine_b-1-ol.svg";
const Home = () => {
  return (
    <ScrollView>
      {/* Debut du header */}

      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Daniel</Text>
        <Image
          source={require("./../../assets/daniel.jpg")}
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

      {/* Liste des symptomes */}

      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>
          {" "}
          Quel symptomes avez vous ?
        </Text>
      </View>

      <FlatList
        data={FakeSymptome} // 'data' est nécessaire pour spécifier la source des données
        keyExtractor={(item) => item.id} // Correct
        horizontal={true} // Correct
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => {
          return <SymptomeItem item={item} />;
        }}
      />

      {/* Fin de liste des symptomes */}
    </ScrollView>
  );
};

export default Home;
