import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function Home({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [searchWebPage, setSearchWebPage] = useState({});
  const [webPageName, setWebPageName] = useState("");
  const [result, setResult] = useState(null);

  //-----------DATE TIME FUNCTION ONCHANGE-----------//
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  //-----------FETCH API-----------//
  const getWebPage = async () => {
    try {
      //fetch//
      const timeStamp = new Date(date)
        .toISOString()
        .replaceAll(/[\/-\s,:T]/g, "")
        .split(".")[0];
      const response = await fetch(
        "http://archive.org/wayback/available?url=" +
          webPageName +
          "&timestamp=" +
          timeStamp
      );
      const displayData = await response.json();
      await WebBrowser.openBrowserAsync(
        displayData.archived_snapshots?.closest?.url
      );
      setResult(displayData);
      console.log(json);

      setSearchWebPage(displayData);
      console.log(displayData);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Découvre les pages web de ton passé !</Text>
      <View style={styles.search}>
        <TextInput
          style={styles.textInput}
          onChangeText={setWebPageName}
          value={webPageName}
          placeholder="Entrez le nom du site"
        ></TextInput>
        <View style={styles.datePicker}>
          <DateTimePicker
            style={styles.datePicker}
            testId="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display={"spinner"}
            onChange={onChange}
          />
        </View>
        <View style={styles.button}>
          <Button title="Search" onPress={getWebPage} />
          <Button
            title="Go To View Page"
            onPress={() =>
              navigation.navigate("View", {
                url: result.archived_snapshots.closest.url,
              })
            }
          />
          <Text style={styles.textInput}>{searchWebPage.url}</Text>
          <Button
            title="Go To Settings Page"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "white",
  },
  search: {
    justifyContent: "center",
    marginVertical: 100,
    padding: 100,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "black",
    textAlign: "center",
    padding: 10,
  },
  button: {},
});
