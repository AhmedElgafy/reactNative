import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import ProfileImage from "@assets/images/profileImage.png";
import React from "react";
import { Beige } from "@/constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfileForm from "@/components/pages/profile/edit-profile/profileForm";

export default function EditProfile() {
  return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <Image
            source={ProfileImage}
            height={148}
            width={148}
            style={{
              borderRadius: 100,
              marginBottom: 8,
              marginHorizontal: "auto",
            }}
          />
          <View
            style={{
              backgroundColor: Beige,
              marginBottom: 13,
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Madison Smith</Text>
            <Text style={{ fontSize: 13 }}>
              <Text style={{ fontWeight: "600" }}>ID</Text>:25030024
            </Text>
          </View>
          <ProfileForm />
        </ScrollView>
  );
}
