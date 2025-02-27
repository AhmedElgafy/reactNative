import { View, Text } from "react-native";
import React from "react";
import { Salmon } from "@/constants/Colors";
import SearchIcon from "@assets/icons/search-icon.svg";

export default function Header() {
  return (
    <View
      style={{
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: Salmon,
            fontSize: 22,
            lineHeight: 22,
            fontWeight: 600,
          }}
        >
          Hi, Welcome Back
        </Text>
        <Text style={{fontSize:14}}>Create spaces that bring joy</Text>
      </View>
      <View style={{
        borderRadius:"100%",
        backgroundColor:Salmon,
        padding:6
      }}>
          <SearchIcon width={15} />
      </View>
    </View>
  );
}
