import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { CardIcon, Cash, Mac, PaypalIcon } from "@/components/ui/icons";
import Radio from "@/components/ui/radio";
import Divider from "@/components/ui/divider";
import ButtonUI from "@/components/ui/button";
import { Link, useRouter } from "expo-router";

export default function PaymentMethod() {
  interface ChoicesTypes {
    name: string;
    Icon: any;
    choice: PaymentChoice;
  }
  const router = useRouter();
  enum PaymentChoice {
    PayPal = "PayPal",
    Cash = "Cash",
    Card = "Card",
    ApplePay = "Apple Pay",
  }
  const choices: ChoicesTypes[] = [
    { name: "*** *** *** 67", Icon: CardIcon, choice: PaymentChoice.Card },
    { name: "Apple play", Icon: Mac, choice: PaymentChoice.ApplePay },
    { name: "Paypal", Icon: PaypalIcon, choice: PaymentChoice.PayPal },
    { name: "Cash", Icon: Cash, choice: PaymentChoice.Cash },
  ];
  const [paymentChoice, setPaymentChoice] = useState<PaymentChoice>(
    PaymentChoice.Card
  );
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          paddingHorizontal: 20,
          gap: 60,
        }}
      >
        <View style={{ gap: 20 }}>
          {choices.map(({ name, Icon, choice }, index) => {
            return (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => {
                    setPaymentChoice(choice);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    <View style={{ alignItems: "center", width: "35%" }}>
                      <Icon />
                    </View>
                    <Text>{name}</Text>
                  </View>
                  <Radio isChecked={paymentChoice == choice} />
                </TouchableOpacity>
                <Divider color="#FFD8C7" />
              </React.Fragment>
            );
          })}
        </View>
        <View
          style={{
            gap: 10,
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <ButtonUI text="Set Payment Method" style={{ margin: 0 }} />
          <View
            style={{ display: "flex", marginHorizontal: "auto" }}
          >
            <ButtonUI
              onPress={() => router.push("./add-card")}
              text="Add New Card"
              style={{ margin: 0 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
