import { View, Text, TouchableOpacity, ViewStyle, StyleProp } from "react-native";
import React from "react";
import { OrangeDark, Salmon } from "@/constants/Colors";
interface ButtonUIProps {
  loading?: boolean;
  onPress?: () => void;
  text: string;
  style?:StyleProp<ViewStyle>
}
export default function ButtonUI({
  loading = false,
  onPress = () => {},
  text = "Text",
  style={marginTop: 52}
}: ButtonUIProps) {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[{
        opacity: loading ? 0.2 : 1,
        width: 208,
        backgroundColor: Salmon,
        borderRadius: 19,
        marginHorizontal: "auto",
        // marginTop: 52,
      },style]}
      onPress={() => onPress()}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "500",
          color: OrangeDark,
          paddingVertical: 5,
        }}
      >
        {loading ? "Loading > > >" : text}
      </Text>
    </TouchableOpacity>
  );
}
