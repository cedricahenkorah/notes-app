import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function AddNotesScreen({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function titleInputHandler(enteredTitle) {
    setTitle(enteredTitle);
  }

  function contentInputHandler(enteredContent) {
    setContent(enteredContent);
  }

  function addNoteHandler() {
    addNote(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.add}>
        <Text style={styles.addText}>Add Note</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter note title"
          value={title}
          onChangeText={titleInputHandler}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Enter note content"
          value={content}
          onChangeText={contentInputHandler}
          multiline={true}
          style={styles.textInput}
        />
      </View>
      <View>
        <Button title="Save note" onPress={addNoteHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 15,
  },
  add: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  addText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  input: {
    marginBottom: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "green",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    marginVertical: 10,
  },
});
