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
  return (
    <>
      <DateTimePicker  value={new Date()} />
    </>
  );
}
const styles = StyleSheet.create({
  androidDateTime: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
