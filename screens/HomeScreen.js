import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import NoteItem from "../components/NoteItem";

export default function HomeScreen({ notes, deleteNoteHandler }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.all}>
        <Text style={styles.allText}>Notes</Text>
      </View>
      <View style={styles.list}>
        {!notes && (
          <View>
            <Text>hey</Text>
          </View>
        )}
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
    backgroundColor: "#f1f5f9",
  },
  all: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  allText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
  list: {
    backgroundColor: "white",
    borderRadius: 20,
  },
});
