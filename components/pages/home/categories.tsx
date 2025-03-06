import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Beige, BrownRosy, Salmon, Terracotta } from "@/constants/Colors";

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
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <View>
      <Text style={[TextStyle.subTitle]}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
        }}
      >
        {categories.map((category, index) => {
          const Icon = category.icon; // Get the imported SVG component
          return (
            <Pressable
              key={index}
              onPressIn={() => setActiveIndex(index)}
              onPressOut={() => setActiveIndex(null)}
              style={{
                backgroundColor: index == activeIndex ? Salmon : Beige,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 13,
                height: 65,
                width: 65,
              }}
            >
              <Text>
                <Icon
                  width={42}
                  stroke={index == activeIndex ? Terracotta : BrownRosy}
                  height={42}
                />
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
