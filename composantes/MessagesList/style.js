import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
  messagesContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    marginBottom: 5,
    marginTop: 15,
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
  },
  messageImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },

  messagesInfo: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
  },

  date_name: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  name: { fontWeight: "bold" },
  margin5ight: 5,
});

export default styles;
