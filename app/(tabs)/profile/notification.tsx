import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Salmon } from "@/constants/Colors";
import Animated, {
  Easing,
  useAnimatedRef,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Notification() {
  interface NotificationItemI {
    label: string;
    active: boolean;
  }
  const items: NotificationItemI[] = [
    { label: "General Notification", active: true },
    { label: "Sound", active: true },
    { label: "Sound Call", active: true },
    { label: "Vibrate", active: true },
    { label: "Special Offers", active: false },
    { label: "Payments", active: false },
    { label: "Promo and discount", active: false },
    { label: "Cashback", active: false },
  ];
  const [itemsState, setItemsState] = useState<NotificationItemI[]>(items);
  function updateItem(e: boolean, itemIndex: number) {
    setItemsState((prev) => {
      return prev.map((item, index) => {
        if (index == itemIndex) {
          return { ...item, active: e };
        }
        return item;
      });
    });
  }
  return (
    <ScrollView style={{ paddingHorizontal: 50, paddingVertical: 20 }}>
      <View style={{ gap: 30 }}>
        {itemsState.map((item, index) => {
          return (
            <View
              key={index}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{item.label}</Text>
              <Switcher
                checked={item.active}
                onChange={(e) => updateItem(e, index)}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
function Switcher({
  checked = false,
  onChange = () => {},
}: {
  checked: boolean;
  onChange: (e: boolean) => void;
}) {
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      // alignItems: withTiming(checked ? "flex-start" : "flex-end", config),
      opacity: withTiming(checked ? 1 : 0.5, config),
      // opacity: withTiming(checked ? 1 : 0.5, config),
      // translateX: withTiming(checked ? 17 : 0, config),
    };
  });
  const chidStyle = useAnimatedStyle(() => {
    return {
      // left: withTiming(checked ? 0 : 2, config),
      right: withTiming(checked ? 2 : "60%", config),
    };
  });
  useEffect(() => {
  }, []);
  return (
    <TouchableOpacity onPress={() => onChange(!checked)}>
      <Animated.View style={[SwitcherStyle.default, style]}>
        <Animated.View
          style={[
            {
              width: 12,
              height: 12,
              backgroundColor: "white",
              borderRadius: "100%",
              position: "absolute",
            },
            chidStyle,
          ]}
        ></Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
}
const SwitcherStyle = StyleSheet.create({
  default: {
    height: 19,
    width: 36,
    backgroundColor: Salmon,
    opacity: 0.51,
    borderRadius: 8,
    paddingHorizontal: 2,
    justifyContent: "center",
    // alignItems: "flex-end",
  },
});

