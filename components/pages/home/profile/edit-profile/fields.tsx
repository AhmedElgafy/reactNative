import { Beige, Salmon } from "@/constants/Colors";
import React, { ReactElement, useEffect, useState } from "react";
import {
  KeyboardTypeOptions,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { formatDate } from "@/lib/utils";
import { Gender } from "@/types/user";
import Radio from "@/components/ui/radio";

interface FormFieldsType<T = any> {
  label: string;
  key: string;
  keyboard?: KeyboardTypeOptions;
  renderItem?: (field: FormFieldsType<T>) => ReactElement;
  value?: T;
  onChange?: (newValue: T) => any;
  style?: StyleProp<ViewStyle>;
}

const formFields: FormFieldsType[] = [
  { key: "name", label: "Full Name", keyboard: "default" },
  { key: "email", label: "Email", keyboard: "email-address" },
  { key: "phone", label: "Mobile Number", keyboard: "phone-pad" },
  { key: "date", label: "Date Of Birth", renderItem: BirthDate },
  { key: "gender", label: "Gender", renderItem: GenderChooses },
];
export default formFields;
function GenderChooses({ key, label, value, style, onChange }: FormFieldsType) {
  // const [value, setValue] = useState<Gender>();
  const chooses: { value: Gender; label: string }[] = [
    { value: Gender.M, label: "Male" },
    { value: Gender.F, label: "Female" },
  ];
  const styles = StyleSheet.create({
    radioItem: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
  });
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 14,
      }}
    >
      {chooses.map((item, index) => {
        return (
          <Pressable
            onPress={() => onChange && onChange(item.value)}
            style={[style, styles.radioItem]}
            key={index}
          >
            <Radio isChecked={value == item.value} />
            <Text>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function BirthDate({ key, style, onChange, value: oldValue }: FormFieldsType) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<Date>(oldValue || new Date());
  return (
    <React.Fragment>
      <Pressable onPress={() => setOpen(true)}>
        <View style={style}>
          <Text style={{ marginVertical: "auto" }}>{formatDate(value)}</Text>
        </View>
      </Pressable>
      {open && (
        <DateTimePicker
          value={value}
          onChange={(data) => {
            const date = new Date(data.nativeEvent.timestamp);
            setOpen(false);
            setValue(date);
            onChange && onChange(date.toISOString());
          }}
        />
      )}
    </React.Fragment>
  );
}
