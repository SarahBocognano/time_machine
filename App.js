import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./views/Login";
import Home from "./views/Home";
import Settings from "./views/Settings";
import WebViewer from "./views/WebView";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn === false) {
    return <Login onLogin={login} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home Page",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings Page",
          }}
        />
        <Tab.Screen
          name="View"
          component={WebViewer}
          options={{
            title: "View Page",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
