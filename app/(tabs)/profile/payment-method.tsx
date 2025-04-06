import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CardIcon, Cash, Mac, PaypalIcon } from "@/components/ui/icons";
import Radio from "@/components/ui/radio";
import Divider from "@/components/ui/divider";
import ButtonUI from "@/components/ui/button";

export default function PaymentMethod() {
  interface ChoicesTypes {
    name: string;
    Icon: any;
    choice: PaymentChoice;
  }
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
    <View
      style={{ flex: 1, justifyContent: "space-around", paddingHorizontal: 20 }}
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
      <ButtonUI text="Set Payment Method" />
    </View>
  );
}
