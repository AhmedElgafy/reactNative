import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import React from "react";
import { BrownRosy } from "@/constants/Colors";
import Divider from "@/components/ui/divider";

export default function MyOrders() {
  interface OrderItemType {
    name: string;
    desc: string;
    price: number;
    uds: number;
    image: string;
  }
  const orderItems: OrderItemType[] = [
    {
      name: "Serenity Nightstand",
      desc: "In a laoreet purus. Integer turpis quam, laor Integer turpis quam, laor Integer turpis quam, laor Integer turpis quam, laor eet id orci nec, ultrices...",
      price: 7.5,
      uds: 1,
      image: "https://www.dummyimage.co.uk/80x80",
    },
    
  ];
  return (
    <>
      <ScrollView style={{ paddingHorizontal: 18 }}>
        <View style={{ gap: 10 }}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text>Order : Delivered</Text>
            <Text>May 15</Text>
          </View>
          <Divider/>
          {orderItems.map((item, index) => {
            return (
              <View key={index} style={{ flexDirection: "row", gap: 10 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 80, height: 80, resizeMode: "cover" }}
                />
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                  <View>
                    <Text>{item.name}</Text>
                    <Text ellipsizeMode="tail" numberOfLines={2}>
                      {item.desc}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>$ {item.price}</Text>
                    <Text>{item.uds}x uds.</Text>
                    <Text>Total ${item.uds * item.price}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
