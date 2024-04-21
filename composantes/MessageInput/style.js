import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60, // Définir explicitement la hauteur ici pour correspondre à `send`
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  send: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: 13,
    backgroundColor: COLORS.main,
    color: "white",
    height: 60, // Hauteur explicite pour garantir la correspondance
    width: 60,
  },
});

export default styles;
