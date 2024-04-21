import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    elevation: 5,
  },
  image: {
    width: 80, // Largeur
    height: 80, // Hauteur
    borderRadius: 40, //Rond
  },
  userInfo: {
    marginLeft: 25,
    marginTop: 15,
  },
  userName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    marginBottom: 5,
  },
});

export default styles;
