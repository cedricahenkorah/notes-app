import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NoteItem({ item, deleteItem }) {
  const navigation = useNavigation();

  function viewNoteDetails() {
    navigation.navigate("NoteDetails", {
      title: item.noteTitle,
      content: item.noteContent,
    });
  }

  return (
    <View style={styles.noteItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={viewNoteDetails}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.noteTitle}>{item.noteTitle}</Text>
        <Text style={styles.noteContent}>{item.noteContent}</Text>
      </Pressable>

      <View style={styles.delete}>
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noteItem: {
    margin: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "green",
  },
  pressedItem: {
    opacity: 0.5,
  },
  noteTitle: {
    color: "green",
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  noteContent: {
    fontSize: 18,
    padding: 8,
  },
  delete: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});
