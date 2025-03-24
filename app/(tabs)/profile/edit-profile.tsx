import { View, Text, Image } from "react-native";
import ProfileImage from "@assets/images/profileImage.png";
import React from "react";
import { Beige } from "@/constants/Colors";
import ProfileForm from "@/components/pages/home/profile/edit-profile/profileForm";

export default function EditProfile() {
  return (
    <View>
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
          backgroundColor:Beige,
          marginBottom: 13,
          alignItems: "center",
          paddingVertical:15
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Madison Smith</Text>
        <Text style={{ fontSize: 13 }}>
          <Text style={{ fontWeight: "600" }}>ID</Text>:25030024
        </Text>
      </View>
      <ProfileForm/>
    </View>
  );
}
