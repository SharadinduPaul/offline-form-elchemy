import React from "react";
import { TinputFields } from "./types";

export default function useForm() {
  const [activeForm, setActiveForm] = React.useState<1 | 2>(1);
  const [formData, setFormData] = React.useState<{
    [x in TinputFields]?: string;
  }>({});

  const handleInputChange = (key: TinputFields, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleForm1Submit = () => {
    //validation

    setActiveForm(2)
  };

  return {
    activeForm,
    setActiveForm,
    formData,
    handleInputChange,
    handleForm1Submit,
  };
}
