import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "./style";

const SymptomeItem = (props) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <View>
        <Image
          require={props.item.imgSymptome}
          style={{ height: 70, width: 70, borderRadius: 10 }}
        />
        <Text style={styles.libelle}>{props.item.libelle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SymptomeItem;
