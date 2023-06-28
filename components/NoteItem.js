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
          size={18}
          color="black"
          onPress={() => deleteItem(item.id)}
        />
      </View>

      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  noteItem: {
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: "#e2e8f0",
  },
  pressedItem: {
    opacity: 0.5,
  },
  noteTitle: {
    paddingHorizontal: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  noteContent: {
    fontSize: 15,
    paddingHorizontal: 8,
  },
  delete: {
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  line: {},
});
