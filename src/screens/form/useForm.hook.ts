import React from "react";
import { TinputFields } from "./types";

export default function useForm() {
  const [formData, setFormData] = React.useState<{
    [x in TinputFields]?: string;
  }>({});

  const handleInputChange = (key: TinputFields, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  
  return {
    formData,
    handleInputChange,
  };
}
