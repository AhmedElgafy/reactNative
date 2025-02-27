import { View, Text, ScrollView } from "react-native";
import React from "react";
import { BrownRosy, Terracotta } from "@/constants/Colors";

// Import SVGs directly
import BedRoom from "@assets/images/bedRoom.svg";
import DiningRoom from "@assets/images/dinringRoom.svg";
import Kitchen from "@assets/images/kitchen.svg";
import LivingRoom from "@assets/images/livingRoom.svg";
import Office from "@assets/images/office.svg";
import { TextStyle } from "@/styles/text";

const categories = [
  { name: "Bedroom", icon: BedRoom },
  { name: "Dining Room", icon: DiningRoom },
  { name: "Kitchen", icon: Kitchen },
  { name: "Living Room", icon: LivingRoom },
  { name: "Office", icon: Office },
  { name: "Kitchen", icon: Kitchen },
  { name: "Living Room", icon: LivingRoom },
  { name: "Office", icon: Office },
];

export default function Categories() {
  return (
    <View>
      <Text
        style={[TextStyle.subTitle]}
      >
        Categories
      </Text>
      <ScrollView
      

        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
        }}
      >
        {categories.map((category, index) => {
          const Icon = category.icon; // Get the imported SVG component
          return (
            <View
              key={index}
              style={{
                backgroundColor: BrownRosy,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 13,
                height: 65,
                width: 65,
              }}
            >
              <Text>
                <Icon width={42} height={42} />
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
