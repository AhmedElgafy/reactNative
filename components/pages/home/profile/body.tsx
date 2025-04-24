import { View, Text } from "react-native";
import React from "react";
import {
  PrivacyIcon,
  PaymentIcon,
  NotificationIcon,
  SettingIcon,
  HelpIcon,
  LogoutIcon,
} from "@/components/ui/icons";
import { Salmon } from "@/constants/Colors";
import { ExternalPathString, Link, RelativePathString } from "expo-router";
interface Item {
  title: string;
  Icon: any;
  href: RelativePathString | ExternalPathString;
}
const bodyItems: Item[] = [
  {
    title: "Privacy Policy",
    Icon: PrivacyIcon,
    href: "../",
  },
  {
    title: "Payment Methods",
    Icon: PaymentIcon,
    href: "./profile/payment-method",
  },
  {
    title: "Notification",
    Icon: NotificationIcon,
    href: "./profile/notification",
  },
  {
    title: "Settings",
    Icon: SettingIcon,
    href: "./profile/password-setting",
  },
  {
    title: "Help",
    Icon: HelpIcon,
    href: "../",
  },
  {
    title: "Logout",
    Icon: LogoutIcon,
    href: "../",
  },
];

export default function Body() {
  return (
    <View style={{ flex: 1, width: "80%", gap: 16 }}>
      {bodyItems.map(({ title, Icon, href }, index) => {
        return (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
            key={index}
          >
            <View
              style={{
                width: "10%",
                height: 35,
                backgroundColor: Salmon,
                borderRadius: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon />
            </View>
            <Link href={href} style={{ width: "80%", fontSize: 20 }}>
              {title}
            </Link>
          </View>
        );
      })}
    </View>
  );
}
