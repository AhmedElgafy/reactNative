import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { InputStyle } from "@/styles/input.style";
import { BrownRosy, Salmon } from "@/constants/Colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface PropsI {
  onChange: (e: string | number) => void;
  label: string;
  value: string | number;
  error:string | undefined
}
export default function InputPassword({
  onChange,
  label,
  value,
  error,
}: PropsI) {
  const [showText, setShowText] = useState<boolean>(false);
  return (
    <View>
      <Text style={[InputStyle.label]}>{label}</Text>
      <View
        style={[
          {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          },
          InputStyle.fieldStyle,
        ]}
      >
        <TextInput
          onChangeText={(e) => onChange(e)}
          secureTextEntry={showText ? false : true}
          placeholder="* * * * * * * * * *"
          style={[styles.password]}
          value={(value as string) || ""}
          placeholderTextColor={BrownRosy}
        />
        <TouchableOpacity
          onPress={() => setShowText(!showText)}
          style={[styles.eye]}
        >
          <FontAwesome5
            name={showText ? "eye-slash" : "eye"}
            size={24}
            color={Salmon}
          />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "red", fontSize: 12, opacity: error ? 0.5 : 0 }}>
        {error}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  password: {
    color: BrownRosy,
    fontSize: 15,
    width: "90%",
    justifyContent: "center",
    textAlignVertical: "center",
    height: "auto",
  },
  eye: {
    width: "10%",
  },
});
