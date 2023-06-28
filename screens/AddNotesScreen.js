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

      <View style={styles.body}>
        <View style={styles.input}>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={titleInputHandler}
            style={styles.textInput}
          />
          <View style={styles.line}></View>
          <TextInput
            placeholder="Notes"
            value={content}
            onChangeText={contentInputHandler}
            multiline={true}
            style={styles.textInput}
          />
        </View>
      </View>

      <View style={styles.button}>
        <Text onPress={addNoteHandler} style={styles.buttonText}>
          Add
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "#f1f5f9",
  },
  body: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
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
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    marginVertical: 10,
  },
  line: {
    borderWidth: 0.4,
    borderColor: "#e2e8f0",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginVertical: 20,
  },
});
