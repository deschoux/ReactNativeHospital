import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

// export

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  imgSymptome: {
    width: 50,
    height: 50,
    marginRight: 25,
    // resizeMode: "contain",
  },
  libelle: {
    marginTop: 10,
    fontSize: 12,
  },
});
export default styles;
