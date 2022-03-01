import { StyleSheet, View, Button, Text } from "react-native";

export default function Settings({ navigation }) {
  return (
    <View>
      <Text style={style.text}>You're on the Setting Page</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 50,
    marginVertical: 270,
    textAlign: "center",
  },
});
