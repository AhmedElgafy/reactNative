import { View, Text } from "react-native";
import React from "react";
import { ProfileIcon, WishlistIcon, OrdersIcon } from "@/components/ui/icnos";
import { Salmon } from "@/constants/Colors";

export default function Header() {
  interface Item {
    title: string;
    Icon: any;
  }
  const items: Item[] = [
    {
      title: "Profile",
      Icon: <ProfileIcon stroke={"black"} width={26} height={33} />,
    },
    {
      title: "Wishlist",
      Icon: <WishlistIcon stroke={"black"} width={36} height={28} />,
    },
    {
      title: "My Orders",
      Icon: <OrdersIcon stroke={"black"} width={31} height={33} />,
    },
  ];
  return (
    <View
      style={{
        marginBottom: 31,
        backgroundColor: Salmon,
        paddingHorizontal: 31,
        paddingVertical: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
      }}
    >
      {items.map(({ title, Icon }, index) => {
        return (
          <React.Fragment key={index}>
            <View
              style={{
                // flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                width: "auto",
              }}
            >
              {Icon}
              <Text>{title}</Text>
            </View>
            {index != items.length - 1 && (
              <View
                style={{ backgroundColor: "white", width: 1, height: "100%" }}
              ></View>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}
