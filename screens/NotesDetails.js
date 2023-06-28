import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NotesDetails({ route }) {
  const { title, content } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f1f5f9",
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    // color: "green",
  },
  contentContainer: {
    paddingTop: 10,
    // borderTopWidth: 2,
  },
  content: {
    fontSize: 16,
  },
});
