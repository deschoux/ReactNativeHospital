import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ActivityItem from "../../composantes/ActivityItem/index.js";
import React from "react";
import SymptomeItem from "../../composantes/SymtomItem/index.js";
import dashboardStyles from "./style.js";
import { FakeActivity } from "../../fakeData/fakeActivity.js";
import { FakeSymptome } from "../../fakeData/fakeSymptome.js";
import { FakeDoctor } from "../../fakeData/fakeDoctor.js";
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

      {/* Docteur liste */}

      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>Nos docteurs</Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.link}>Afficher tout</Text>
        </TouchableOpacity>
      </View>

      <View style={dashboardStyles.doctorsContainer}>
        {FakeDoctor.map((doctor, index) => {
          return (
            <TouchableOpacity
              key={doctor.id}
              style={dashboardStyles.doctorCard}
            >
              <Image
                source={{ uri: "${doctor.img}" }}
                style={dashboardStyles.doctorImg}
              />

              <View style={dashboardStyles.doctorInfoContainer}>
                <Text style={dashboardStyles.doctorName}>
                  {doctor.fullname}
                </Text>
                <View style={dashboardStyles.doctorSpecContainer}>
                  <Text style={dashboardStyles.doctorSpecText}>
                    {doctor.speciality}
                  </Text>
                </View>
              </View>

              {/* <Text style={dashboardStyles.doctorSpec}>
                  {doctor.speciality}
                </Text>
              </View> */}
            </TouchableOpacity>
          ); // Assurez-vous que chaque élément a une clé unique et que `doctor.name` est la propriété correcte.
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
