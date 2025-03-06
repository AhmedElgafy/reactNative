import { Tabs, usePathname } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Black, Colors, Salmon } from "@/constants/Colors";
import CartIcon from "@assets/icons/cart.svg";
import CategoriesIcon from "@assets/icons/categories.svg";
import HomeIcon from "@assets/icons/home.svg";
import ProfileIcon from "@assets/icons/profile.svg";
import WishlistIcon from "@assets/icons/wishlist.svg";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarActiveTintColor: Black,
        tabBarInactiveTintColor: Salmon,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center", // Centers icon inside each tab
          alignItems: "center",
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            height: 60, // Adjust height if needed
            // justifyContent: "center", // Centers items vertically
            // alignItems: "center", // Centers items horizontally
            // paddingBottom: 10, // Adjust spacing
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // tabBarItemStyle:{backgroundColor:"black"},
          tabBarIcon: ({ color }) => <HomeIcon size={28} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ color }) => (
            <CategoriesIcon size={28} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{}}>
              <CartIcon size={28} stroke={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color }) => <WishlistIcon size={28} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon size={28} stroke={color} />,
          // tabBarItemStyle:{flex:1,alignItems:"center",justifyContent:"center"}
        }}
      />
    </Tabs>
  );
}
