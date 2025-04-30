import { View, Text, Image, ScrollView, Modal, Button } from "react-native";
import ProfileImage from "@assets/images/profileImage.png";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Body from "@/components/pages/profile/body";
import Header from "@/components/pages/profile/header";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, position: "relative" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
          >
            <Image
              source={ProfileImage}
              height={148}
              width={148}
              style={{ borderRadius: 100, marginBottom: 8 }}
            />
            <View
              style={{
                marginBottom: 13,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 700 }}>
                Madison Smith
              </Text>
              <Text style={{ fontSize: 13 }}>
                <Text style={{ fontWeight: "600" }}>ID</Text>:25030024
              </Text>
            </View>
            <Header />
            <Body />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
