import { View, Text, TextInput } from "react-native";
import React from "react";
import { InputStyle } from "@/styles/input.style";
import { StyleSheet } from "react-native";
import { Dark, OrangeDark } from "@/constants/Colors";
import ButtonUI from "@/components/ui/button";
import { formateCardNumber, formatExpiryFromNumber } from "@/lib/utils";
import { CardI } from "../types";

export default function CardForm({
  values,
  onChange,
}: {
  values: CardI;
  onChange: (e: CardI) => void;
}) {
  return (
    <View style={{ gap: 25, width: 320, marginHorizontal: "auto" }}>
      <View>
        <Text style={styles.label}>Card holder name</Text>
        <TextInput
          value={values.name}
          onChangeText={(e) => {
            if (e.length > 20) return;
            onChange({ ...values, name: e });
          }}
          style={[InputStyle.fieldStyle, styles.input]}
        />
      </View>
      <View>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          value={formateCardNumber(values.number.replaceAll(" ", ""))}
          keyboardType="numeric"
          onChangeText={(e) => {
            if (e.length >= 21) return;
            onChange({ ...values, number: e });
            console.log(e);
          }}
          style={[InputStyle.fieldStyle, styles.input]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%" }}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput
            value={formatExpiryFromNumber(values.expDate)}
            keyboardType="numeric"
            onChangeText={(e) => {
              if (e.length > 5) return;
              if (e == "/") return;
              let expDate = e;
              if (expDate.length < 5 && Number(expDate.slice(0, 2)) > 12) {
                expDate = expDate.replace(expDate.slice(0, 2), "12");
              }
              onChange({ ...values, expDate: expDate });
            }}
            style={[InputStyle.fieldStyle, styles.input, { width: 85 }]}
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.label}>CVV</Text>
          {/* {formatExpiryFromNumber(4045)}
          {formateCardNumber(66666666)} */}
          <TextInput
            value={values.cvv}
            onChangeText={(e) => {
              console.log(e.length > 3);
              if (e.length > 3) return;
              onChange({ ...values, cvv: e });
            }}
            keyboardType="numeric"
            style={[InputStyle.fieldStyle, styles.input, { width: 85 }]}
          />
        </View>
      </View>
      <ButtonUI text="Save Card" style={{ margin: 10 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  label: { color: OrangeDark, fontSize: 15, marginBottom: 3 },
  input: { color: Dark, fontSize: 15, fontWeight: "600" },
});
