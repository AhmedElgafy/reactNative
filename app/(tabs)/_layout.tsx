import { Tabs, usePathname } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Black, Colors, Salmon } from "@/constants/Colors";
import {
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  WishlistIcon,
  ProfileIcon,
} from "@/components/ui/icons";
// import CartIcon from "@assets/icons/cart.svg";
// import CategoriesIcon from "@assets/icons/categories.svg";
// import HomeIcon from "@assets/icons/home.svg";
// import ProfileIcon from "@assets/icons/profile.svg";
// import { WishlistIcon } from "@/components/ui/icnos";
// import WishlistIcon from "@assets/icons/wishlist.svg";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarActiveTintColor: Black,
        tabBarInactiveTintColor: Salmon,
        headerShown: false,
        tabBarButton: HapticTab,
        // headerShadowVisible: false,

        tabBarBackground: TabBarBackground,
        // tabBarIconStyle: { backgroundColor: "black" },
        tabBarItemStyle: {
          flexDirection: "row",
          alignItems: "center",
          borderColor: "black",
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            height: 60,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // tabBarItemStyle:{backgroundColor:"black"},
          tabBarIcon: ({ color, focused }) => (
            <Icon Icon={HomeIcon} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon Icon={CategoriesIcon} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{}}>
              <Icon Icon={CartIcon} focused={focused} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon Icon={WishlistIcon} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon Icon={ProfileIcon} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
interface IconProps {
  focused: boolean;
  color: string;
  Icon: any;
}
function Icon({ color, focused, Icon }: IconProps) {
  return (
    <View
      style={{ justifyContent: "space-between", gap: 6, position: "relative" }}
    >
      <Icon size={28} stroke={color} />
      {focused && (
        <View
          style={{
            backgroundColor: "black",
            width: "100%",
            bottom: -6,
            position: "absolute",
            left:"-50%",
            transform:[{translateX:"50%"}],
            height: 2,
          }}
        ></View>
      )}
    </View>
  );
}
