import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { TextStyle } from "@/styles/text";
import { Dark, OrangeDark, Salmon } from "@/constants/Colors";
import KitchenCartImage from "@assets/images/KitchenCart.png";

export default function BestSeller() {
  TextStyle.subTitle;
  return (
    <View>
      <Text style={TextStyle.subTitle}>BestSeller</Text>
      <View
        style={{
          position: "relative",
          backgroundColor: Salmon,
          borderRadius: 12,
          paddingHorizontal: 25,
          paddingVertical: 10,
          // height: 132,
          justifyContent: "center",
        }}
      >
        <Text style={[TextStyle.subTitle, { color: Dark, marginBottom: 16 }]}>
          Kitchen Cart
        </Text>
        <Text style={{ fontSize: 13, width: "50%" }}>
          Lorem ipsum dolor sit amet,{"\n"}
          consectetur adipiscing elit
        </Text>
        <Image
          style={{ position: "absolute", bottom: 10, right: 0 }}
          source={KitchenCartImage}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 18,
            gap: 52,
          }}
        >
          <View style={tagStyle.tag}>
            <AntDesign name="star" size={15} color={Salmon} />
            <Text style={{ fontSize: 9 }}>4.5</Text>
          </View>
          <View style={tagStyle.tag}>
            <Text style={{ fontSize: 9 }}>Shop Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const tagStyle = StyleSheet.create({
  tag: {
    borderRadius: 15,
    height: 19,
    padding: 4,
    paddingHorizontal: 8,
    backgroundColor: "white",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
