import { View, Text, Settings } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Messages from "../Messages";
import Setting from "../Setting";

const BottomTabs = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: "#5160ed",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="settings"
        component={Setting}
        options={{
          tabBarLabel: "Personnel",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

// const BottomTabs = () => {
//   const Tab = createMaterialBottomTabNavigator();
//   return (
//     <Tab.Navigator
//       initialRouteName="tabs_home"
//       screenOptions={{
//         tabBarActiveTintColor: "#ffffff", // Couleur des icônes et du texte actifs
//         tabBarInactiveTintColor: "#b0b0b0", // Couleur des icônes et du texte inactifs
//         tabBarColor: "#5160ed", // Couleur de fond de la barre des onglets
//         headerShown: false,
//       }}
//     >
