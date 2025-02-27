import { View, Text, Image } from "react-native";
import React from "react";
import HeroImage from "@assets/images/Rectangle 143.png";
import { Salmon } from "@/constants/Colors";

export default function HeroSection() {
  return (
    <View>
      <View
        style={{
          marginHorizontal: "auto",
          width:"100%",
        }}
      >
        <Image style={{width:"100%"}} source={HeroImage} />
      </View>
      <View
        style={{
          flex: 1,
          marginTop:20,
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {Array(5)
          .fill(1)
          .map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 20,
                  height: 4,
                  backgroundColor: Salmon,
                }}
              ></View>
            );
          })}
      </View>
    </View>
  );
}
