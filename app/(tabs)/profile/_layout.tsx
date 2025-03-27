import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
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
        headerLeft: () => {
          const router = useRouter();
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() => {
                router.back();
                console.log("clicked");
              }}
            >
              <BackwardIcon />
            </TouchableOpacity>
          );
        },
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#f2f2f2" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "My Profile",
          headerRight: () => {
            const router = useRouter();
            return (
              <TouchableOpacity
                onPress={() => router.push("/profile/edit-profile")}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                activeOpacity={0.7}
              >
                <EditProfileIcon width={30} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen name="edit-profile" options={{ title: "Edit Profile" }} />
    </Stack>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
