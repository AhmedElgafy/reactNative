import { Salmon } from "@/constants/Colors";
import { View } from "react-native";

function Radio({ isChecked }: { isChecked?: boolean }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        height: 20,
        width: 20,
        borderColor: Salmon,
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          borderRadius: "100%",
          height: 12,
          width: 12,
          borderColor: Salmon,
          ...(isChecked && { backgroundColor: Salmon }),
          borderStyle: "solid",
          borderWidth: 1,
        }}
      ></View>
    </View>
  );
}
export default Radio;
