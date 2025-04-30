import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Beige, Black, Dark, OrangeDark, Salmon } from "@/constants/Colors";
import { CardCheapIcon } from "@/components/ui/icons";
import { useFormik } from "formik";
import Card from "@/components/pages/profile/add-card/card";
import CardForm from "@/components/pages/profile/add-card/cardForm";
import { CardI } from "@/components/pages/profile/types";

export default function AddCard() {
  const cardInitValues: CardI = {
    expDate: "",
    number: "",
    name: "",
    cvv: "",
  };
  const formik = useFormik<CardI>({
    initialValues: cardInitValues,
    onSubmit: () => {},
  });
  return (
    <ScrollView style={{ marginBottom: 30 }}>
      <View style={{ flex: 1, justifyContent: "space-between", gap: 36 }}>
        <Card  values={formik.values}/>
        <CardForm values={formik.values} onChange={(e: CardI) => {formik.setValues(e)}} />
      </View>
    </ScrollView>
  );
}
