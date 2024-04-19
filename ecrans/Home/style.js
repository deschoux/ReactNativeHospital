import { FlatList, StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

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

  scrollableListItem: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 15,
    backgroundColor: "white",
    elevation: 1,
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subText: {
    marginTop: 10,
    fontSize: 12,
  },
});

export default dashboardStyles;
