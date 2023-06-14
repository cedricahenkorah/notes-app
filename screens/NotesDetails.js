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
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },
  contentContainer: {
    paddingTop: 20,
    // borderTopWidth: 2,
  },
  content: {
    fontSize: 16,
  },
});
