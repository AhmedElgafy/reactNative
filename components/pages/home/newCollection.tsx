import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { TextStyle } from "@/styles/text";

export default function NewCollection() {
  const items = [
    {
      id: "1",
      image: require("@/assets/images/Group 310.png"), // ✅ Use require() for local images
      title: "Aluminum chair",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "2",
      image: require("@/assets/images/Rectangle 22.png"),
      title: "Stylish chair",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "4",
      image: require("@/assets/images/Rectangle 22.png"),
      title: "Stylish chair",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "3",
      image: require("@/assets/images/Rectangle 22.png"),
      title: "Stylish chair",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <View>
      <Text style={TextStyle.subTitle}>New Collection</Text>
      <FlatList
        // numColumns={2}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        renderItem={({ item }) => (
          <View style={{ width: 163 }}>
            <Image
              source={item.image}
              style={{ width: 163, height: 142 }} // ✅ Add width & height
              resizeMode="cover" // Optional: Adjust how the image fits
            />
            <Text>{item.title}</Text>
            <Text>
              {item.bio}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        // columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ gap: 23 }}
      />
    </View>
  );
}
