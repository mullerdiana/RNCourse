import { StyleSheet, Text, View, Pressable } from "react-native";

export function GoalItem(props) {
  return (
    <View style={styles.itemList}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=>pressed && styles.pressedIem}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemList: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedIem:{
    opacity:0.5,
  },
  itemText: {
    color: "white",
    padding: 8,
  },
});
