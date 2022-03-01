import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputGroup}>
        <Text>Email:</Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder=" Adresse Email"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Password:</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder=" Mot de Passe"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={props.onLogin}>
        <View>
          <Text style={styles.loginButtonText}>Se Connecter</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
  },
  loginButton: {
    marginTop: 20,
    padding: 10,
    marginHorizontal: 80,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "transparent",
  },
  loginButtonText: {
    color: "black",
    textAlign: "center",
  },
});
