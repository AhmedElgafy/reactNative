import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import logoImage from "@assets/images/logoImage.jpg";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Salmon } from "@/constants/Colors";
import Header from "@/components/pages/home/home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeroSection from "@/components/pages/home/heroSection";
import Categories from "@/components/pages/home/categories";
import BestSeller from "@/components/pages/home/bestSeller";
import NewCollection from "@/components/pages/home/newCollection";

const App = () => {
  const [text, setText] = useState("search");
  return (
    <SafeAreaProvider style={{ paddingHorizontal: 22 }}>
      <SafeAreaView style={{ flex: 1 }}>
      <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <View style={{ gap: 20 }}>
            <HeroSection />
            <Categories />
            <BestSeller />
            <NewCollection />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
