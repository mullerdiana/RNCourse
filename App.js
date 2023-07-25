import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setListGoals((currentList) => [
      ...currentList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setListGoals((currentList) => {
      return currentList.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color={"#5e0acc"}
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAdd={addGoalHandler} onCancel={endAddGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={listGoals}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
