import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { BackwardIcon, EditProfileIcon } from "@/components/ui/icnos";
import { Salmon } from "@/constants/Colors";
function LogoTitle(props: { children: string }) {
  return (
    <View style={{ marginHorizontal: "auto" }}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: Salmon }}>
        {props.children}
      </Text>
    </View>
  );
}
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: () => (
          <Link href={".."}>
            <BackwardIcon />
          </Link>
        ),
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#f2f2f2" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "My Profile",
          headerRight: () => (
            <Link href={"/profile/edit-profile"}>
              <EditProfileIcon width={30} />
            </Link>
          ),
        }}
      />
      <Stack.Screen name="edit-profile" options={{title:"Edit Profile"}}/>
    </Stack>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
