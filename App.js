import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import AddNotesScreen from "./screens/AddNotesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotesDetails from "./screens/NotesDetails";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({ notes, deleteNoteHandler }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {(props) => (
          <HomeScreen
            {...props}
            notes={notes}
            deleteNoteHandler={deleteNoteHandler}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="NoteDetails" component={NotesDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNoteHandler(title, content) {
    setNotes((currentNotes) => [
      ...currentNotes,
      { noteTitle: title, noteContent: content, id: Math.random().toString() },
    ]);

    console.log(notes);
  }

  function deleteNoteHandler(id) {
    setNotes((currentNotes) => {
      return currentNotes.filter((note) => note.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false, tabBarActiveTintColor: "green" }}
        >
          <Tab.Screen
            name="HomeTab"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          >
            {(props) => (
              <HomeStack
                {...props}
                notes={notes}
                deleteNoteHandler={deleteNoteHandler}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Add"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="add" size={size} color={color} />
              ),
            }}
          >
            {(props) => <AddNotesScreen {...props} addNote={addNoteHandler} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
