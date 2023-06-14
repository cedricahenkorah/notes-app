import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import NoteItem from "../components/NoteItem";

export default function HomeScreen({ notes, deleteNoteHandler }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.all}>
        <Text style={styles.allText}>All notes</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}
          data={notes}
          renderItem={({ item }) => {
            return <NoteItem item={item} deleteItem={deleteNoteHandler} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 15,
  },
  all: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  allText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});
