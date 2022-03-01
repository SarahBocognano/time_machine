import react from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function WebViewer({ route }) {
  console.log(route);
  return (
    <WebView style={styles.container} source={{ uri: route.params?.url }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
