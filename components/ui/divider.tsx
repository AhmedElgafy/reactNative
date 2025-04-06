import { View, Text } from "react-native";
import React from "react";
import { BrownRosy } from "@/constants/Colors";
interface DividerProps {
  color?: string;
}
export default function Divider({ color = BrownRosy }: DividerProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        height: 2,
        width: "100%",
      }}
    ></View>
  );
}
