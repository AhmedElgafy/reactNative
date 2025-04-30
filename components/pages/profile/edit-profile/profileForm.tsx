import React, { useState } from "react";
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { Formik, FormikHelpers } from "formik";
import { Beige, OrangeDark, Salmon } from "@/constants/Colors";
import formFields from "./fields";
import { FormValues } from "@/types/user";
import { InputStyle } from "@/styles/input.style";

export default function ProfileForm() {
  const initValues: FormValues = {
    name: "Madison Smith",
    email: "madisons@example.com",
    date: null,
    gender: null,
    phone: "+123 4567 890",
  };
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <Formik
        initialValues={initValues}
        onSubmit={async (values) => {
          setLoading(true);
          await new Promise((res, rej) => {
            setTimeout(() => {
              res(0);
            }, 5000);
          });
          setLoading(false);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={{ paddingHorizontal: 36, gap: 14 }}>
              {formFields.map(({ label, key, keyboard, renderItem }, index) => {
                return (
                  <View key={index}>
                    <Text style={[InputStyle.label]}>{label}</Text>
                    {!renderItem && (
                      <TextInput
                        style={styles.fieldStyle}
                        keyboardType={keyboard}
                        onChangeText={handleChange(key)}
                        onBlur={handleBlur(key)}
                        value={values[key as keyof FormValues] || undefined}
                      />
                    )}
                    {renderItem &&
                      renderItem({
                        label,
                        key,
                        style: styles.fieldStyle,
                        onChange: (newValue) => {
                          handleChange(key)(newValue);
                        },
                        value: values[key as keyof FormValues],
                      })}
                  </View>
                );
              })}
            </View>
            <TouchableOpacity
              disabled={loading}
              style={{
                opacity: loading ? 0.2 : 1,
                width: 208,
                backgroundColor: Salmon,
                borderRadius: 19,
                marginHorizontal: "auto",
                marginTop: 52,
              }}
              onPress={() => handleSubmit()}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "500",
                  color: OrangeDark,
                  paddingVertical: 5,
                }}
              >
                {loading ? "Loading > > >" : "Update Profile"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </>
  );
}
const styles = StyleSheet.create({
  androidDateTime: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fieldStyle: InputStyle.fieldStyle,
});
