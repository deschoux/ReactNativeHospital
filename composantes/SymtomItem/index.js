// import React from "react";
// import { TouchableOpacity, Image, Text, View } from "react-native";
// import styles from "./style";

// const SymptomeItem = (props) => {
//   return (
//     <TouchableOpacity style={styles.scrollableListItem}>
//       <View>
//         <Image
//           require={props.item.imgSymptome}
//           style={{ height: 70, width: 70, borderRadius: 10 }}
//         />
//         <Text style={styles.libelle}>{props.item.libelle}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default SymptomeItem;
import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "./style";

// Vous ne pouvez pas faire un import dynamique comme ceci:
// import SVG_HOSPITAL from ("./../../assets/imgs/${props.item.imgSymptome");

// Mais vous pouvez utiliser une fonction pour retourner le bon require selon une prop
const getImage = (imageName) => {
  switch (imageName) {
    case "symptome1":
      return require("./../../assets/imgs/img1.png");
    case "symptome2":
      return require("./../../assets/imgs/img2.png");
    default:
      return require("./../../assets/imgs/default.png");
  }
};

const SymptomeItem = (props) => {
  // Utiliser une fonction pour obtenir le chemin de l'image
  const imageSource = getImage(props.item.imgSymptome);

  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <Image
        style={styles.imgSymptome}
        source={imageSource} // Utiliser le résultat de la fonction pour le source
      />
      <Text style={styles.libelle}>{props.item.libelle}</Text>
    </TouchableOpacity>
  );
};

export default SymptomeItem;
