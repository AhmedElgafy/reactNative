import { View, Text } from "react-native";
import React from "react";
import { CardCheapIcon } from "@/components/ui/icons";
import { Beige, Salmon, Dark, OrangeDark } from "@/constants/Colors";
import { CardI } from "../types";

export default function Card({ values }: { values: CardI }) {
  const cardInfo = [
    { label: "Card holder name", value: values.name },
    { label: "CVV", value: values.cvv },
  ];
  return (
    <View
      style={{
        width: 324.33,
        height: 194.81,
        backgroundColor: Beige,
        borderRadius: 16,
        marginHorizontal: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LeftTriangle />
      <RightTriangle />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingHorizontal: 10,
          padding: 20,
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            {values.number}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "row", gap: 22 }}>
              {cardInfo.map((item, index) => {
                return (
                  <View key={index} style={{minWidth:"50%"}}>
                    <Text style={{ fontSize: 14, color: Dark }}>
                      {item.label}
                    </Text>
                    <Text style={{ fontSize: 14, color: OrangeDark }}>
                      {item.value.toUpperCase()}
                    </Text>
                  </View>
                );
              })}
            </View>
            <CardCheapIcon />
          </View>
        </View>
      </View>
    </View>
  );
}
function LeftTriangle() {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transform: [{ rotate: "90deg" }, { translateX: -100 }],
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 100,
        borderRightWidth: 100,
        borderBottomWidth: 200,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: Salmon,
      }}
    ></View>
  );
}
function RightTriangle() {
  return (
    <View
      style={{
        position: "absolute",
        top: -12,
        right: -42,
        transform: [{ rotate: "150deg" }, { translateX: -100 }],
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 100,
        borderRightWidth: 100,
        borderBottomWidth: 200,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: Salmon,
      }}
    ></View>
  );
}
