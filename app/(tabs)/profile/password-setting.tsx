import { ScrollView, View } from "react-native";
import React from "react";
import InputPassword from "@/components/pages/profile/change-password/passwordInput";
import ButtonUI from "@/components/ui/button";
import { Formik } from "formik";
import * as Yup from "yup";
interface ChangePasswordI {
  curPass: string;
  newPass: string;
  confPass: string;
}
const changePasswordSchema = Yup.object().shape({
  curPass: Yup.string().required("Current password is required"),
  newPass: Yup.string()
    .min(8, "New password must be at least 8 characters long")
    .required("New password is required"),
  confPass: Yup.string()
    .oneOf([Yup.ref("newPass"), ""], "Passwords must match")
    .required("Confirm password is required"),
});
const changePassword_DS: ChangePasswordI = {
  curPass: "",
  newPass: "",
  confPass: "",
};
interface inputDataI {
  name: string;
  label: string;
}
const inputsData: inputDataI[] = [
  { name: "curPass", label: "Current Password" },
  { name: "newPass", label: "New Password" },
  { name: "confPass", label: "Confirm New Password" },
];
export default function PasswordSetting() {
  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 50,
      }}
      style={{ paddingHorizontal: 30 }}
    >
      <Formik
        initialValues={changePassword_DS}
        validationSchema={changePasswordSchema}
        validateOnChange={true}
        onSubmit={(e) => {}}
      >
        {({ values, handleChange, errors, handleSubmit }) => {
          console.log(values);
          return (
            <>
              <View style={{ flex: 1, gap: 16 }}>
                {inputsData.map((input, key) => {
                  return (
                    <InputPassword
                      key={key}
                      error={errors[input.name as keyof ChangePasswordI]}
                      value={values[input.name as keyof ChangePasswordI]}
                      label={input.label}
                      onChange={(e) => handleChange(input.name)(e as string)}
                    />
                  );
                })}
              </View>
              <ButtonUI onPress={handleSubmit} text="Change password" />
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
}
