import { FlatList, StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const dashboardStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical + 50,
    backgroundColor: "white",
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 50 / 2,
  },
  userName: {
    fontSize: 16,
  },

  //   Styliser la FlatList
  scrollableList: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  title: {
    paddingHorizontal: PADDING.paddingHorizontal,
    paddingVertical: PADDING.paddingVertical,
    marginLeft: 10,
  },

  title_space_between: {
    paddingHorizontal: PADDING.paddingHorizontal,
    paddingVertical: PADDING.paddingVertical,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleBold: {
    fontWeight: "bold",
  },
  link: {
    color: COLORS.main,
  },
  doctorsContainer: {
    marginTop: 15,
    paddingHorizontal: PADDING.paddingHorizontal,
    paddingVertical: PADDING.paddingVertical,
  },
  doctorCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    elevation: 5,
    padding: 10,
    paddingHorizontal: PADDING.paddingHorizontal,
    paddingVertical: PADDING.paddingVertical,
    marginBottom: 20,
    borderRadius: 5,
  },
  doctorImg: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginRight: 15,
  },
  doctorInfo: {
    flexDirection: "column",
  },

  doctorName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 15,
  },

  // Définir les styles pour le conteneur
  doctorSpecContainer: {
    borderRadius: 15,
    backgroundColor: COLORS.main, // Assurez-vous que COLORS.main est défini quelque part dans vos styles globaux
    padding: 6,
    paddingHorizontal: PADDING.horizontal, // Assurez-vous que PADDING.horizontal est correctement défini
  },

  // Définir les styles spécifiques au texte
  doctorSpecText: {
    fontSize: 14,
    color: "white",
  },

  // doctorSpec: {
  //   borderRadius: 15,
  //   backgroundColor: COLORS.main,
  //   padding: 5,
  //   paddingHorizontal: PADDING.horizontal,
  //   fontSize: 14,
  //   color: "white",
  // },
});

export default dashboardStyles;
