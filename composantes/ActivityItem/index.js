import { Text, TouchableOpacity } from "react-native";
import React from "react";
import SVG_HOSPITAL from "./../../assets/imgs/svg/undraw_medicine_b-1-ol.svg";
import styles from "./style";
const ActivityItem = (props) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      {/* <Text>Test</Text> */}
      <SVG_HOSPITAL width={60} height={60} />
      <Text style={styles.mainText}>{props.item.mainText}</Text>
      <Text style={styles.subText}>{props.item.subText}</Text>
    </TouchableOpacity>
  );
};

export default ActivityItem;
