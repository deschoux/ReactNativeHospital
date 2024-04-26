import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ActivityItem from "../../composantes/ActivityItem/index.js";
import SymptomeItem from "../../composantes/SymtomItem/index.js";
import dashboardStyles from "./style.js";
import { FakeActivity } from "../../fakeData/fakeActivity.js";
import { FakeSymptome } from "../../fakeData/fakeSymptome.js";
import { FakeDoctor } from "../../fakeData/fakeDoctor.js";

const Home = () => {
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  return (
    <ScrollView>
      {/* Header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Daniel</Text>
        <Image
          source={require("./../../assets/daniel.jpg")}
          style={dashboardStyles.userImg}
        />
      </View>

      {/* Liste des activités */}

      <FlatList
        data={FakeActivity}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => <ActivityItem item={item} />}
      />

      {/* Liste des symptômes */}
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>
          Quel symptomes avez vous ?
        </Text>
      </View>
      <FlatList
        data={FakeSymptome}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => <SymptomeItem item={item} />}
      />

      {/* Liste des docteurs */}
      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>Nos docteurs</Text>
        <TouchableOpacity onPress={() => setShowAllDoctors(!showAllDoctors)}>
          <Text style={dashboardStyles.link}>
            {showAllDoctors ? "Afficher moins" : "Afficher tout"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={dashboardStyles.doctorsContainer}>
        {(showAllDoctors ? FakeDoctor : FakeDoctor.slice(0, 2)).map(
          (doctor) => (
            <TouchableOpacity
              key={doctor.id}
              style={dashboardStyles.doctorCard}
            >
              <Image
                source={{ uri: doctor.img }}
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
            </TouchableOpacity>
          )
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
