import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

export default function ProfileForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button title="Click me" onPress={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <DateTimePicker
          value={new Date()}
          onChange={(data) => {
            const date = new Date(data.nativeEvent.timestamp);
            console.log("changes", date);
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  androidDateTime: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
